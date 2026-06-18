"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import {
  QUESTIONS,
  TOTAL_QUESTIONS,
  SCORE_LABELS,
  getCategoryProgress,
} from "@/lib/questions";
import { PageBackground } from "@/components/ui/PageBackground";

export default function AssessmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const question = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;
  const catProgress = getCategoryProgress(currentIndex);

  async function saveAndAdvance() {
    if (!answer.trim()) {
      setError("Please select a self score (0–5) before continuing.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/participants/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: question.id,
          answer: answer.trim(),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save answer.");
        return;
      }

      if (data.completed) {
        router.push(`/assessment/${id}/complete`);
        return;
      }

      setCurrentIndex((i) => i + 1);
      setAnswer("");
      setShowTooltip(false);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setAnswer("");
      setError("");
      setShowTooltip(false);
    }
  }

  if (!question) return null;

  return (
    <>
      <PageBackground />
      <main className="relative z-10 min-h-screen flex flex-col">
        <header className="glass border-b border-white/40">
          <div className="max-w-2xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#123C66] uppercase tracking-wider">
                {question.categoryName}
              </span>
              <span className="text-sm font-medium text-muted">
                <span className="text-foreground font-bold">{currentIndex + 1}</span>
                <span className="mx-1 text-slate-300">/</span>
                {TOTAL_QUESTIONS}
              </span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-muted mt-2 flex justify-between">
              <span>
                Category Q{catProgress.questionInCategory} of {catProgress.totalInCategory}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </p>
          </div>
        </header>

        <div className="flex-1 flex items-start justify-center px-6 py-8">
          <div className="w-full max-w-2xl">
            <div key={currentIndex} className="glass-strong rounded-2xl p-8 md:p-10 animate-fade-up">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#123C66] text-white flex items-center justify-center font-bold text-sm">
                    {question.id}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#00A3A3] uppercase tracking-wider">
                      Question {question.id}
                    </p>
                    <p className="text-xs text-muted">Weightage: {question.weightage}</p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onFocus={() => setShowTooltip(true)}
                    onBlur={() => setShowTooltip(false)}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white text-[#123C66] font-bold text-sm hover:border-[#00A3A3] transition-colors"
                    aria-label="Question help"
                  >
                    i
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-10 z-20 w-64 p-3 rounded-xl bg-white border border-slate-200 shadow-lg text-sm text-slate-600 leading-relaxed">
                      {question.tooltip}
                    </div>
                  )}
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold leading-relaxed mb-6 text-slate-800">
                {question.text}
              </h2>

              <div className="mb-6 p-3 rounded-xl bg-[#F8F9FA] border border-slate-100 text-sm">
                <span className="font-medium text-[#123C66]">Evidence required: </span>
                <span className="text-slate-600">{question.evidenceRequired}</span>
                <span className="text-muted text-xs block mt-1">(Upload optional — coming soon)</span>
              </div>

              {error && <div className="alert-error mb-6">{error}</div>}

              <div className="mb-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Self Score <span className="text-[#F28C28]">*</span>
                </label>
                <select
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select score (0–5)</option>
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={String(n)}>
                      {n} — {SCORE_LABELS[n]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentIndex === 0 || loading}
                  className="btn-ghost"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={saveAndAdvance}
                  disabled={loading}
                  className="btn-primary"
                >
                  {loading
                    ? "Saving..."
                    : currentIndex === TOTAL_QUESTIONS - 1
                      ? "Submit Assessment"
                      : "Next Question →"}
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-muted mt-5">
              ACEA — Asteya Credibility &amp; Effectiveness Assessment
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
