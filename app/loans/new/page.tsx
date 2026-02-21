import { AppShell } from "@/components/AppShell";

export default function NewLoanApplicationPage() {
  return (
    <AppShell
      activePath="/loans"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="James Wilson"
      userEmail="james@lendsaas.com"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Create New Loan
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Capture key details to originate a new loan for a borrower. This is a demo form and
            does not persist data.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Borrower Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="e.g. Jordan Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Borrower ID
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="e.g. BR-10293"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Product
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900">
                    <option>SME Growth Term</option>
                    <option>Working Capital Facility</option>
                    <option>Inventory Financing</option>
                    <option>Micro-finance Plus</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Principal Amount
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      Tsh
                    </span>
                    <input
                      type="number"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                      placeholder="e.g. 50000"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Interest Rate (per annum)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                      placeholder="e.g. 18"
                    />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      %
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Term Length (months)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="e.g. 24"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Disbursement Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Repayment Frequency
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900">
                    <option>Monthly</option>
                    <option>Bi-weekly</option>
                    <option>Weekly</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Loan Purpose
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="e.g. Working capital for new branch"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Notes (internal)
                </label>
                <textarea
                  className="min-h-[96px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-900"
                  placeholder="Add any risk or credit committee notes here..."
                />
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This is a static demo form. Submitting will not create a real loan.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                  >
                    Create Loan (demo)
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

