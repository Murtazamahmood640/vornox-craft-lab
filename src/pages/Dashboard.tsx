import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Plus, Clock, CheckCircle2, AlertCircle, MessageCircle, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Project = Database["public"]["Tables"]["projects"]["Row"];
type Comment = Database["public"]["Tables"]["project_comments"]["Row"];
type Milestone = Database["public"]["Tables"]["project_milestones"]["Row"];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/20 text-yellow-400",
  approved: "bg-blue-500/20 text-blue-400",
  in_progress: "bg-primary/20 text-primary",
  on_hold: "bg-orange-500/20 text-orange-400",
  completed: "bg-green-500/20 text-green-400",
  cancelled: "bg-destructive/20 text-destructive",
};

const serviceOptions = [
  "Websites", "Web Applications", "Digital Marketing", "SEO",
  "Content Writing", "Graphic Design", "IT Consulting", "SaaS Development", "Recruitment",
];

export default function Dashboard() {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", service_type: "", budget: "" });

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) fetchProjects();
  }, [user]);

  useEffect(() => {
    if (selectedProject) {
      fetchComments(selectedProject.id);
      fetchMilestones(selectedProject.id);

      const channel = supabase
        .channel(`comments-${selectedProject.id}`)
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "project_comments", filter: `project_id=eq.${selectedProject.id}` }, (payload) => {
          setComments((prev) => [...prev, payload.new as Comment]);
        })
        .subscribe();

      return () => { supabase.removeChannel(channel); };
    }
  }, [selectedProject]);

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (data) setProjects(data);
  };

  const fetchComments = async (projectId: string) => {
    const { data } = await supabase.from("project_comments").select("*").eq("project_id", projectId).order("created_at");
    if (data) setComments(data);
  };

  const fetchMilestones = async (projectId: string) => {
    const { data } = await supabase.from("project_milestones").select("*").eq("project_id", projectId).order("created_at");
    if (data) setMilestones(data);
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const { error } = await supabase.from("projects").insert({
      user_id: user.id,
      title: newProject.title,
      description: newProject.description,
      service_type: newProject.service_type,
      budget: newProject.budget || null,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Service Requested!", description: "Your request has been submitted for approval." });
      setShowNewForm(false);
      setNewProject({ title: "", description: "", service_type: "", budget: "" });
      fetchProjects();
    }
  };

  const handleSendComment = async () => {
    if (!commentInput.trim() || !selectedProject || !user) return;
    await supabase.from("project_comments").insert({
      project_id: selectedProject.id,
      user_id: user.id,
      content: commentInput,
    });
    setCommentInput("");
  };

  if (loading) return <Layout><div className="flex items-center justify-center min-h-[60vh]"><div className="text-muted-foreground">Loading...</div></div></Layout>;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold">My Dashboard</h1>
              <p className="text-muted-foreground">Track your projects and service requests</p>
            </div>
            <div className="flex gap-3">
              {isAdmin && (
                <Button asChild variant="outline">
                  <Link to="/admin"><Shield className="w-4 h-4 mr-2" /> Admin Panel</Link>
                </Button>
              )}
              <Button onClick={() => setShowNewForm(true)} className="gradient-bg text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" /> Request Service
              </Button>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </div>
          </div>

          {/* New Project Form */}
          {showNewForm && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold mb-4">Request a Service</h2>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Title</label>
                    <Input value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} placeholder="My New Website" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Service Type</label>
                    <select value={newProject.service_type} onChange={(e) => setNewProject({ ...newProject, service_type: e.target.value })} required className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                      <option value="">Select service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Budget (optional)</label>
                  <Input value={newProject.budget} onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })} placeholder="e.g. $500 - $1000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} placeholder="Tell us about your requirements..." rows={4} required />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" className="gradient-bg text-primary-foreground">Submit Request</Button>
                  <Button type="button" variant="outline" onClick={() => setShowNewForm(false)}>Cancel</Button>
                </div>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project List */}
            <div className="lg:col-span-1 space-y-3">
              <h2 className="font-display text-lg font-semibold mb-3">Your Projects</h2>
              {projects.length === 0 ? (
                <div className="bg-card border border-border rounded-xl p-6 text-center text-muted-foreground">
                  <AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-30" />
                  <p>No projects yet. Request a service to get started!</p>
                </div>
              ) : (
                projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selectedProject?.id === p.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm truncate">{p.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[p.status] || ""}`}>{p.status.replace("_", " ")}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{p.service_type}</p>
                    {p.progress !== null && p.progress > 0 && (
                      <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                        <div className="gradient-bg h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Project Detail */}
            <div className="lg:col-span-2">
              {selectedProject ? (
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display text-2xl font-bold">{selectedProject.title}</h2>
                      <span className={`text-sm px-3 py-1 rounded-full ${statusColors[selectedProject.status] || ""}`}>{selectedProject.status.replace("_", " ")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{selectedProject.service_type} • Created {new Date(selectedProject.created_at).toLocaleDateString()}</p>
                    {selectedProject.budget && <p className="text-sm mt-1">Budget: {selectedProject.budget}</p>}
                    {selectedProject.description && <p className="mt-3 text-sm">{selectedProject.description}</p>}
                    {selectedProject.progress !== null && selectedProject.progress > 0 && (
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-1"><span>Progress</span><span>{selectedProject.progress}%</span></div>
                        <div className="w-full bg-muted rounded-full h-2"><div className="gradient-bg h-2 rounded-full transition-all" style={{ width: `${selectedProject.progress}%` }} /></div>
                      </div>
                    )}
                  </div>

                  {/* Milestones */}
                  {milestones.length > 0 && (
                    <div className="p-6 border-b border-border">
                      <h3 className="font-semibold text-sm mb-3">Milestones</h3>
                      <div className="space-y-2">
                        {milestones.map((m) => (
                          <div key={m.id} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className={`w-4 h-4 ${m.is_completed ? "text-green-400" : "text-muted-foreground"}`} />
                            <span className={m.is_completed ? "line-through text-muted-foreground" : ""}>{m.title}</span>
                            {m.due_date && <span className="text-xs text-muted-foreground ml-auto">{new Date(m.due_date).toLocaleDateString()}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Comments / Chat */}
                  <div className="p-6">
                    <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Discussion</h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                      {comments.length === 0 && <p className="text-sm text-muted-foreground">No messages yet.</p>}
                      {comments.map((c) => (
                        <div key={c.id} className={`p-3 rounded-lg text-sm ${c.user_id === user?.id ? "bg-primary/10 ml-8" : "bg-muted mr-8"}`}>
                          <p>{c.content}</p>
                          <span className="text-xs text-muted-foreground mt-1 block">{new Date(c.created_at).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input value={commentInput} onChange={(e) => setCommentInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendComment()} placeholder="Type a message..." className="h-10" />
                      <Button onClick={handleSendComment} className="gradient-bg text-primary-foreground h-10">Send</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">
                  <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Select a project to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
