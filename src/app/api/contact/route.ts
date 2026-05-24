import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email().max(200),
  sujet: z.string().min(3).max(200),
  message: z.string().min(20).max(5000),
});

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { nom, email, sujet, message } = parsed.data;
  const destinataire = process.env.CONTACT_EMAIL ?? "contact@saphiragency.fr";

  try {
    await resend.emails.send({
      from: "Saphir Agency Contact <onboarding@resend.dev>",
      to: [destinataire],
      replyTo: email,
      subject: `[Saphir Agency] ${sujet}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #C9A84C; font-size: 20px; margin-bottom: 24px;">
            Nouveau message de contact — Saphir Agency
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 12px 0; color: #94A3B8; width: 80px; font-size: 13px;">De</td>
              <td style="padding: 12px 0; color: #F1F5F9; font-size: 14px;">${nom} &lt;${email}&gt;</td>
            </tr>
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 12px 0; color: #94A3B8; font-size: 13px;">Sujet</td>
              <td style="padding: 12px 0; color: #F1F5F9; font-size: 14px;">${sujet}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #1E293B; border-radius: 6px; border-left: 2px solid #C9A84C;">
            <p style="color: #94A3B8; font-size: 12px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="color: #F1F5F9; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
