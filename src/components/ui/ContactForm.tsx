'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check URL hash / query parameters for preselected training programme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('training-ecommerce')) {
        setFormData((prev) => ({ ...prev, service: 'trainingEcommerce' }));
      } else if (hash.includes('training-product')) {
        setFormData((prev) => ({ ...prev, service: 'trainingProduct' }));
      } else if (hash.includes('training-video')) {
        setFormData((prev) => ({ ...prev, service: 'trainingVideo' }));
      } else if (hash.includes('training-marketing')) {
        setFormData((prev) => ({ ...prev, service: 'trainingMarketing' }));
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L’email est requis' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        language === 'fr' ? 'Veuillez saisir un email valide' : 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message =
        language === 'fr' ? 'Veuillez décrire votre projet' : 'Please describe your request';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate direct dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center bg-white dark:bg-surface-100 border border-zinc-300 dark:border-zinc-800">
        <CheckCircle2 className="w-14 h-14 text-brand-blue mb-4 animate-in zoom-in-50 duration-300" />
        <h3 className="font-heading text-2xl font-extrabold text-zinc-950 dark:text-white mb-2">
          {language === 'fr' ? 'Message Envoyé Avec Succès' : 'Message Sent Successfully'}
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300 max-w-md text-sm leading-relaxed font-normal">
          {t.contact.form.successMessage}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', service: '', message: '' });
          }}
          className="mt-6 px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-surface-200 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
        >
          {language === 'fr' ? 'Envoyer une autre demande' : 'Send another inquiry'}
        </button>
      </div>
    );
  }

  const inputStyles =
    'w-full bg-white dark:bg-surface-200/60 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 outline-none transition-all duration-200 text-sm font-medium';
  const errorInputStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500/50';
  const labelStyles =
    'block text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 mb-1.5 uppercase tracking-wider';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelStyles}>
            {t.contact.form.nameLabel} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputStyles} ${errors.name ? errorInputStyles : ''}`}
            placeholder={t.contact.form.namePlaceholder}
          />
          {errors.name && <p className="text-red-600 dark:text-red-400 text-xs font-bold mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            {t.contact.form.emailLabel} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputStyles} ${errors.email ? errorInputStyles : ''}`}
            placeholder={t.contact.form.emailPlaceholder}
          />
          {errors.email && <p className="text-red-600 dark:text-red-400 text-xs font-bold mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelStyles}>
          {t.contact.form.serviceLabel}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">{t.contact.form.servicePlaceholder}</option>
          <optgroup label={language === 'fr' ? 'Services Professionnels' : 'Professional Services'}>
            <option value="webDev">{t.contact.form.serviceOptions.webDev}</option>
            <option value="marketing">{t.contact.form.serviceOptions.marketing}</option>
            <option value="creative">{t.contact.form.serviceOptions.creative}</option>
            <option value="automation">{t.contact.form.serviceOptions.automation}</option>
          </optgroup>
          <optgroup
            label={language === 'fr' ? 'Programmes de Formation' : 'Training Programmes'}
          >
            <option value="trainingEcommerce">
              {t.contact.form.serviceOptions.trainingEcommerce}
            </option>
            <option value="trainingProduct">
              {t.contact.form.serviceOptions.trainingProduct}
            </option>
            <option value="trainingVideo">{t.contact.form.serviceOptions.trainingVideo}</option>
            <option value="trainingMarketing">
              {t.contact.form.serviceOptions.trainingMarketing}
            </option>
          </optgroup>
          <option value="other">{t.contact.form.serviceOptions.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          {t.contact.form.messageLabel} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputStyles} resize-none ${errors.message ? errorInputStyles : ''}`}
          placeholder={t.contact.form.messagePlaceholder}
        />
        {errors.message && <p className="text-red-600 dark:text-red-400 text-xs font-bold mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm tracking-wide shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 cursor-pointer"
      >
        <span>
          {isSubmitting ? t.contact.form.submittingButton : t.contact.form.submitButton}
        </span>
        <Send size={15} />
      </button>
    </form>
  );
}
