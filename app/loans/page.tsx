import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const LOAN_PORTFOLIO_MOCK = {
  totalOutstandingAmount: 4250890,
  totalOutstandingChangeLabel: "+2.4%",
  activeDisbursementsCount: 1284,
  activeDisbursementsChangeLabel: "+0.8%",
  totalInArrearsPercent: 12.5,
  totalInArrearsChangeLabel: "+1.2%",
  loans: [
    {
      id: "LN-2023-9021",
      borrowerInitials: "JS",
      borrowerName: "Jordan Smith",
      borrowerBadgeColor: "primary",
      productName: "SME Growth Term",
      productMeta: "24 Months Fixed",
      principal: 50000,
      outstanding: 42150,
      outstandingEmphasisColor: "default",
      statusLabel: "Disbursed",
      statusTone: "success",
      disbursedDate: "Oct 12, 2023",
    },
    {
      id: "LN-2023-8845",
      borrowerInitials: "AM",
      borrowerName: "Aurora Markets LLC",
      borrowerBadgeColor: "red",
      productName: "Inventory Financing",
      productMeta: "Short Term Bridge",
      principal: 12500,
      outstanding: 8750,
      outstandingEmphasisColor: "danger",
      statusLabel: "In Arrears",
      statusTone: "danger",
      disbursedDate: "Sep 05, 2023",
    },
    {
      id: "LN-2023-1102",
      borrowerInitials: "BW",
      borrowerName: "Boutique Wellness",
      borrowerBadgeColor: "amber",
      productName: "Micro-finance Plus",
      productMeta: "Unsecured",
      principal: 3000,
      outstanding: 0,
      outstandingEmphasisColor: "default",
      statusLabel: "Pending",
      statusTone: "warning",
      disbursedDate: "Processing...",
    },
    {
      id: "LN-2023-7412",
      borrowerInitials: "RC",
      borrowerName: "Riverstone Construction",
      borrowerBadgeColor: "slate",
      productName: "Equipment Lease",
      productMeta: "Asset Backed",
      principal: 120000,
      outstanding: 98000,
      outstandingEmphasisColor: "default",
      statusLabel: "Disbursed",
      statusTone: "success",
      disbursedDate: "Aug 20, 2023",
    },
    {
      id: "LN-2023-2219",
      borrowerInitials: "HK",
      borrowerName: "H.K. Logistics",
      borrowerBadgeColor: "blue",
      productName: "Business Expansion",
      productMeta: "5 Year Amortization",
      principal: 250000,
      outstanding: 234400,
      outstandingEmphasisColor: "default",
      statusLabel: "Disbursed",
      statusTone: "success",
      disbursedDate: "Oct 01, 2023",
    },
  ],
};

