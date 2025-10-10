import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  spaceType: string;
  date: string;
  duration: string;
  message: string;
  lang: 'fr' | 'en';
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingRequest = await req.json();
    console.log("Booking request received:", bookingData);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const spaceTypeLabels = {
      fr: {
        office: "Bureau Privé",
        coworking: "Espace Coworking",
        meeting: "Salle de Réunion",
        consulting: "Consultation Stratégie Digitale"
      },
      en: {
        office: "Private Office",
        coworking: "Coworking Space",
        meeting: "Meeting Room",
        consulting: "Digital Strategy Consultation"
      }
    };

    const durationLabels = {
      fr: {
        hour: "1 heure",
        halfDay: "Demi-journée",
        day: "Journée complète",
        week: "1 semaine",
        month: "1 mois"
      },
      en: {
        hour: "1 hour",
        halfDay: "Half day",
        day: "Full day",
        week: "1 week",
        month: "1 month"
      }
    };

    const spaceLabel = spaceTypeLabels[bookingData.lang][bookingData.spaceType as keyof typeof spaceTypeLabels.fr] || bookingData.spaceType;
    const durationLabel = durationLabels[bookingData.lang][bookingData.duration as keyof typeof durationLabels.fr] || bookingData.duration;

    // Send confirmation email to customer
    const customerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "West Digital Hub <onboarding@resend.dev>",
        to: [bookingData.email],
        subject: bookingData.lang === 'fr' ? "Confirmation de votre réservation" : "Booking Confirmation",
        html: `
          <h1>${bookingData.lang === 'fr' ? 'Merci pour votre réservation' : 'Thank you for your booking'}, ${bookingData.name}!</h1>
          <p>${bookingData.lang === 'fr' ? 'Nous avons bien reçu votre demande de réservation avec les détails suivants :' : 'We have received your booking request with the following details:'}</p>
          <ul>
            <li><strong>${bookingData.lang === 'fr' ? 'Type d\'espace' : 'Space type'}:</strong> ${spaceLabel}</li>
            <li><strong>${bookingData.lang === 'fr' ? 'Date' : 'Date'}:</strong> ${bookingData.date}</li>
            <li><strong>${bookingData.lang === 'fr' ? 'Durée' : 'Duration'}:</strong> ${durationLabel}</li>
            <li><strong>${bookingData.lang === 'fr' ? 'Téléphone' : 'Phone'}:</strong> ${bookingData.phone}</li>
            ${bookingData.message ? `<li><strong>Message:</strong> ${bookingData.message}</li>` : ''}
          </ul>
          <p>${bookingData.lang === 'fr' ? 'Nous vous contacterons sous peu pour confirmer votre réservation.' : 'We will contact you shortly to confirm your booking.'}</p>
          <p>${bookingData.lang === 'fr' ? 'Cordialement' : 'Best regards'},<br>West Digital Hub</p>
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
        subject: `Nouvelle réservation - ${spaceLabel}`,
        html: `
          <h1>Nouvelle demande de réservation</h1>
          <h2>Informations du client:</h2>
          <ul>
            <li><strong>Nom:</strong> ${bookingData.name}</li>
            <li><strong>Email:</strong> ${bookingData.email}</li>
            <li><strong>Téléphone:</strong> ${bookingData.phone}</li>
          </ul>
          <h2>Détails de la réservation:</h2>
          <ul>
            <li><strong>Type d'espace:</strong> ${spaceLabel}</li>
            <li><strong>Date:</strong> ${bookingData.date}</li>
            <li><strong>Durée:</strong> ${durationLabel}</li>
            ${bookingData.message ? `<li><strong>Message:</strong> ${bookingData.message}</li>` : ''}
          </ul>
          <p><a href="https://wa.me/237658315610?text=${encodeURIComponent(`Nouvelle réservation de ${bookingData.name} pour ${spaceLabel} le ${bookingData.date}`)}" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">Contacter sur WhatsApp</a></p>
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
        message: "Booking request sent successfully"
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking function:", error);
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
