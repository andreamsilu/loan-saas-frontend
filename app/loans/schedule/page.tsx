import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const LOAN_SCHEDULE_MOCK = {
  loanNumber: "L-9842",
  borrowerName: "Acme Corp",
  issuedOn: "Jan 12, 2024",
  tenancyLabel: "Professional Tier",
  totalBalanceAmount: 45200,
  totalBalanceChangeLabel: "12% reduction this quarter",
  nextDueAmount: 1250,
  nextDueLabel: "Due in 8 days (Mar 15)",
  lastPaymentDate: "Feb 15, 2024",
  lastPaymentNote: "Paid on time via ACH",
  interestRatePercent: 6.5,
  scheduleRows: [
    {
      id: 1,
      dueDate: "Jan 15, 2024",
      principal: 1000,
      interest: 244.83,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "PAID",
      statusTone: "success",
      highlighted: false,
    },
    {
      id: 2,
      dueDate: "Feb 15, 2024",
      principal: 1005.42,
      interest: 239.41,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "PAID",
      statusTone: "success",
      highlighted: false,
    },
    {
      id: 3,
      dueDate: "Mar 15, 2024",
      principal: 1010.87,
      interest: 233.96,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "UPCOMING",
      statusTone: "warning",
      highlighted: true,
    },
    {
      id: 4,
      dueDate: "Apr 15, 2024",
      principal: 1016.35,
      interest: 228.48,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "PENDING",
      statusTone: "default",
      highlighted: false,
    },
    {
      id: 5,
      dueDate: "May 15, 2024",
      principal: 1021.85,
      interest: 222.98,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "PENDING",
      statusTone: "default",
      highlighted: false,
    },
    {
      id: 6,
      dueDate: "Jun 15, 2024",
      principal: 1027.39,
      interest: 217.44,
      fees: 5.17,
      totalAmount: 1250,
      statusLabel: "PENDING",
      statusTone: "default",
      highlighted: false,
    },
  ],
};

