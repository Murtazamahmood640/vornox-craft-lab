import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, CheckCircle2, XCircle, Clock, Play, Pause, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Project = Database["public"]["Tables"]["projects"]["Row"];

const statusOptions = ["pending", "approved", "in_progress", "on_hold", "completed", "cancelled"] as const;

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/20 text-yellow-400",
  approved: "bg-blue-500/20 text-blue-400",
  in_progress: "bg-primary/20 text-primary",
  on_hold: "bg-orange-500/20 text-orange-400",
  completed: "bg-green-500/20 text-green-400",
  cancelled: "bg-destructive/20 text-destructive",
};

export default function Admin() {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [milestoneTitle, setMilestoneTitle] = useState("");
  const [adminComment, setAdminComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [milestones, setMilestones] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate("/dashboard");
  }, [user, loading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) fetchProjects();
  }, [isAdmin]);

  useEffect(() => {
    if (selected) {
      supabase.from("project_comments").select("*").eq("project_id", selected.id).order("created_at").then(({ data }) => data && setComments(data));
      supabase.from("project_milestones").select("*").eq("project_id", selected.id).order("created_at").then(({ data }) => data && setMilestones(data));
    }
  }, [selected]);

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (data) setProjects(data);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("projects").update({ status: status as any }).eq("id", id);
    toast({ title: "Status updated" });
    fetchProjects();
    if (selected?.id === id) setSelected({ ...selected, status: status as any });
  };

  const updateProgress = async (id: string, progress: number) => {
    await supabase.from("projects").update({ progress }).eq("id", id);
    fetchProjects();
    if (selected?.id === id) setSelected({ ...selected, progress });
  };

  const addMilestone = async () => {
    if (!milestoneTitle.trim() || !selected) return;
    await supabase.from("project_milestones").insert({ project_id: selected.id, title: milestoneTitle });
    setMilestoneTitle("");
    const { data } = await supabase.from("project_milestones").select("*").eq("project_id", selected.id).order("created_at");
    if (data) setMilestones(data);
    toast({ title: "Milestone added" });
  };

  const toggleMilestone = async (id: string, completed: boolean) => {
    await supabase.from("project_milestones").update({ is_completed: !completed, completed_at: !completed ? new Date().toISOString() : null }).eq("id", id);
    const { data } = await supabase.from("project_milestones").select("*").eq("project_id", selected!.id).order("created_at");
    if (data) setMilestones(data);
  };

  const sendAdminComment = async () => {
    if (!adminComment.trim() || !selected || !user) return;
    await supabase.from("project_comments").insert({ project_id: selected.id, user_id: user.id, content: adminComment });
    setAdminComment("");
    const { data } = await supabase.from("project_comments").select("*").eq("project_id", selected.id).order("created_at");
    if (data) setComments(data);
  };

  if (loading) return <Layout><div className="flex items-center justify-center min-h-[60vh]"><div className="text-muted-foreground">Loading...</div></div></Layout>;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-display text-3xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground">Manage all service requests and projects</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-1 space-y-2 max-h-[80vh] overflow-y-auto">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${selected?.id === p.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm truncate">{p.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[p.status]}`}>{p.status.replace("_", " ")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{p.service_type} • {new Date(p.created_at).toLocaleDateString()}</p>
                </button>
              ))}
              {projects.length === 0 && <p className="text-muted-foreground text-center py-8">No requests yet</p>}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-display text-2xl font-bold mb-2">{selected.title}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{selected.service_type} • Budget: {selected.budget || "N/A"}</p>
                    {selected.description && <p className="text-sm mb-4">{selected.description}</p>}

                    {/* Status Control */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {statusOptions.map((s) => (
                        <Button key={s} size="sm" variant={selected.status === s ? "default" : "outline"} onClick={() => updateStatus(selected.id, s)} className={selected.status === s ? "gradient-bg text-primary-foreground" : ""}>
                          {s.replace("_", " ")}
                        </Button>
                      ))}
                    </div>

                    {/* Progress */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm">Progress:</span>
                      <input type="range" min="0" max="100" value={selected.progress || 0} onChange={(e) => updateProgress(selected.id, parseInt(e.target.value))} className="flex-1" />
                      <span className="text-sm font-medium">{selected.progress || 0}%</span>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="p-6 border-b border-border">
                    <h3 className="font-semibold text-sm mb-3">Milestones</h3>
                    <div className="space-y-2 mb-3">
                      {milestones.map((m: any) => (
                        <div key={m.id} className="flex items-center gap-3">
                          <button onClick={() => toggleMilestone(m.id, m.is_completed)}>
                            <CheckCircle2 className={`w-5 h-5 ${m.is_completed ? "text-green-400" : "text-muted-foreground"}`} />
                          </button>
                          <span className={`text-sm ${m.is_completed ? "line-through text-muted-foreground" : ""}`}>{m.title}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input value={milestoneTitle} onChange={(e) => setMilestoneTitle(e.target.value)} placeholder="New milestone..." className="h-9" />
                      <Button size="sm" onClick={addMilestone}><Plus className="w-4 h-4" /></Button>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="p-6">
                    <h3 className="font-semibold text-sm mb-3">Client Communication</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
                      {comments.map((c: any) => (
                        <div key={c.id} className={`p-3 rounded-lg text-sm ${c.user_id === user?.id ? "bg-primary/10 ml-8" : "bg-muted mr-8"}`}>
                          <p>{c.content}</p>
                          <span className="text-xs text-muted-foreground">{new Date(c.created_at).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input value={adminComment} onChange={(e) => setAdminComment(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendAdminComment()} placeholder="Reply to client..." className="h-10" />
                      <Button onClick={sendAdminComment} className="gradient-bg text-primary-foreground">Send</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">
                  <Shield className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Select a project to manage</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
