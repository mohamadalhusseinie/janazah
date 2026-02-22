import { subscriptions } from '@/lib/data';
import { z } from 'zod';

const subscriptionSchema = z
  .object({
    email: z.string().email(),
    city: z.string().optional(),
    mosque: z.string().optional()
  })
  .refine((data) => Boolean(data.city || data.mosque), {
    message: 'Bitte Stadt oder Moschee angeben.'
  });

export async function GET() {
  return Response.json(subscriptions);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = subscriptionSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? 'Ungültige Daten' }, { status: 400 });
  }

  subscriptions.push(parsed.data);
  return Response.json(parsed.data, { status: 201 });
}
