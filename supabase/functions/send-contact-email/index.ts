import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { name, email, phone, company, service, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Use Supabase's built-in SMTP via the Auth admin API or a simple approach:
    // We'll use the Resend-compatible approach via Supabase's inbuilt mailer
    // For now, store in database and notify via the AI gateway
    
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Store contact submission
    const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ name, email, phone, company, service, message }),
    });

    return new Response(JSON.stringify({ success: true, message: "Your message has been received! We'll get back to you within 24 hours." }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-email error:", e);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
