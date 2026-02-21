"use client";

import { useMemo } from "react";
import { notFound } from "next/navigation";
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

type BranchPageProps = {
  params: {
    branchId: string;
  };
};

export default function BranchDetailPage({ params }: BranchPageProps) {
  const branch = useMemo(
    () => TENANT_BRANCHES_MOCK.find((item) => item.id === params.branchId),
    [params.branchId],
  );

  if (!branch) {
    notFound();
  }

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
          <div className="flex flex-1 flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Branch
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {branch.name}
              </h1>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {branch.id}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {branch.city} · {branch.region}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={() => {
                alert("In a real system this would archive or deactivate the branch.");
              }}
            >
              Close branch (demo)
            </button>
          </div>
        </header>

        <div className="flex-1 space-y-6 p-8">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Staff at branch
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {branch.staffCount.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active loans
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {branch.activeLoans.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Branch status
              </p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Branch details
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Edit high-level branch information used across loans, borrowers, and reporting.
              </p>

              <form
                className="mt-4 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Branch details saved (demo only).");
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Branch name
                    </label>
                    <input
                      type="text"
                      defaultValue={branch.name}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue={branch.city}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Region
                    </label>
                    <input
                      type="text"
                      defaultValue={branch.region}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Branch code
                    </label>
                    <input
                      type="text"
                      value={branch.id}
                      readOnly
                      className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Internal notes about this branch, coverage, or risk profile."
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="mt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                    onClick={() => {
                      alert("Changes discarded (demo only).");
                    }}
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Operational settings
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                High-level limits and preferences that apply only to this branch.
              </p>

              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-700 dark:text-slate-200">
                    Allow loan origination at this branch
                  </span>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-700 dark:text-slate-200">
                    Allow collections at this branch
                  </span>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-700 dark:text-slate-200">
                    Mark branch as test/sandbox only
                  </span>
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
              </div>

              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] text-amber-800 dark:border-amber-500/40 dark:bg-amber-900/30 dark:text-amber-100">
                Changes here are for demonstration only and do not affect real data. In a full
                implementation, these controls would update how staff, loans, and borrowers are
                routed through this branch.
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

