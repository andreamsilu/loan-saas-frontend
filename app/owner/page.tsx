import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const OWNER_DASHBOARD_MOCK = {
  totalTenants: 1284,
  totalTenantsChangePercent: 12,
  activeTenants: 1142,
  activeTenantsChangePercent: 5,
  mrrAmountLabel: "Tsh 452.5k",
  mrrChangePercent: 8.2,
  apiUsagePercent: 89,
  apiUsageChangePercent: -2,
  newTenantsThisYear: 240,
};

const OWNER_SUBSCRIPTIONS_MOCK = [
  {
    id: "TNT-001",
    tenantName: "BlueRock Fin",
    planName: "Enterprise",
    billingCycle: "Monthly",
    mrrAmount: 42000,
    statusLabel: "Active",
    statusTone: "success",
    nextInvoiceDate: "Nov 28, 2023",
    paymentMethod: "ACH",
  },
  {
    id: "TNT-002",
    tenantName: "SwiftLending",
    planName: "Growth",
    billingCycle: "Monthly",
    mrrAmount: 28500,
    statusLabel: "Past Due",
    statusTone: "danger",
    nextInvoiceDate: "Nov 12, 2023",
    paymentMethod: "Card",
  },
  {
    id: "TNT-003",
    tenantName: "Peak Credit",
    planName: "Professional",
    billingCycle: "Annual",
    mrrAmount: 19500,
    statusLabel: "Active",
    statusTone: "success",
    nextInvoiceDate: "Dec 05, 2023",
    paymentMethod: "Wire",
  },
  {
    id: "TNT-004",
    tenantName: "Unity Mortgage",
    planName: "Starter",
    billingCycle: "Monthly",
    mrrAmount: 9800,
    statusLabel: "Trial Ending",
    statusTone: "warning",
    nextInvoiceDate: "Nov 30, 2023",
    paymentMethod: "Card",
  },
];

