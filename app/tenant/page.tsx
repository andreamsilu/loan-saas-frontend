import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const TENANT_OVERVIEW_MOCK = {
  activeBorrowersCount: 1284,
  activeBorrowersChangeLabel: "+2.4%",
  activeBorrowersLastUpdated: "5m ago",
  activeLoansPortfolioAmount: 4215800,
  activeLoansChangeLabel: "-1.1%",
  activeLoansComparison: "vs last month",
  portfolioAtRiskPercent: 3.2,
  portfolioAtRiskChangeLabel: "+0.5%",
  portfolioAtRiskIndustryAverage: 4.1,
  todaysCollectionsAmount: 12450,
  todaysCollectionsChangeLabel: "+12%",
  todaysCollectionsTargetAmount: 15000,
  portfolioDistributionPercent: 65,
  portfolioDistributionAmount: 2400000,
  riskConcentrationPercent: 12,
  riskConcentrationAmount: 500000,
  repaymentAverageRecoveryRate: 94.2,
  recentActivity: {
    loanApproved: {
      title: "Loan #L-9401 Approved",
      timeAgo: "2m ago",
      company: "EcoBuild Solutions",
      amount: 45000,
    },
    paymentReceived: {
      title: "Payment Received",
      timeAgo: "14m ago",
      borrower: "Johnathan Doe",
      loanId: "P-1022",
      amount: 1240,
    },
    newBorrower: {
      title: "New Borrower Registered",
      timeAgo: "1h ago",
      name: "Sarah Jenkins",
      badge: "Tier 2 Verified",
    },
    paymentOverdue: {
      title: "Payment Overdue",
      timeAgo: "2h ago",
      loanId: "P-1182",
      borrower: "Markus Webb",
      daysPastDue: 3,
    },
    reportGenerated: {
      title: "Report Generated",
      timeAgo: "3h ago",
      reportName: "Monthly Financial Audit report for May 2024",
      fileName: "audit_may_24.pdf",
    },
  },
};

