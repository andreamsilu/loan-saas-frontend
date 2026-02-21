"use client";

import { AppShell } from "@/components/AppShell";

export default function StaffSecuritySettingsPage() {
  return (
    <AppShell
      activePath="/staff/security"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Apex Capital"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Security
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Configure authentication, session policies, and safety defaults for your staff members.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Sign‑in &amp; access
              </h2>
              <div className="mt-4 space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Require two‑factor authentication
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Demo only – toggle is not persisted.
                    </p>
                  </div>
                  <div className="relative h-4 w-8 rounded-full bg-primary">
                    <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Restrict sign‑in by IP
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Limit staff access to your corporate network ranges.
                    </p>
                  </div>
                  <div className="relative h-4 w-8 rounded-full bg-slate-300 dark:bg-slate-600">
                    <div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Session settings
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Session timeout
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    30 minutes of inactivity
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Device limit
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    Up to 3 active sessions per user
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

