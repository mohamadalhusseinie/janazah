'use client';

import { useState } from 'react';

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [mosque, setMosque] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, city, mosque })
    });

    if (response.ok) {
      setMessage('Abo erstellt. Benachrichtigungen können später via E-Mail verschickt werden.');
      setEmail('');
      setCity('');
      setMosque('');
      return;
    }

    const errorPayload = (await response.json()) as { error?: string };
    setMessage(errorPayload.error ?? 'Fehler beim Speichern.');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">Stadt/Moschee abonnieren</h2>
      <label className="block text-sm font-medium text-slate-700">
        E-Mail
        <input
          type="email"
          required
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Stadt
        <input
          type="text"
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Moschee
        <input
          type="text"
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          value={mosque}
          onChange={(event) => setMosque(event.target.value)}
        />
      </label>
      <button className="rounded bg-slate-800 px-4 py-2 font-medium text-white" type="submit">
        Abonnieren
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}
