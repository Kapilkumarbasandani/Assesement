"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PageBackground } from "@/components/ui/PageBackground";
import { Logo } from "@/components/ui/Logo";

interface Response {
  id: number;
  question_id: number;
  answer: string;
  answered_at: string;
}

interface Participant {
  id: number;
  full_name: string;
  email: string;
  organization: string;
  department: string | null;
  job_title: string | null;
  phone: string | null;
  started_at: string;
  completed_at: string | null;
  status: string;
  responses: Response[];
}

interface Question {
  id: number;
  text: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Participant | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "in_progress">("all");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/participants");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setParticipants(data.participants);
      setQuestions(data.questions);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/participants", { method: "DELETE" });
    router.push("/admin/login");
  }

  const filtered = participants.filter((p) =>
    filter === "all" ? true : p.status === filter
  );

  const questionMap = Object.fromEntries(questions.map((q) => [q.id, q.text]));
  const completedCount = participants.filter((p) => p.status === "completed").length;
  const inProgressCount = participants.filter((p) => p.status === "in_progress").length;

  if (loading) {
    return (
      <>
        <PageBackground />
        <main className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 animate-pulse" />
            <p className="text-muted text-sm">Loading dashboard...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <PageBackground />
      <main className="relative z-10 min-h-screen">
        <header className="glass border-b border-white/40 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Logo href="/admin/dashboard" />
            <div className="flex items-center gap-2">
              <Link href="/" className="btn-ghost text-sm">
                Home
              </Link>
              <button onClick={handleLogout} className="btn-outline">
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="animate-fade-up mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-1">
              Admin <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-muted text-sm">
              Assessment participants &amp; organization details
            </p>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-1 grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <StatCard
              label="Total Participants"
              value={participants.length}
              gradient="from-indigo-500 to-violet-500"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              }
            />
            <StatCard
              label="Completed"
              value={completedCount}
              gradient="from-emerald-400 to-teal-500"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
            />
            <StatCard
              label="In Progress"
              value={inProgressCount}
              gradient="from-amber-400 to-orange-400"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
            />
          </div>

          <div className="animate-fade-up animate-fade-up-delay-2 flex gap-2 mb-6">
            {(["all", "completed", "in_progress"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/25"
                    : "glass text-muted hover:text-foreground"
                }`}
              >
                {f === "all" ? "All" : f === "completed" ? "Completed" : "In Progress"}
              </button>
            ))}
          </div>

          <div className="animate-fade-up animate-fade-up-delay-3 glass-strong rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="data-table w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-6 py-4">Name</th>
                    <th className="text-left px-6 py-4">Organization</th>
                    <th className="text-left px-6 py-4">Department</th>
                    <th className="text-left px-6 py-4">Email</th>
                    <th className="text-left px-6 py-4">Status</th>
                    <th className="text-left px-6 py-4">Started</th>
                    <th className="text-left px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center gap-3 text-muted">
                          <svg className="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                          <span>No participants yet.</span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((p) => (
                      <tr key={p.id} className="border-b border-slate-50 last:border-0">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-xs font-bold text-indigo-600 shrink-0">
                              {p.full_name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium">{p.full_name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{p.organization}</td>
                        <td className="px-6 py-4 text-muted">{p.department || "—"}</td>
                        <td className="px-6 py-4 text-muted">{p.email}</td>
                        <td className="px-6 py-4">
                          <StatusBadge status={p.status} />
                        </td>
                        <td className="px-6 py-4 text-muted text-xs">
                          {formatDate(p.started_at)}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelected(p)}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            View →
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {selected && (
          <div
            className="modal-overlay fixed inset-0 flex items-center justify-center p-4 z-50"
            onClick={() => setSelected(null)}
          >
            <div
              className="glass-strong rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold flex items-center justify-center text-sm">
                    {selected.full_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="font-bold">{selected.full_name}</h2>
                    <p className="text-xs text-muted">{selected.organization}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:bg-slate-100 hover:text-foreground transition-colors text-lg"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Department", value: selected.department },
                    { label: "Job Title", value: selected.job_title },
                    { label: "Email", value: selected.email },
                    { label: "Phone", value: selected.phone },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-xl bg-white/50 border border-slate-100">
                      <p className="text-xs text-muted mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium truncate">{item.value || "—"}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 py-2">
                  <StatusBadge status={selected.status} />
                  <span className="text-xs text-muted">
                    Started {formatDate(selected.started_at)}
                    {selected.completed_at && ` · Completed ${formatDate(selected.completed_at)}`}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">
                    Responses ({selected.responses.length})
                  </h3>
                  {selected.responses.length === 0 ? (
                    <p className="text-sm text-muted">No responses yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {selected.responses.map((r) => (
                        <div
                          key={r.id}
                          className="p-4 rounded-xl bg-white/60 border border-slate-100"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                              {r.question_id}
                            </span>
                            <p className="text-sm font-medium text-slate-700 leading-snug">
                              {questionMap[r.question_id] || `Question ${r.question_id}`}
                            </p>
                          </div>
                          <p className="text-sm text-slate-600 pl-7">{r.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function StatCard({
  label,
  value,
  gradient,
  icon,
}: {
  label: string;
  value: number;
  gradient: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="glass-strong rounded-2xl p-6 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0`}>
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {icon}
        </svg>
      </div>
      <div>
        <p className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isDone = status === "completed";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
        isDone
          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
          : "bg-amber-50 text-amber-700 border border-amber-100"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isDone ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
      {isDone ? "Completed" : "In Progress"}
    </span>
  );
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr + "Z").toLocaleString();
  } catch {
    return dateStr;
  }
}
