import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
  lang: 'fr' | 'en';
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const newsletterData: NewsletterRequest = await req.json();
    console.log("Newsletter subscription received:", newsletterData);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Send confirmation email to subscriber
    const subscriberEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "West Digital Hub <onboarding@resend.dev>",
        to: [newsletterData.email],
        subject: newsletterData.lang === 'fr' ? "Bienvenue dans notre communauté!" : "Welcome to our community!",
        html: `
          <h1>${newsletterData.lang === 'fr' ? 'Merci de vous être abonné à notre newsletter!' : 'Thank you for subscribing to our newsletter!'}</h1>
          <p>${newsletterData.lang === 'fr' 
            ? 'Vous recevrez désormais nos actualités, événements et opportunités directement dans votre boîte mail.' 
            : 'You will now receive our news, events and opportunities directly in your inbox.'}</p>
          <p>${newsletterData.lang === 'fr' ? 'Restez connecté!' : 'Stay connected!'}</p>
          <p>${newsletterData.lang === 'fr' ? 'L\'équipe' : 'The team'},<br>West Digital Hub</p>
        `,
      }),
    });

    if (!subscriberEmailRes.ok) {
      const errorText = await subscriberEmailRes.text();
      console.error("Subscriber email error:", errorText);
    } else {
      console.log("Subscriber email sent successfully");
    }

    // Notify manager of new subscription
    const managerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "West Digital Hub <onboarding@resend.dev>",
        to: ["contact@westhub.cm"],
        subject: `Nouvel abonné à la newsletter`,
        html: `
          <h1>Nouveau abonné à la newsletter</h1>
          <p><strong>Email:</strong> ${newsletterData.email}</p>
        `,
      }),
    });

    if (!managerEmailRes.ok) {
      const errorText = await managerEmailRes.text();
      console.error("Manager email error:", errorText);
    } else {
      console.log("Manager email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Newsletter subscription successful"
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
