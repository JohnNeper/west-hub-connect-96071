import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  lang: 'fr' | 'en';
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();
    console.log("Contact request received:", contactData);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Send confirmation email to customer
    const customerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "West Digital Hub <onboarding@resend.dev>",
        to: [contactData.email],
        subject: contactData.lang === 'fr' ? "Nous avons reçu votre message" : "We received your message",
        html: `
          <h1>${contactData.lang === 'fr' ? 'Merci de nous avoir contactés' : 'Thank you for contacting us'}, ${contactData.name}!</h1>
          <p>${contactData.lang === 'fr' ? 'Nous avons bien reçu votre message concernant :' : 'We have received your message regarding:'}</p>
          <p><strong>${contactData.subject}</strong></p>
          <p>${contactData.lang === 'fr' ? 'Nous vous répondrons dans les plus brefs délais.' : 'We will get back to you as soon as possible.'}</p>
          <p>${contactData.lang === 'fr' ? 'Cordialement' : 'Best regards'},<br>West Digital Hub</p>
        `,
      }),
    });

    if (!customerEmailRes.ok) {
      const errorText = await customerEmailRes.text();
      console.error("Customer email error:", errorText);
    } else {
      console.log("Customer email sent successfully");
    }

    // Send notification to manager
    const managerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "West Digital Hub <onboarding@resend.dev>",
        to: ["contact@westhub.cm"],
        subject: `Nouveau message de contact - ${contactData.subject}`,
        html: `
          <h1>Nouveau message de contact</h1>
          <h2>Informations de l'expéditeur:</h2>
          <ul>
            <li><strong>Nom:</strong> ${contactData.name}</li>
            <li><strong>Email:</strong> ${contactData.email}</li>
            <li><strong>Sujet:</strong> ${contactData.subject}</li>
          </ul>
          <h2>Message:</h2>
          <p>${contactData.message}</p>
          <p><a href="mailto:${contactData.email}" style="background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">Répondre par email</a></p>
          <p><a href="https://wa.me/237658315610?text=${encodeURIComponent(`Message de ${contactData.name}: ${contactData.message}`)}" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">Contacter sur WhatsApp</a></p>
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
        message: "Contact request sent successfully"
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact function:", error);
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
