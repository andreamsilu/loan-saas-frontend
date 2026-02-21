"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";

export default function OwnerNewTenantPage() {
  const router = useRouter();

  return (
    <AppShell
      activePath="/owner/tenants"
      brandTitle="Loan SaaS Admin"
      brandSubtitle="Platform Owner"
      userName="Alex Henderson"
      userEmail="alex@loansaas.com"
      role="owner"
    >
      <main className="flex flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Create new tenant
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Provision a new tenant environment with its own workspaces, users, and limits.
          </p>
        </div>

        <div className="p-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tenant name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Finance Ltd"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tenant ID
                  </label>
                  <input
                    type="text"
                    placeholder="TNT-005"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Region
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                    <option>US-East</option>
                    <option>US-West</option>
                    <option>EU-West</option>
                    <option>APAC</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Plan
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Growth</option>
                    <option>Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Primary contact email
                  </label>
                  <input
                    type="email"
                    placeholder="owner@acmefinance.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Max users
                  </label>
                  <input
                    type="number"
                    placeholder="50"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Internal notes about this tenant, sales context, or rollout plan."
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <input
                    id="send-invite"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="send-invite">Send welcome email to primary contact</label>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                    onClick={() => router.push("/owner/tenants")}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                    onClick={() => router.push("/owner/tenants")}
                  >
                    Create tenant (demo)
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
