import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { submitContact } from '../services/projectsService';

const EMAILJS_SERVICE_ID  = 'service_fg4kbpq';
const EMAILJS_TEMPLATE_ID = 'template_xo1vez2';
const EMAILJS_PUBLIC_KEY  = 'hdec0ZkVX5EKW0PvO';

const INITIAL = { name: '', email: '', message: '' };

export function useContactForm() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrMsg('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrMsg('');

    try {
      // 1. Save to Supabase
      await submitContact({ name, email, message });

      // 2. Send email notification via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return { form, status, errMsg, handleChange, handleSubmit };
}