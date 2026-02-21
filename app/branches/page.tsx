"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const TENANT_BRANCHES_MOCK = [
  {
    id: "BR-001",
    name: "Downtown HQ",
    city: "Dar es Salaam",
    region: "Coastal",
    staffCount: 24,
    activeLoans: 540,
  },
  {
    id: "BR-002",
    name: "Arusha Branch",
    city: "Arusha",
    region: "Northern",
    staffCount: 12,
    activeLoans: 210,
  },
  {
    id: "BR-003",
    name: "Mwanza Branch",
    city: "Mwanza",
    region: "Lake Zone",
    staffCount: 9,
    activeLoans: 165,
  },
];

export default function TenantBranchesPage() {
  return (
    <AppShell
      activePath="/branches"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Alex Chen"
      userEmail="alex.chen@loansaas.pro"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-1 items-center gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Branches
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Manage the branches that operate under this tenant.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
              onClick={() => {
                alert("In a real system this would open a form to create a new branch.");
              }}
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                add
              </span>
              Add Branch (demo)
            </button>
          </div>
        </header>

        <div className="flex-1 space-y-6 p-8">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total branches
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {TENANT_BRANCHES_MOCK.length}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total staff
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {TENANT_BRANCHES_MOCK.reduce((sum, branch) => sum + branch.staffCount, 0)}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active loans
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {TENANT_BRANCHES_MOCK.reduce((sum, branch) => sum + branch.activeLoans, 0)}
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <span>Branch directory</span>
              <span>{TENANT_BRANCHES_MOCK.length} branches</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                    <th className="px-6 py-3">Branch</th>
                    <th className="px-6 py-3">City</th>
                    <th className="px-6 py-3">Region</th>
                    <th className="px-6 py-3 text-right">Staff</th>
                    <th className="px-6 py-3 text-right">Active loans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {TENANT_BRANCHES_MOCK.map((branch) => (
                    <tr
                      key={branch.id}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50"
                    >
                      <td className="px-6 py-3 align-middle">
                        <div className="flex flex-col">
                          <Link
                            href={`/branches/${branch.id}`}
                            className="font-semibold text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary"
                          >
                            {branch.name}
                          </Link>
                          <span className="text-xs text-slate-500">{branch.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3 align-middle text-sm text-slate-700 dark:text-slate-200">
                        {branch.city}
                      </td>
                      <td className="px-6 py-3 align-middle text-sm text-slate-700 dark:text-slate-200">
                        {branch.region}
                      </td>
                      <td className="px-6 py-3 align-middle text-right text-sm text-slate-700 dark:text-slate-200">
                        {branch.staffCount.toLocaleString()}
                      </td>
                      <td className="px-6 py-3 align-middle text-right text-sm text-slate-700 dark:text-slate-200">
                        {branch.activeLoans.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
