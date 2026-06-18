import Link from "next/link";
import { PageBackground } from "@/components/ui/PageBackground";
import { Header } from "@/components/ui/Header";

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <main className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-3xl text-center">
            <h1 className="animate-fade-up text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Elevate Your{" "}
              <span className="gradient-text">Workplace</span>
              <br />
              Assessment
            </h1>

            <p className="animate-fade-up animate-fade-up-delay-2 text-lg text-muted mb-12 leading-relaxed max-w-xl mx-auto">
              A refined experience to capture organization insights. Share your
              details, answer thoughtfully — one question at a time.
            </p>

            <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/register" className="btn-primary text-base px-10 py-4">
                Begin Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="animate-fade-up animate-fade-up-delay-4 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              {[
                {
                  step: "01",
                  title: "Your Details",
                  desc: "Organization & contact information",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  ),
                },
                {
                  step: "02",
                  title: "Answer Questions",
                  desc: "One focused question per screen",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  step: "03",
                  title: "Submit",
                  desc: "Responses saved automatically",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((item) => (
                <div key={item.step} className="step-card group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="step-number">{item.step}</div>
                    <svg
                      className="w-5 h-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[0.95rem] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative z-10 py-6 text-center text-xs text-muted border-t border-white/30">
          Confidential · For authorized personnel only
        </footer>
      </main>
    </>
  );
}
