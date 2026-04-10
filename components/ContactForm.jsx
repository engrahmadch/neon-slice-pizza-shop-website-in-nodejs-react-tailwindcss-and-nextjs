import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'A valid email is required.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const submitPayload = async (payload) => {
    setIsSubmitting(true);

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('offline');
      }

      setToast({
        type: 'success',
        message: 'Message sent (demo)',
      });
      setValues(initialValues);
      setErrors({});
    } catch {
      setToast({
        type: 'error',
        message: 'Message failed to send in demo mode.',
        retryPayload: payload,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToast({
        type: 'error',
        message: 'Please fix the highlighted fields.',
      });
      return;
    }

    await submitPayload(values);
  };

  const updateField = (fieldName) => (event) => {
    setValues((previous) => ({
      ...previous,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-accent/20 bg-black/55 p-6 sm:p-8 neon-border">
        <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
        <h2 className="mt-3 font-futurist text-3xl font-bold sm:text-4xl">Send Us A Message</h2>
        <p className="mt-3 text-white/75">
          This form is UI-only for portfolio demonstration and does not submit to a backend service.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/85">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={updateField('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-primary">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/85">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={updateField('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-primary">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/85">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={updateField('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-primary">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-primary px-6 py-3 font-futurist text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#ff5e2c] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            role="status"
            className="fixed bottom-5 right-5 z-[60] w-[calc(100%-2.5rem)] max-w-sm rounded-xl border border-accent/40 bg-black/85 p-4 shadow-neon"
          >
            <div className="flex items-start gap-3">
              {toast.type === 'success' ? (
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-accent" />
              ) : (
                <ExclamationTriangleIcon className="h-5 w-5 shrink-0 text-primary" />
              )}

              <p className="text-sm text-white/90">{toast.message}</p>

              <button
                type="button"
                onClick={() => setToast(null)}
                className="ml-auto rounded p-1 text-white/70 transition hover:text-white"
                aria-label="Dismiss notification"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            {toast.type === 'error' && toast.retryPayload && (
              <button
                type="button"
                onClick={() => submitPayload(toast.retryPayload)}
                className="mt-3 rounded-full border border-accent/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition hover:bg-accent/10"
              >
                Retry
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}