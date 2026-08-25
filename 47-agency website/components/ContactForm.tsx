'use client';

import { FormEvent, useState } from 'react';
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase';

const SERVICE_OPTIONS = ['Digital Marketing', 'Social Media Management', 'Creative & Design', 'Brand Building'];

type FieldErrors = Partial<Record<'name' | 'company' | 'email' | 'market' | 'details' | 'services', boolean>>;

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function toggleService(value: string) {
    setSelectedServices((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const website = String(formData.get('website') || '').trim();
    const market = String(formData.get('market') || '').trim();
    const budget = String(formData.get('budget') || '').trim();
    const details = String(formData.get('details') || '').trim();
    const contactMethod = String(formData.get('contactMethod') || 'Email');

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const nextErrors: FieldErrors = {
      name: !name,
      company: !company,
      email: !emailOk,
      market: !market,
      details: !details,
      services: selectedServices.length === 0,
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus('error');
      setErrorMessage('Please check the highlighted fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const supabase = getSupabase();
    if (!supabase) {
      setStatus('error');
      setErrorMessage(
        'The contact form is not connected to a database yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment to enable submissions.'
      );
      return;
    }

    const { error } = await supabase.from('contact_requests').insert([
      {
        name,
        company,
        email,
        website: website || null,
        target_market: market,
        budget: budget || null,
        services_needed: selectedServices,
        project_details: details,
        preferred_contact_method: contactMethod,
      },
    ]);

    if (error) {
      console.error('Contact request submission failed:', error.message);
      setStatus('error');
      setErrorMessage('Something went wrong sending your request. Please try again, or email us directly.');
      return;
    }

    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="form-success-panel">
        <h3>Thank you — request received.</h3>
        <p>Your project details have been sent to 47 Agency. We&apos;ll review them and get back to you at the email or contact method you provided.</p>
      </div>
    );
  }

  return (
    <form className="inquiry" onSubmit={handleSubmit} noValidate>
      {!isSupabaseConfigured && (
        <div className="field full">
          <span className="form-status error">
            Supabase is not configured yet — submissions won&apos;t be saved until environment variables are set.
          </span>
        </div>
      )}

      <div className={`field ${errors.name ? 'error' : ''}`}>
        <label htmlFor="f-name">Name *</label>
        <input type="text" id="f-name" name="name" placeholder="Full name" />
        <span className="err-msg">Please enter your name.</span>
      </div>

      <div className={`field ${errors.company ? 'error' : ''}`}>
        <label htmlFor="f-company">Company *</label>
        <input type="text" id="f-company" name="company" placeholder="Company name" />
        <span className="err-msg">Please enter your company.</span>
      </div>

      <div className={`field ${errors.email ? 'error' : ''}`}>
        <label htmlFor="f-email">Email *</label>
        <input type="email" id="f-email" name="email" placeholder="you@company.com" />
        <span className="err-msg">Please enter a valid email.</span>
      </div>

      <div className="field">
        <label htmlFor="f-website">Website</label>
        <input type="text" id="f-website" name="website" placeholder="yourcompany.com" />
      </div>

      <div className={`field ${errors.market ? 'error' : ''}`}>
        <label htmlFor="f-market">Target Market *</label>
        <input type="text" id="f-market" name="market" placeholder="e.g. UAE, Saudi Arabia, global" />
        <span className="err-msg">Please tell us your target market.</span>
      </div>

      <div className="field">
        <label htmlFor="f-budget">Budget (optional)</label>
        <input type="text" id="f-budget" name="budget" placeholder="Monthly or project budget" />
      </div>

      <div className={`field full ${errors.services ? 'error' : ''}`}>
        <label>Services Needed *</label>
        <div className="chip-group">
          {SERVICE_OPTIONS.map((s) => (
            <button
              type="button"
              key={s}
              className={`chip ${selectedServices.includes(s) ? 'selected' : ''}`}
              onClick={() => toggleService(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <span className="err-msg">Please select at least one service.</span>
      </div>

      <div className={`field full ${errors.details ? 'error' : ''}`}>
        <label htmlFor="f-details">Project Details *</label>
        <textarea id="f-details" name="details" placeholder="Tell us about the project, goals and timeline" />
        <span className="err-msg">Please add a few details about the project.</span>
      </div>

      <div className="field full">
        <label>Preferred Contact Method</label>
        <div className="radio-group">
          <label className="radio-opt">
            <input type="radio" name="contactMethod" value="Email" defaultChecked /> Email
          </label>
          <label className="radio-opt">
            <input type="radio" name="contactMethod" value="Phone" /> Phone
          </label>
          <label className="radio-opt">
            <input type="radio" name="contactMethod" value="WhatsApp" /> WhatsApp
          </label>
        </div>
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Request a Proposal'}
        </button>
        {status === 'error' && <span className="form-status error">{errorMessage}</span>}
      </div>
    </form>
  );
}