export default function LoanScheduleAndDetailsPage() {
  return (
    <AppShell
      activePath="/loans/schedule"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Staff Admin"
      userEmail="staff.admin@loansaas.com"
      role="tenant"
    >
      <div className="group/design-root relative flex min-h-screen flex-1 flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-900 lg:px-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                account_balance
              </span>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                LoanSaaS
              </h2>
            </div>
            <div className="hidden items-center gap-1 md:flex">
              <label className="flex h-10 min-w-64 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center bg-slate-50 px-3 text-slate-500 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      search
                    </span>
                  </div>
                  <input
                    className="w-full border-none bg-slate-50 px-2 text-sm text-slate-900 placeholder:text-slate-500 focus:ring-0 dark:bg-slate-800 dark:text-white"
                    placeholder="Search loans, tenants..."
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/tenant"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                href="/loans"
                className="border-b-2 border-primary pb-1 text-sm font-semibold text-primary"
              >
                Loans
              </Link>
              <Link
                href="/tenant"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                Tenants
              </Link>
              <Link
                href="/loans"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                Reports
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <button className="rounded-lg bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined" aria-hidden="true">
                  notifications
                </span>
              </button>
              <div className="mx-1 h-8 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="group flex cursor-pointer items-center gap-3">
                <div
                  className="rounded-full border border-primary/20 bg-primary/10 p-0.5 bg-cover bg-center"
                  data-alt="Portrait of a smiling professional male user"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt2WjyIuPnUB9w1iTLz5lK-aVqfGmnBTEeAaT3KpDCBBQXCKwGnoOK74E_BrXFlnHNT0yAG4QdK_P-XRG1_xr6LT8akSh1yNmzLO6lVZU6bdrVe9HNTxZ7aTQeG6_Y3-FCgyxJgxzm7ZhcwXTCZi4rIUmEOAjUN_x1DwiL_jhObq9xlN5J8FclkKqeQkQLFB4wZElPOGpnfrtWs6kvJTRSuQ7NX-OyZi9V2qGu6-alqebKtr2u9gmxvA2ijU5c4l4qZ7xRYTSJKYc')",
                  }}
                >
                  <div className="size-8 rounded-full" />
                </div>
                <span className="hidden text-sm font-bold text-slate-700 transition-colors group-hover:text-primary dark:text-slate-200 sm:inline">
                  Staff Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full flex-1 max-w-7xl px-4 py-6 lg:px-10">
          <div className="w-full">
            <nav className="mb-6 flex items-center gap-2 text-sm">
              <Link href="/loans" className="text-slate-500 transition-colors hover:text-primary">
                Loans
              </Link>
              <span className="material-symbols-outlined text-sm text-slate-400" aria-hidden="true">
                chevron_right
              </span>
              <span className="font-medium text-slate-900 dark:text-slate-200">
                Loan #{LOAN_SCHEDULE_MOCK.loanNumber}
              </span>
            </nav>

            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                      Loan #{LOAN_SCHEDULE_MOCK.loanNumber}
                    </h1>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <span className="mr-1.5 size-1.5 rounded-full bg-green-600" />
                      ACTIVE
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        corporate_fare
                      </span>
                      <span>
                        Borrower:{" "}
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {LOAN_SCHEDULE_MOCK.borrowerName}
                        </span>
                      </span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        calendar_today
                      </span>
                      <span>Issued: {LOAN_SCHEDULE_MOCK.issuedOn}</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        account_balance_wallet
                      </span>
                      <span>Tenancy: {LOAN_SCHEDULE_MOCK.tenancyLabel}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:flex-none">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      event_repeat
                    </span>
                    Reschedule
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 sm:flex-none">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      payments
                    </span>
                    Record Payment
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Total Balance
                </p>
                <div className="flex items-baseline gap-1">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">
                    Tsh
                    {LOAN_SCHEDULE_MOCK.totalBalanceAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-600">
                  <span className="material-symbols-outlined text-xs" aria-hidden="true">
                    arrow_downward
                  </span>
                  <span>{LOAN_SCHEDULE_MOCK.totalBalanceChangeLabel}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Next Due Amount
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  Tsh
                  {LOAN_SCHEDULE_MOCK.nextDueAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined text-xs" aria-hidden="true">
                    schedule
                  </span>
                  <span>{LOAN_SCHEDULE_MOCK.nextDueLabel}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Last Payment
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  {LOAN_SCHEDULE_MOCK.lastPaymentDate}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <span className="material-symbols-outlined text-xs" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{LOAN_SCHEDULE_MOCK.lastPaymentNote}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Interest Rate
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  {LOAN_SCHEDULE_MOCK.interestRatePercent}%
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <span className="material-symbols-outlined text-xs" aria-hidden="true">
                    trending_up
                  </span>
                  <span>Fixed rate (36 months)</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="border-b border-slate-200 px-6 dark:border-slate-800">
                <div className="flex gap-8 overflow-x-auto">
                  <button className="flex items-center gap-2 py-4 text-sm font-bold text-primary border-b-2 border-primary">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      calendar_month
                    </span>
                    Schedule
                  </button>
                  <button className="flex items-center gap-2 py-4 text-sm font-bold text-slate-500 transition-colors border-b-2 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      receipt_long
                    </span>
                    Transactions
                  </button>
                  <button className="flex items-center gap-2 py-4 text-sm font-bold text-slate-500 transition-colors border-b-2 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      folder_open
                    </span>
                    Documents
                    <span className="ml-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] dark:bg-slate-800">4</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto p-0">
                <table className="min-w-[800px] w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        #
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Due Date
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Principal
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Interest
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Fees
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Total Amount
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {LOAN_SCHEDULE_MOCK.scheduleRows.map((row) => {
                      const baseRowClass = "transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30";
                      const highlightedRowClass = row.highlighted
                        ? "bg-primary/5 hover:bg-primary/10"
                        : "";

                      const statusBgClass =
                        row.statusTone === "success"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : row.statusTone === "warning"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";

                      return (
                        <tr key={row.id} className={`${baseRowClass} ${highlightedRowClass}`}>
                          <td className="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            {row.id}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {row.dueDate}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                            Tsh
                            {row.principal.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                            Tsh
                            {row.interest.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                            Tsh
                            {row.fees.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-bold text-slate-900 dark:text-slate-100">
                            Tsh
                            {row.totalAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span
                              className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-bold ${statusBgClass}`}
                            >
                              {row.statusLabel}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 transition-colors hover:text-primary">
                              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                                more_vert
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 sm:flex-row">
                <p>
                  Showing <span className="text-slate-900 dark:text-white">6</span> of{" "}
                  <span className="text-slate-900 dark:text-white">36</span> installments
                </p>
                <div className="flex items-center gap-2">
                  <button
                    className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                    disabled
                  >
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xs font-bold text-white">
                      1
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                      2
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                      3
                    </button>
                    <span className="mx-1 text-slate-400">...</span>
                    <button className="flex h-8 w-8 items-center justify-center rounded text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                      6
                    </button>
                  </div>
                  <button className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Loan Remarks &amp; Notes
              </h3>
              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-primary dark:bg-slate-800">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        edit_note
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <textarea
                      rows={2}
                      placeholder="Add a private note about this loan..."
                      className="w-full rounded-lg border border-slate-200 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                    />
                    <div className="mt-3 flex justify-end">
                      <button className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                        Post Note
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppShell>
  );
}
