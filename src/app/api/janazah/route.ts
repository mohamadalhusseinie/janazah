import { janazahPosts } from '@/lib/data';
import { JanazahPost } from '@/lib/types';
import { z } from 'zod';

const janazahSchema = z.object({
  deceasedName: z.string().min(2),
  city: z.string().min(2),
  mosque: z.string().min(2),
  prayerAt: z.string().datetime({ offset: true }).or(z.string().min(5)),
  burialAt: z.string().datetime({ offset: true }).or(z.string().min(5)),
  cemetery: z.string().min(2),
  contactName: z.string().min(2),
  notes: z.string().optional().default('')
});

export async function GET() {
  return Response.json(janazahPosts);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = janazahSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? 'Ungültige Daten' }, { status: 400 });
  }

  const nextPost: JanazahPost = {
    id: String(janazahPosts.length + 1),
    ...parsed.data
  };

  janazahPosts.unshift(nextPost);
  return Response.json(nextPost, { status: 201 });
}
