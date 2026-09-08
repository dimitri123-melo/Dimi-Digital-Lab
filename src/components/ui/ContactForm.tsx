'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    description: '',
    budget: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L’email est requis' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'fr' ? 'Veuillez saisir un email valide' : 'Please enter a valid email';
    }
    if (!formData.description.trim()) {
      newErrors.description = language === 'fr' ? 'Veuillez décrire votre projet' : 'Please describe your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Client-side simulation of message submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
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
      <div className="card-surface rounded-2xl p-12 flex flex-col items-center justify-center text-center">
        <CheckCircle2 className="w-16 h-16 text-brand-blue mb-6 animate-in zoom-in-50 duration-300" />
        <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-3">
          {language === 'fr' ? 'Message Envoyé' : 'Message Sent'}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm leading-relaxed">
          {t.contact.form.successMessage}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              company: '',
              service: '',
              description: '',
              budget: '',
              timeline: '',
            });
          }}
          className="mt-6 px-5 py-2 rounded-lg bg-zinc-100 dark:bg-surface-200 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
        >
          {language === 'fr' ? 'Envoyer un autre message' : 'Send another inquiry'}
        </button>
      </div>
    );
  }

  const inputStyles =
    'w-full bg-white dark:bg-surface-100 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 outline-none transition-all duration-200 text-sm shadow-sm';
  const errorInputStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500/50';
  const labelStyles = 'block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.name}
            </p>
          )}
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
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelStyles}>
            {language === 'fr' ? 'Entreprise / Marque' : 'Company / Brand'}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputStyles}
            placeholder={language === 'fr' ? 'Votre organisation' : 'Your organization'}
          />
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
            <option value="marketing">{t.contact.form.serviceOptions.marketing}</option>
            <option value="aiCreative">{t.contact.form.serviceOptions.aiCreative}</option>
            <option value="webDev">{t.contact.form.serviceOptions.webDev}</option>
            <option value="software">{t.contact.form.serviceOptions.software}</option>
            <option value="other">{t.contact.form.serviceOptions.other}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelStyles}>
          {t.contact.form.messageLabel} *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`${inputStyles} resize-none ${errors.description ? errorInputStyles : ''}`}
          placeholder={t.contact.form.messagePlaceholder}
          aria-describedby={errors.description ? 'desc-error' : undefined}
        />
        {errors.description && (
          <p id="desc-error" className="text-red-500 text-xs mt-1" role="alert">
            {errors.description}
          </p>
        )}
      </div>

      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="w-full mt-2"
        disabled={isSubmitting}
        icon={<Send className="w-4 h-4" />}
      >
        {isSubmitting ? t.contact.form.submittingButton : t.contact.form.submitButton}
      </Button>
    </form>
  );
}
