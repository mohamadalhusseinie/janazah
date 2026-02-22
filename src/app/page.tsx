import { CreateJanazahForm } from '@/components/create-janazah-form';
import { SubscribeForm } from '@/components/subscribe-form';
import { janazahPosts } from '@/lib/data';

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl gap-6 p-6">
      <section className="rounded-xl bg-emerald-900 p-6 text-white">
        <h1 className="text-3xl font-bold">Janazah Plattform</h1>
        <p className="mt-2 max-w-2xl text-emerald-100">
          Für Gemeinden: Janazah schnell veröffentlichen, Städten/Moscheen folgen und die Ummah
          besser informieren.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <CreateJanazahForm />
        <SubscribeForm />
      </section>

      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-3 text-xl font-semibold">Aktuelle Janazah-Meldungen</h2>
        <ul className="space-y-3">
          {janazahPosts.map((post) => (
            <li key={post.id} className="rounded-lg border border-slate-200 p-3">
              <p className="font-medium">{post.deceasedName}</p>
              <p className="text-sm text-slate-600">
                {post.city} · {post.mosque}
              </p>
              <p className="text-sm text-slate-600">
                Janazah-Gebet: {new Date(post.prayerAt).toLocaleString('de-DE')}
              </p>
              <p className="text-sm text-slate-600">
                Beisetzung: {new Date(post.burialAt).toLocaleString('de-DE')} ({post.cemetery})
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
