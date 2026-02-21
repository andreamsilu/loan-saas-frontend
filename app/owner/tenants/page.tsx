import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const OWNER_TENANTS_MOCK = [
  {
    id: "TNT-001",
    name: "BlueRock Fin",
    region: "US-East",
    planName: "Enterprise",
    statusLabel: "Active",
    statusTone: "success",
    mrrAmount: 42000,
    loanVolume: 2480,
    createdAt: "Jan 12, 2022",
  },
  {
    id: "TNT-002",
    name: "SwiftLending",
    region: "EU-West",
    planName: "Growth",
    statusLabel: "Active",
    statusTone: "success",
    mrrAmount: 28500,
    loanVolume: 1922,
    createdAt: "Mar 03, 2023",
  },
  {
    id: "TNT-003",
    name: "Peak Credit",
    region: "US-West",
    planName: "Professional",
    statusLabel: "Past Due",
    statusTone: "danger",
    mrrAmount: 19500,
    loanVolume: 1540,
    createdAt: "Sep 18, 2021",
  },
  {
    id: "TNT-004",
    name: "Unity Mortgage",
    region: "APAC",
    planName: "Starter",
    statusLabel: "Trial",
    statusTone: "warning",
    mrrAmount: 9800,
    loanVolume: 1210,
    createdAt: "Nov 01, 2023",
  },
];

export default function OwnerTenantsDirectoryPage() {
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
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-1 items-center gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Tenants
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Directory of all tenant environments on the platform.
              </p>
            </div>
            <div className="ml-auto hidden max-w-xs flex-1 md:block">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search tenants by name or ID..."
                  className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 dark:bg-slate-800"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              Invite tenant
            </button>
            <Link
              href="/owner/tenants/new"
              className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
            >
              New tenant
            </Link>
          </div>
        </header>

        <div className="space-y-6 p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total tenants
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {OWNER_TENANTS_MOCK.length.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-600">
                {
                  OWNER_TENANTS_MOCK.filter(
                    (tenant) => tenant.statusTone === "success",
                  ).length
                }
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                At risk
              </p>
              <p className="mt-2 text-3xl font-bold text-amber-600">
                {
                  OWNER_TENANTS_MOCK.filter(
                    (tenant) => tenant.statusTone !== "success",
                  ).length
                }
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <span>Tenant directory</span>
              <span>{OWNER_TENANTS_MOCK.length} records</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                    <th className="px-6 py-3">Tenant</th>
                    <th className="px-6 py-3">Region</th>
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3 text-right">MRR</th>
                    <th className="px-6 py-3 text-right">Loan volume</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {OWNER_TENANTS_MOCK.map((tenant) => {
                    const statusToneClass =
                      tenant.statusTone === "success"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : tenant.statusTone === "danger"
                          ? "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                          : "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";

                    return (
                      <tr key={tenant.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50">
                        <td className="px-6 py-3 align-middle">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                              {tenant.name}
                            </span>
                            <span className="text-xs text-slate-500">{tenant.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 align-middle text-sm text-slate-700 dark:text-slate-200">
                          {tenant.region}
                        </td>
                        <td className="px-6 py-3 align-middle text-sm text-slate-700 dark:text-slate-200">
                          {tenant.planName}
                        </td>
                        <td className="px-6 py-3 align-middle text-right font-semibold text-slate-900 dark:text-slate-100">
                          Tsh
                          {tenant.mrrAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </td>
                        <td className="px-6 py-3 align-middle text-right text-sm text-slate-700 dark:text-slate-200">
                          {tenant.loanVolume.toLocaleString()} loans
                        </td>
                        <td className="px-6 py-3 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusToneClass}`}
                          >
                            {tenant.statusLabel}
                          </span>
                        </td>
                        <td className="px-6 py-3 align-middle text-right text-xs text-slate-500 dark:text-slate-400">
                          {tenant.createdAt}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