export default function TenantOverviewDashboardPage() {
  return (
    <AppShell
      activePath="/tenant"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Alex Chen"
      userEmail="alex.chen@loansaas.pro"
      role="tenant"
    >
      <div className="flex min-w-0 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-1 items-center gap-4">
            <h2 className="text-xl font-bold">Tenant Overview</h2>
            <div className="ml-4 hidden w-full max-w-md md:block">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search borrowers, loans, or transactions..."
                  className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 dark:bg-slate-800"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined" aria-hidden="true">
                notifications
              </span>
              <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
            </button>
            <Link
              href="/loans/new"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                add
              </span>
              New Loan Application
            </Link>
          </div>
        </header>

        <main className="flex-1 space-y-8 bg-background-light p-8 dark:bg-background-dark">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/30">
                  group
                </span>
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
                  +2.4%
                  <span className="material-symbols-outlined text-[10px]" aria-hidden="true">
                    trending_up
                  </span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Active Borrowers
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                {TENANT_OVERVIEW_MOCK.activeBorrowersCount.toLocaleString()}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Updated {TENANT_OVERVIEW_MOCK.activeBorrowersLastUpdated}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-primary/10 p-2 text-primary">
                  account_balance_wallet
                </span>
                <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-bold text-red-600">
                  -1.1%
                  <span className="material-symbols-outlined text-[10px]" aria-hidden="true">
                    trending_down
                  </span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Active Loans Portfolio
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Tsh
                {TENANT_OVERVIEW_MOCK.activeLoansPortfolioAmount.toLocaleString()}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {TENANT_OVERVIEW_MOCK.activeLoansComparison}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-orange-50 p-2 text-orange-600 dark:bg-orange-900/30">
                  warning
                </span>
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
                  +0.5%
                  <span className="material-symbols-outlined text-[10px]" aria-hidden="true">
                    arrow_upward
                  </span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Portfolio at Risk (PAR)
              </p>
              <h3 className="mt-1 text-2xl font-bold text-orange-600">
                {TENANT_OVERVIEW_MOCK.portfolioAtRiskPercent}%
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Industry Average: {TENANT_OVERVIEW_MOCK.portfolioAtRiskIndustryAverage}%
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-green-50 p-2 text-green-600 dark:bg-green-900/30">
                  payments
                </span>
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
                  +12%
                  <span className="material-symbols-outlined text-[10px]" aria-hidden="true">
                    trending_up
                  </span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Today&apos;s Collections
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Tsh
                {TENANT_OVERVIEW_MOCK.todaysCollectionsAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Target: Tsh
                {TENANT_OVERVIEW_MOCK.todaysCollectionsTargetAmount.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Repayment Trends</h3>
                    <p className="text-sm text-slate-500">
                      Monthly loan repayment performance for current fiscal year
                    </p>
                  </div>
                  <select className="rounded-lg border-none bg-slate-50 py-1.5 pl-3 pr-8 text-sm font-medium focus:ring-1 focus:ring-primary dark:bg-slate-800">
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                    <option>Current Year</option>
                  </select>
                </div>
                <div className="relative flex h-64 items-end justify-between gap-4 px-4">
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex h-full flex-col justify-between">
                    <div className="h-px w-full border-t border-slate-100 dark:border-slate-800" />
                    <div className="h-px w-full border-t border-slate-100 dark:border-slate-800" />
                    <div className="h-px w-full border-t border-slate-100 dark:border-slate-800" />
                    <div className="h-px w-full border-t border-slate-100 dark:border-slate-800" />
                  </div>

                  {[
                    { label: "JAN", height: "40%", strong: false },
                    { label: "FEB", height: "55%", strong: false },
                    { label: "MAR", height: "35%", strong: false },
                    { label: "APR", height: "75%", strong: false },
                    { label: "MAY", height: "65%", strong: false },
                    { label: "JUN", height: "90%", strong: true },
                  ].map((bar) => (
                    <div
                      key={bar.label}
                      className="z-10 flex flex-1 flex-col items-center gap-2"
                    >
                      <div
                        className={`w-full rounded-t-lg transition-colors ${
                          bar.strong ? "bg-primary hover:bg-primary/90" : "bg-primary/20 hover:bg-primary"
                        }`}
                        style={{ height: bar.height }}
                      />
                      <span
                        className={`text-xs font-bold ${
                          bar.strong ? "text-slate-900 dark:text-white" : "text-slate-400"
                        }`}
                      >
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-full bg-primary" />
                      <span className="text-sm font-medium">Scheduled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-full bg-primary/20" />
                      <span className="text-sm font-medium">Actual</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">
                    Average recovery rate:{" "}
                    <span className="font-bold text-primary">
                      {TENANT_OVERVIEW_MOCK.repaymentAverageRecoveryRate}%
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h4 className="mb-4 font-bold">Portfolio Distribution</h4>
                  <div className="flex items-center gap-4">
                    <div className="relative flex size-20 items-center justify-center rounded-full border-[6px] border-primary">
                      <span className="text-xs font-bold">
                        {TENANT_OVERVIEW_MOCK.portfolioDistributionPercent}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500">Personal Loans</p>
                      <p className="text-lg font-bold">
                        Tsh
                        {Math.round(
                          TENANT_OVERVIEW_MOCK.portfolioDistributionAmount / 100000,
                        ) / 10}
                        M
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h4 className="mb-4 font-bold">Risk Concentration</h4>
                  <div className="flex items-center gap-4">
                    <div className="relative flex size-20 items-center justify-center rounded-full border-[6px] border-orange-500">
                      <span className="text-xs font-bold">
                        {TENANT_OVERVIEW_MOCK.riskConcentrationPercent}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500">SME Loans</p>
                      <p className="text-lg font-bold">
                        Tsh
                        {Math.round(
                          TENANT_OVERVIEW_MOCK.riskConcentrationAmount / 1000,
                        )}
                        k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                  <h3 className="font-bold">Recent Activity</h3>
                  <button className="text-xs font-bold text-primary hover:underline">
                    View All
                  </button>
                </div>
                <div className="flex-1 max-h-[600px] overflow-y-auto p-2">
                  <div className="group cursor-pointer rounded-lg p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/30">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">
                          check_circle
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold">
                            {TENANT_OVERVIEW_MOCK.recentActivity.loanApproved.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase text-slate-400">
                            {TENANT_OVERVIEW_MOCK.recentActivity.loanApproved.timeAgo}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          SME Loan for{" "}
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {TENANT_OVERVIEW_MOCK.recentActivity.loanApproved.company}
                          </span>{" "}
                          was approved by System.
                        </p>
                        <p className="mt-2 text-xs font-bold text-primary">
                          Tsh
                          {TENANT_OVERVIEW_MOCK.recentActivity.loanApproved.amount.toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer border-t border-slate-50 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">
                          payments
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentReceived.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase text-slate-400">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentReceived.timeAgo}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          Repayment from{" "}
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentReceived.borrower}
                          </span>{" "}
                          for Loan #
                          {TENANT_OVERVIEW_MOCK.recentActivity.paymentReceived.loanId}.
                        </p>
                        <p className="mt-2 text-xs font-bold text-primary">
                          Tsh
                          {TENANT_OVERVIEW_MOCK.recentActivity.paymentReceived.amount.toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer border-t border-slate-50 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-900/30">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">
                          person_add
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold">
                            {TENANT_OVERVIEW_MOCK.recentActivity.newBorrower.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase text-slate-400">
                            {TENANT_OVERVIEW_MOCK.recentActivity.newBorrower.timeAgo}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {TENANT_OVERVIEW_MOCK.recentActivity.newBorrower.name}
                          </span>{" "}
                          completed onboarding process.
                        </p>
                        <div className="mt-2 flex gap-1">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800">
                            {TENANT_OVERVIEW_MOCK.recentActivity.newBorrower.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer border-t border-slate-50 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-900/30">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">
                          priority_high
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold text-red-600">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentOverdue.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase text-slate-400">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentOverdue.timeAgo}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          Loan #
                          {TENANT_OVERVIEW_MOCK.recentActivity.paymentOverdue.loanId} for{" "}
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {TENANT_OVERVIEW_MOCK.recentActivity.paymentOverdue.borrower}
                          </span>{" "}
                          is now{" "}
                          {TENANT_OVERVIEW_MOCK.recentActivity.paymentOverdue.daysPastDue} days
                          past due.
                        </p>
                        <button className="mt-2 rounded border border-primary/20 px-2 py-1 text-[10px] font-bold text-primary hover:bg-primary/5">
                          Send Reminder
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer border-t border-slate-50 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">
                          description
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold">
                            {TENANT_OVERVIEW_MOCK.recentActivity.reportGenerated.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase text-slate-400">
                            {TENANT_OVERVIEW_MOCK.recentActivity.reportGenerated.timeAgo}
                          </span>
                        </div>
                          <p className="mt-1 text-xs text-slate-500">
                            {TENANT_OVERVIEW_MOCK.recentActivity.reportGenerated.reportName} is
                            ready for download.
                          </p>
                        <p className="mt-2 flex items-center gap-1 text-xs font-medium text-slate-400">
                          <span className="material-symbols-outlined text-sm" aria-hidden="true">
                            attachment
                          </span>
                          {TENANT_OVERVIEW_MOCK.recentActivity.reportGenerated.fileName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 text-center dark:bg-slate-800/50">
                  <button className="mx-auto flex items-center justify-center gap-2 text-xs font-bold text-slate-500 transition-colors hover:text-primary">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      refresh
                    </span>
                    Syncing Live Feed...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppShell>
  );
}