export default function LoanPortfolioManagementPage() {
  return (
    <AppShell
      activePath="/loans"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="James Wilson"
      userEmail="james@lendsaas.com"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex max-w-lg flex-1 items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl leading-none text-slate-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search by Borrower ID, Name, or Product..."
                className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 transition-colors hover:text-primary">
              <span className="material-symbols-outlined" aria-hidden="true">
                notifications
              </span>
              <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
            </button>
            <Link
              href="/loans/new"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-lg leading-none" aria-hidden="true">
                add
              </span>
              Create New Loan
            </Link>
          </div>
        </header>

        <div className="space-y-8 p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Active Loan Portfolio</h2>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Real-time overview of all disbursed and monitored lending products.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium opacity-60 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800"
                disabled
                title="Export is not implemented in this demo"
              >
                <span className="material-symbols-outlined text-lg leading-none" aria-hidden="true">
                  download
                </span>
                Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Total Outstanding</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  account_balance
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  Tsh
                  {LOAN_PORTFOLIO_MOCK.totalOutstandingAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600">
                  {LOAN_PORTFOLIO_MOCK.totalOutstandingChangeLabel}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Active Disbursements</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  trending_up
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {LOAN_PORTFOLIO_MOCK.activeDisbursementsCount.toLocaleString()}
                </span>
                <span className="inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600">
                  {LOAN_PORTFOLIO_MOCK.activeDisbursementsChangeLabel}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Total in Arrears</span>
                <span className="material-symbols-outlined text-red-500" aria-hidden="true">
                  warning
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {LOAN_PORTFOLIO_MOCK.totalInArrearsPercent}%
                </span>
                <span className="inline-flex items-center rounded bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-600">
                  {LOAN_PORTFOLIO_MOCK.totalInArrearsChangeLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-slate-400" aria-hidden="true">
                filter_list
              </span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Filters:</span>
            </div>
            <div className="flex flex-1 flex-wrap gap-3">
              <div className="relative min-w-[180px]">
                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
                  <option>All Statuses</option>
                  <option>Disbursed</option>
                  <option>Pending Approval</option>
                  <option>In Arrears</option>
                  <option>Fully Repaid</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-400" aria-hidden="true">
                  expand_more
                </span>
              </div>
              <div className="relative min-w-[220px]">
                <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-lg text-slate-400" aria-hidden="true">
                    calendar_today
                  </span>
                  <span className="font-medium text-slate-600 dark:text-slate-400">
                    Oct 1, 2023 - Oct 31, 2023
                  </span>
                </div>
              </div>
              <div className="relative min-w-[180px]">
                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
                  <option>All Loan Products</option>
                  <option>SME Term Loan</option>
                  <option>Micro-credit</option>
                  <option>Business Line</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-400" aria-hidden="true">
                  expand_more
                </span>
              </div>
            </div>
            <button className="px-2 text-sm font-medium text-primary hover:underline">Clear All</button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Borrower
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Loan Product
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Principal
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Outstanding
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Disbursed Date
                    </th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {LOAN_PORTFOLIO_MOCK.loans.map((loan) => {
                    const borrowerBadgeBgClass =
                      loan.borrowerBadgeColor === "primary"
                        ? "bg-primary/10 text-primary"
                        : loan.borrowerBadgeColor === "red"
                          ? "bg-red-100 text-red-600"
                          : loan.borrowerBadgeColor === "amber"
                            ? "bg-amber-100 text-amber-600"
                            : loan.borrowerBadgeColor === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-slate-100 text-slate-600";

                    const outstandingTextClass =
                      loan.outstandingEmphasisColor === "danger"
                        ? "text-red-600"
                        : "text-slate-900 dark:text-slate-100";

                    const statusToneBgClass =
                      loan.statusTone === "success"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : loan.statusTone === "danger"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";

                    return (
                      <tr
                        key={loan.id}
                        className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex size-9 items-center justify-center rounded-full text-sm font-bold ${borrowerBadgeBgClass}`}
                            >
                              {loan.borrowerInitials}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {loan.borrowerName}
                              </p>
                              <p className="text-xs text-slate-500">ID: {loan.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium">{loan.productName}</p>
                          <p className="text-xs text-slate-500">{loan.productMeta}</p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          Tsh
                          {loan.principal.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className={`px-6 py-4 text-sm font-bold ${outstandingTextClass}`}>
                          Tsh
                          {loan.outstanding.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${statusToneBgClass}`}
                          >
                            <span className="size-1.5 rounded-full bg-current" />
                            {loan.statusLabel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{loan.disbursedDate}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href="/loans/schedule"
                            className="inline-flex rounded p-1 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                          >
                            <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                              more_vert
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-900 dark:text-slate-100">1 to 5</span> of{" "}
                <span className="font-bold text-slate-900 dark:text-slate-100">1,284</span> loans
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="rounded border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:text-primary disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
                  disabled
                >
                  <span className="material-symbols-outlined leading-none" aria-hidden="true">
                    chevron_left
                  </span>
                </button>
                <button className="flex size-8 items-center justify-center rounded bg-primary text-sm font-bold text-white">
                  1
                </button>
                <button className="flex size-8 items-center justify-center rounded text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                  2
                </button>
                <button className="flex size-8 items-center justify-center rounded text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                  3
                </button>
                <span className="px-1">...</span>
                <button className="flex size-8 items-center justify-center rounded text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                  257
                </button>
                <button className="flex items-center justify-center rounded border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:text-primary dark:border-slate-700 dark:bg-slate-900">
                  <span className="material-symbols-outlined leading-none" aria-hidden="true">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
