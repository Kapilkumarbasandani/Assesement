import Link from "next/link";
import { PageBackground } from "@/components/ui/PageBackground";

export default function CompletePage() {
  return (
    <>
      <PageBackground />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center animate-scale-in">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 animate-ping" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-500/30">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            All <span className="gradient-text">Done!</span>
          </h1>
          <p className="text-muted mb-10 leading-relaxed">
            Thank you for completing the assessment. Your thoughtful responses
            have been recorded and will help shape a better workplace.
          </p>

          <div className="glass-strong rounded-2xl p-6 mb-8 text-left space-y-3">
            {[
              "Responses securely saved",
              "Organization details recorded",
              "Assessment marked complete",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </main>
    </>
  );
}