export default function OwnerDashboardPage() {
  return (
    <AppShell
      activePath="/owner"
      brandTitle="Loan SaaS Admin"
      brandSubtitle="Platform Owner"
      userName="Alex Henderson"
      userEmail="alex@loansaas.com"
      role="owner"
    >
      <main className="flex flex-1 flex-col overflow-y-auto scroll-smooth">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex max-w-xl flex-1 items-center gap-4">
            <div className="group relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">
                search
              </span>
              <input
                type="text"
                placeholder="Search tenants, transactions, or system logs..."
                className="w-full rounded-lg border-none bg-slate-100 py-2 pl-10 pr-4 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-primary/20 dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100">
              <span className="material-symbols-outlined" aria-hidden="true">
                notifications
              </span>
              <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
            </button>
            <Link
              href="/owner/tenants/new"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                add
              </span>
              New Tenant
            </Link>
          </div>
        </header>

        <div className="space-y-8 p-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Overview
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              A high-level view of your platform performance and tenant growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Total Tenants
                </p>
                <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                  store
                </span>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {OWNER_DASHBOARD_MOCK.totalTenants.toLocaleString()}
                </p>
                <p className="mb-1 flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    trending_up
                  </span>
                  {OWNER_DASHBOARD_MOCK.totalTenantsChangePercent}%
                </p>
              </div>
              <p className="text-[11px] text-slate-400">vs. last 30 days</p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Active Tenants
                </p>
                <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                  bolt
                </span>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {OWNER_DASHBOARD_MOCK.activeTenants.toLocaleString()}
                </p>
                <p className="mb-1 flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    trending_up
                  </span>
                  {OWNER_DASHBOARD_MOCK.activeTenantsChangePercent}%
                </p>
              </div>
              <p className="text-[11px] text-slate-400">vs. last 30 days</p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">MRR</p>
                <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                  monetization_on
                </span>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {OWNER_DASHBOARD_MOCK.mrrAmountLabel}
                </p>
                <p className="mb-1 flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    trending_up
                  </span>
                  {OWNER_DASHBOARD_MOCK.mrrChangePercent}%
                </p>
              </div>
              <p className="text-[11px] text-slate-400">vs. last 30 days</p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">API Usage</p>
                <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                  api
                </span>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {OWNER_DASHBOARD_MOCK.apiUsagePercent}%
                </p>
                <p className="mb-1 flex items-center rounded bg-rose-50 px-1.5 py-0.5 text-xs font-medium text-rose-600 dark:bg-rose-500/10">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    trending_down
                  </span>
                  {Math.abs(OWNER_DASHBOARD_MOCK.apiUsageChangePercent)}%
                </p>
              </div>
              <p className="text-[11px] text-slate-400">system capacity utilization</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Tenant Growth over Time
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  New tenant acquisition performance over the last 12 months.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                  <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    6M
                  </button>
                  <button className="rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100">
                    12M
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    All Time
                  </button>
                </div>
                <button className="rounded-lg border border-slate-200 p-2 text-slate-500 transition-colors hover:text-slate-900 dark:border-slate-700 dark:hover:text-slate-100">
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    download
                  </span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    +{OWNER_DASHBOARD_MOCK.newTenantsThisYear}
                  </p>
                  <span className="text-sm font-medium text-emerald-600">
                    New tenants this year
                  </span>
                </div>
                <div className="relative mt-4 h-[320px] w-full">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 1000 300"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      x2="1000"
                      y1="50"
                      y2="50"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-slate-100 dark:text-slate-800"
                    />
                    <line
                      x1="0"
                      x2="1000"
                      y1="125"
                      y2="125"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-slate-100 dark:text-slate-800"
                    />
                    <line
                      x1="0"
                      x2="1000"
                      y1="200"
                      y2="200"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-slate-100 dark:text-slate-800"
                    />
                    <line
                      x1="0"
                      x2="1000"
                      y1="275"
                      y2="275"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-slate-100 dark:text-slate-800"
                    />
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#137fec" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,220 C100,240 200,80 300,100 C400,120 500,220 600,180 C700,140 800,40 900,60 C1000,80 1000,300 0,300 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,220 C100,240 200,80 300,100 C400,120 500,220 600,180 C700,140 800,40 900,60 C1000,80"
                      fill="none"
                      stroke="#137fec"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="300" cy="100" r="4" fill="#137fec" />
                    <circle cx="600" cy="180" r="4" fill="#137fec" />
                    <circle cx="900" cy="60" r="4" fill="#137fec" />
                  </svg>
                  <div className="mt-4 flex justify-between px-2">
                    <span className="text-xs font-medium text-slate-400">Jan</span>
                    <span className="text-xs font-medium text-slate-400">Feb</span>
                    <span className="text-xs font-medium text-slate-400">Mar</span>
                    <span className="text-xs font-medium text-slate-400">Apr</span>
                    <span className="text-xs font-medium text-slate-400">May</span>
                    <span className="text-xs font-medium text-slate-400">Jun</span>
                    <span className="text-xs font-medium text-slate-400">Jul</span>
                    <span className="text-xs font-medium text-slate-400">Aug</span>
                    <span className="text-xs font-medium text-slate-400">Sep</span>
                    <span className="text-xs font-medium text-slate-400">Oct</span>
                    <span className="text-xs font-medium text-slate-400">Nov</span>
                    <span className="text-xs font-medium text-slate-400">Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="billing"
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Subscriptions and Billing
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Billing status, MRR, and upcoming invoices for all active tenants.
                </p>
              </div>
              <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Export billing report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                    <th className="px-6 py-3">Tenant</th>
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3">Billing</th>
                    <th className="px-6 py-3 text-right">MRR</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Next Invoice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {OWNER_SUBSCRIPTIONS_MOCK.map((subscription) => {
                    const statusToneClass =
                      subscription.statusTone === "success"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : subscription.statusTone === "danger"
                          ? "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                          : "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";

                    return (
                      <tr key={subscription.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50">
                        <td className="px-6 py-3 align-middle">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                              {subscription.tenantName}
                            </span>
                            <span className="text-xs text-slate-500">{subscription.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 align-middle text-slate-700 dark:text-slate-200">
                          <div className="flex flex-col">
                            <span className="font-medium">{subscription.planName}</span>
                            <span className="text-xs text-slate-500">
                              {subscription.billingCycle} • {subscription.paymentMethod}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3 align-middle text-slate-700 dark:text-slate-200">
                          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            {subscription.billingCycle}
                          </span>
                        </td>
                        <td className="px-6 py-3 align-middle text-right font-semibold text-slate-900 dark:text-slate-100">
                          Tsh
                          {subscription.mrrAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </td>
                        <td className="px-6 py-3 align-middle">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusToneClass}`}
                          >
                            {subscription.statusLabel}
                          </span>
                        </td>
                        <td className="px-6 py-3 align-middle text-right text-sm text-slate-700 dark:text-slate-200">
                          {subscription.nextInvoiceDate}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                <h3 className="text-base font-bold">System Alerts</h3>
                <a href="#" className="text-xs font-semibold text-primary hover:underline">
                  View all
                </a>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="flex items-start gap-4 p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      warning
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Database Latency Spike</p>
                    <p className="text-xs text-slate-500">
                      API nodes in us-east-1 are experiencing high latency.
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      credit_card_off
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Failed Payout</p>
                    <p className="text-xs text-slate-500">
                      Tenant &quot;Global Finance Ltd&quot; payout failed due to bank verification.
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">45 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      person_add
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">New Enterprise Signup</p>
                    <p className="text-xs text-slate-500">
                      Capital One has successfully onboarded as a Tier 1 tenant.
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                <h3 className="text-base font-bold">Top Performing Tenants</h3>
                <a href="#" className="text-xs font-semibold text-primary hover:underline">
                  See full list
                </a>
              </div>
              <div className="overflow-x-auto p-0">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-3 font-semibold text-slate-500">Tenant</th>
                      <th className="px-6 py-3 font-semibold text-slate-500">Volume</th>
                      <th className="px-6 py-3 text-right font-semibold text-slate-500">
                        Revenue
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="flex items-center gap-3 px-6 py-4">
                        <div
                          className="size-6 rounded-md bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                          data-alt="Company logo for BlueRock Fin"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GOZLdCGmLUVn4cCgtAxE9WVkgpUQ4S8tTwslYpMUuuHu61KekJ4J6UI_Zj0tUp0a5z696rlZTLPSzO7oCS8SuKOjfb8UhVrxelLU94b9DWwTr-hnftMPrO5x7PiUrZCSNDUVZFys8_N4aZeS-s2LddOqVjpGK3rb7X03juDtyB-8QHtwpRUwuwSsOOtYkCvtdwYp_UZFMHX4TufhK3bky0to55NUTOS7caUmpF7ZQfuH1F5CcwbroJSIpID_99ZoUzP5cv9S3U')",
                          }}
                        />
                        <span className="font-medium">BlueRock Fin</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">2,480 loans</td>
                      <td className="px-6 py-4 text-right font-semibold">Tsh 42,100</td>
                    </tr>
                    <tr>
                      <td className="flex items-center gap-3 px-6 py-4">
                        <div
                          className="size-6 rounded-md bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                          data-alt="Company logo for SwiftLending"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzXE58v_HE-bngPkEGgPITXDxX5csvaRJGkqxx0Pr6SvCVf2IvStYe9jXRzJ_0V85IXGcO5lE2Uv80Qi3m53Cses-RDkhTZqkgZ-booHhF0y8iUXP0U4PmRrOfSzLnAzTNvhirgouywDMwGCGhN1B1KsATel_DIB9HD62Sppm4NPMBvps8hruOsPDt70tOkc3mGIAKOtcJbAKMFBXWKrKhQTQu8qJ99lqT5z0k59xtTJeY6mm2zdD1JikIJ0doD4D2Ja1LhLdwg6w')",
                          }}
                        />
                        <span className="font-medium">SwiftLending</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">1,922 loans</td>
                      <td className="px-6 py-4 text-right font-semibold">Tsh 38,450</td>
                    </tr>
                    <tr>
                      <td className="flex items-center gap-3 px-6 py-4">
                        <div
                          className="size-6 rounded-md bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                          data-alt="Company logo for Peak Credit"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeACBQv4Zf8wZ8OBfBdf5UOMBj8o8zceVHnLFmj0n3CgLHzzhrMmydK_N1arGtZAEkSoRQY7_o3ZckUpmZUGrMsosGOFF7nX4Kp6SGdqIc76DgkQ0CD6O0K-IS1AGFKDnKG8MVnIi1A2j1raBMv740THfIV4s4nAYjYV-wnYACGbKnang8Y4Ox9gpVd62Yrey2xg-vzfntJbfiYQYFB5SqjC7LlgzM4eAZ40rMEiMvCwyXfCkrwVTKAW0t4euKwQKAgh0IxL3T6u8')",
                          }}
                        />
                        <span className="font-medium">Peak Credit</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">1,540 loans</td>
                      <td className="px-6 py-4 text-right font-semibold">Tsh 29,120</td>
                    </tr>
                    <tr>
                      <td className="flex items-center gap-3 px-6 py-4">
                        <div
                          className="size-6 rounded-md bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                          data-alt="Company logo for Unity Mortgage"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvK3XhW0Ssc7DvnHULYtLps153dWjxnMHf3SovoApaKDmesL8uIaEbGV3sosU9flFd4O1Ohn-s8D98mM9rFZv_aGwbIhu17aXMspqBNW_R5iZqgfrLzArl-n6wvm5W3TRK6PT52DM1nm1j0VmoBB1cnQkODZ-LR3ctNgsC9uXnToKQIlQ9xFAD7IMymCszDe2TQ95EOd2FtsAVKWyUsjh_0Q3BvfG-LNn5mtnooTt0W8C2ma3Ceo22qp521Hl7tcR6eqW5eBIZ2vU')",
                          }}
                        />
                        <span className="font-medium">Unity Mortgage</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">1,210 loans</td>
                      <td className="px-6 py-4 text-right font-semibold">Tsh 24,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
