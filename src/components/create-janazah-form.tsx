'use client';

import { useState } from 'react';

const initialState = {
  deceasedName: '',
  city: '',
  mosque: '',
  prayerAt: '',
  burialAt: '',
  cemetery: '',
  contactName: '',
  notes: ''
};

export function CreateJanazahForm() {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/janazah', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setMessage('Janazah wurde gespeichert (MVP-Demo, In-Memory).');
      setFormData(initialState);
      return;
    }

    const errorPayload = (await response.json()) as { error?: string };
    setMessage(errorPayload.error ?? 'Fehler beim Speichern.');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">Janazah melden</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(formData).map(([field, value]) => (
          <label key={field} className="text-sm font-medium text-slate-700">
            {field}
            <input
              type={field.includes('At') ? 'datetime-local' : 'text'}
              className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
              required={field !== 'notes'}
              value={value}
              onChange={(event) =>
                setFormData((previous) => ({ ...previous, [field]: event.target.value }))
              }
            />
          </label>
        ))}
      </div>
      <button className="rounded bg-emerald-700 px-4 py-2 font-medium text-white" type="submit">
        Speichern
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}
