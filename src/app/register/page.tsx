"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageBackground } from "@/components/ui/PageBackground";
import { Header } from "@/components/ui/Header";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    organization: "",
    department: "",
    job_title: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed.");
        return;
      }
      router.push(`/assessment/${data.participantId}`);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageBackground />
      <main className="relative z-10 min-h-screen flex flex-col">
        <Header backHref="/" backLabel="Home" />

        <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
          <div className="animate-fade-up mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-indigo-500/30">
                  1
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent rounded-full" />
                <div className="w-8 h-8 rounded-full bg-white/60 border border-slate-200 text-slate-400 text-xs font-bold flex items-center justify-center">
                  2
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider ml-1">
                Step 1 of 2
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Organization <span className="gradient-text">Details</span>
            </h1>
            <p className="text-muted leading-relaxed">
              Tell us about yourself and your organization before we begin.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="animate-fade-up animate-fade-up-delay-1 glass-strong rounded-2xl p-8 md:p-10 space-y-6"
          >
            {error && <div className="alert-error">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full Name" required icon="user">
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="input-field"
                />
              </Field>
              <Field label="Email Address" required icon="mail">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="input-field"
                />
              </Field>
              <Field label="Organization" required icon="building" className="md:col-span-2">
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  required
                  placeholder="Acme Corporation"
                  className="input-field"
                />
              </Field>
              <Field label="Department" icon="briefcase">
                <input
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  placeholder="Engineering"
                  className="input-field"
                />
              </Field>
              <Field label="Job Title" icon="badge">
                <input
                  name="job_title"
                  value={form.job_title}
                  onChange={handleChange}
                  placeholder="Software Engineer"
                  className="input-field"
                />
              </Field>
              <Field label="Phone Number" icon="phone" className="md:col-span-2">
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="input-field"
                />
              </Field>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full py-4 mt-2">
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  Continue to Assessment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

const icons: Record<string, React.ReactNode> = {
  user: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  mail: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  building: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  briefcase: <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  badge: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
  phone: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
};

function Field({
  label,
  required,
  children,
  className = "",
  icon,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: string;
}) {
  return (
    <div className={className}>
      <label className="flex items-center gap-1.5 text-sm font-medium mb-2 text-slate-700">
        {icon && icons[icon] && (
          <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {icons[icon]}
          </svg>
        )}
        {label}
        {required && <span className="text-violet-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
