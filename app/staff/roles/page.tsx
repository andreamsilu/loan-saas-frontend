"use client";

import { AppShell } from "@/components/AppShell";

export default function StaffRolesAndPermissionsPage() {
  return (
    <AppShell
      activePath="/staff/roles"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Apex Capital"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Roles &amp; Permissions
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Define reusable roles and control what different staff members can see and do in the
            platform.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Core roles
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                This is a static demo. In a real system you would create and edit roles here.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Tenant Admin
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    Full access to loans, borrowers, reports, configuration and staff management.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Loan Officer
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    Create and manage loans and borrowers; limited access to configuration.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Viewer
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    Read‑only access to portfolios and reports without editing rights.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Permission preview
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                These switches are illustrative only and do not change access in this demo.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-xs dark:bg-slate-800/60">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Manage loans
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Create, approve, and modify loans for assigned portfolios.
                    </p>
                  </div>
                  <div className="relative h-4 w-8 rounded-full bg-primary">
                    <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-xs dark:bg-slate-800/60">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      View reports
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Access portfolio performance and risk dashboards.
                    </p>
                  </div>
                  <div className="relative h-4 w-8 rounded-full bg-slate-300 dark:bg-slate-600">
                    <div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

