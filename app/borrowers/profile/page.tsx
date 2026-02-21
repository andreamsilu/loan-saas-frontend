import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const BORROWER_PROFILE_MOCK = {
  idDisplay: "88291",
  name: "Johnathan Doe",
  borrowerType: "Individual Borrower",
  borrowerCode: "BR-99281",
  memberSince: "Oct 2022",
  branch: "Main Branch (Downtown)",
  totalBorrowedAmount: 45200,
  totalBorrowedChangeLabel: "+12%",
  remainingBalanceAmount: 12450,
  remainingBalanceBadge: "1 overdue",
  nextPaymentDate: "Nov 15",
  nextPaymentInDaysLabel: "6 days",
  creditScore: 742,
  paymentPerformanceMonths: [
    { label: "Jan", percentageHeight: 70, tooltip: "Jan: Tsh 1.2k", emphasized: false },
    { label: "Feb", percentageHeight: 60, emphasized: false },
    { label: "Mar", percentageHeight: 55, emphasized: false },
    { label: "Apr", percentageHeight: 80, emphasized: false },
    { label: "May", percentageHeight: 70, emphasized: false },
    { label: "Jun", percentageHeight: 90, emphasized: false },
    { label: "Jul", percentageHeight: 95, emphasized: true },
    { label: "Aug", percentageHeight: 65, emphasized: false },
    { label: "Sep", percentageHeight: 40, emphasized: false },
    { label: "Oct", percentageHeight: 85, emphasized: false },
    { label: "Nov", percentageHeight: 50, emphasized: false },
    { label: "Dec", percentageHeight: 10, emphasized: false, isMuted: true },
  ],
};

export default function BorrowerProfileDetailPage() {
  return (
    <AppShell
      activePath="/borrowers/profile"
      brandTitle="Loan Portal"
      brandSubtitle="Borrower Workspace"
      userName="Johnathan Doe"
      userEmail="johnathan.doe@example.com"
      role="borrower"
    >
      <div className="relative flex min-h-screen w-full flex-col bg-background-light font-display text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 md:px-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              account_balance
            </span>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">
              Loan Portal
            </h2>
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/borrowers/profile"
              className="border-b-2 border-primary pb-1 text-sm font-semibold text-primary"
            >
              My Profile
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-lg border border-transparent bg-slate-100 px-3 py-1.5 transition-all focus-within:border-primary dark:bg-slate-800 sm:flex">
            <span className="material-symbols-outlined text-xl text-slate-400" aria-hidden="true">
              search
            </span>
            <input
              type="text"
              placeholder="Search borrowers..."
              className="w-48 border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:ring-0 dark:text-white"
            />
          </div>
          <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined" aria-hidden="true">
              notifications
            </span>
          </button>
          <div
            className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-primary/10 bg-cover bg-center"
            data-alt="Corporate professional headshot for user profile"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL1rMLSn29lYaTTxsHps77oiCBykY9fVZhgh_fYKsa8ELvZN9HMDUgyvwcBxsOzNDt1wXpDZajZCzpARtTFxyGvz_5e2-knfPvcOr5qCGRf1D-oie-5NVl3QjUVllMZdQtfUidrTYj26sYrbmulZPH9rbAHOWhthJaO0V771lS74AHojRLYTA7uhSDrxxYyEwuTPlffDAix79CXzvj4v0lA0MCorsckWpbob7c-KyJFT-pt3E0eHzXQ74_basIiqTc-yHA0ko_uus')",
            }}
          />
        </div>
      </header>

        <main className="flex flex-1 justify-center">
        <div className="w-full max-w-7xl space-y-6 px-4 py-8 md:px-10">
          <nav className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/borrowers" className="hover:text-primary">
              All Borrowers
            </Link>
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              chevron_right
            </span>
            <span className="font-medium tracking-tight text-slate-900 dark:text-slate-300">
              Borrower Profile - ID #{BORROWER_PROFILE_MOCK.idDisplay}
            </span>
          </nav>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div
                    className="size-24 overflow-hidden rounded-full border-4 border-white bg-slate-100 bg-cover bg-center shadow-md dark:border-slate-900 dark:bg-slate-800"
                    data-alt="Professional portrait of a male borrower profile picture"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeuCc_T4UcqYyuEsO2JE66NbJJyFaAR-hWVwJGlCAOJJEOf5JTOnzliseRwAYSm_R6G_W7TVP7ZqKQ01oKBol4flodo7irN1jk3ZnE2u-maCcCSbgsYT6DPMbuNUpjwJgX3HKfx7z0D_it05pgpOlKEUz_LpCPfJXcI2pDXW30xUygwMwQiv9KXGpN8fIhyue2iSH9YQCHd69cy2zhNZMHwkWbb-0D7MwSQOBB9EtTVAUMH4uxhOqqJwCJ4mokyc4XOx-UM1A9r5s')",
                    }}
                  />
                  <span className="absolute bottom-1 right-1 size-5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {BORROWER_PROFILE_MOCK.name}
                    </h1>
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      ACTIVE
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      badge
                    </span>
                    {BORROWER_PROFILE_MOCK.borrowerType} • ID: {BORROWER_PROFILE_MOCK.borrowerCode}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Member since {BORROWER_PROFILE_MOCK.memberSince} • {BORROWER_PROFILE_MOCK.branch}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    edit
                  </span>
                  Edit Profile
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    mail
                  </span>
                  Message
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    block
                  </span>
                  Blacklist
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-8 overflow-x-auto border-b border-slate-200 dark:border-slate-800">
              <button className="flex items-center gap-2 border-b-2 border-primary px-1 pb-3 text-sm font-bold tracking-tight text-primary">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  grid_view
                </span>
                Overview
              </button>
              <button className="flex items-center gap-2 border-b-2 border-transparent px-1 pb-3 text-sm font-medium tracking-tight text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  payments
                </span>
                Loans
              </button>
              <button className="flex items-center gap-2 border-b-2 border-transparent px-1 pb-3 text-sm font-medium tracking-tight text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  history
                </span>
                Payments
              </button>
              <button className="flex items-center gap-2 border-b-2 border-transparent px-1 pb-3 text-sm font-medium tracking-tight text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  description
                </span>
                Notes
              </button>
              <button className="flex items-center gap-2 border-b-2 border-transparent px-1 pb-3 text-sm font-medium tracking-tight text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  attachment
                </span>
                Documents
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Total Borrowed
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Tsh
                      {BORROWER_PROFILE_MOCK.totalBorrowedAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </h3>
                    <span className="text-xs font-medium text-green-500">
                      {BORROWER_PROFILE_MOCK.totalBorrowedChangeLabel}
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Remaining Balance
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Tsh
                      {BORROWER_PROFILE_MOCK.remainingBalanceAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </h3>
                    <span className="text-xs font-medium text-red-500">
                      {BORROWER_PROFILE_MOCK.remainingBalanceBadge}
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Next Payment
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {BORROWER_PROFILE_MOCK.nextPaymentDate}
                    </h3>
                    <span className="text-xs font-medium text-slate-400">
                      {BORROWER_PROFILE_MOCK.nextPaymentInDaysLabel}
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Credit Score
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {BORROWER_PROFILE_MOCK.creditScore}
                    </h3>
                    <span className="text-xs font-medium text-primary">Good</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Payment Performance</h4>
                  <select className="rounded-lg border border-slate-200 bg-transparent text-xs font-semibold focus:border-primary focus:ring-primary dark:border-slate-700">
                    <option>Last 12 Months</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="flex h-64 w-full items-end gap-2 px-2">
                  {BORROWER_PROFILE_MOCK.paymentPerformanceMonths.map((month) => {
                    const barBaseClass = month.isMuted
                      ? "flex-1 rounded-t-sm bg-slate-200 dark:bg-slate-700"
                      : "flex-1 rounded-t-sm bg-primary/20 transition-colors hover:bg-primary";

                    const barHeightStyle = { height: `${month.percentageHeight}%` };

                    if (month.emphasized) {
                      return (
                        <div
                          key={month.label}
                          className="flex-1 rounded-t-sm bg-primary"
                          style={barHeightStyle}
                        />
                      );
                    }

                    if (month.tooltip) {
                      return (
                        <div
                          key={month.label}
                          className={`group relative ${barBaseClass}`}
                          style={barHeightStyle}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {month.tooltip}
                          </div>
                        </div>
                      );
                    }

                    return <div key={month.label} className={barBaseClass} style={barHeightStyle} />;
                  })}
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-bold uppercase text-slate-400">
                  {BORROWER_PROFILE_MOCK.paymentPerformanceMonths.map((month) => (
                    <span key={month.label}>{month.label}</span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white">Borrower Details</h4>
                  <button className="text-sm font-medium text-primary hover:underline">Show Sensitive Data</button>
                </div>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 p-6 md:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-slate-500">Email Address</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">j.doe@example.com</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-slate-500">Phone Number</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">+1 (555) 012-3456</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-slate-500">Social Security Number</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">XXX-XX-9921</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-slate-500">Current Address</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      123 Business Way, Austin, TX 78701
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="text-xs font-medium text-slate-500">Employer</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">TechSolutions Inc.</p>
                  </div>
                  <div className="space-y-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="text-xs font-medium text-slate-500">Monthly Income (Gross)</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">Tsh 8,500.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Verification Status</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500" aria-hidden="true">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Identity Verified</p>
                      <p className="text-xs text-slate-500">Validated via Persona (ID-992)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500" aria-hidden="true">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Employment Verified</p>
                      <p className="text-xs text-slate-500">Confirmed via Plaid (Oct 2023)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-300" aria-hidden="true">
                      radio_button_unchecked
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-400">Home Appraisal</p>
                      <p className="text-xs text-slate-500">Required for Home Equity Loan</p>
                    </div>
                  </div>
                </div>
                <button
                  className="mt-6 w-full rounded-lg bg-primary/10 py-2 px-4 text-xs font-bold text-primary opacity-60 cursor-not-allowed"
                  disabled
                  title="Re-running verifications is not implemented in this demo"
                >
                  RE-RUN ALL VERIFICATIONS
                </button>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Recent Activity</h4>
                <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 flex size-[24px] items-center justify-center rounded-full border-2 border-primary bg-white dark:border-primary dark:bg-slate-900">
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm font-semibold">Payment Received</p>
                    <p className="mb-1 text-xs text-slate-500">Tsh 1,200.00 processed for Loan #44921</p>
                    <span className="text-[10px] font-medium text-slate-400">Today at 10:45 AM</span>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 flex size-[24px] items-center justify-center rounded-full border-2 border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="size-2 rounded-full bg-slate-300" />
                    </div>
                    <p className="text-sm font-semibold">Address Updated</p>
                    <p className="mb-1 text-xs text-slate-500">Borrower updated mailing address via Portal</p>
                    <span className="text-[10px] font-medium text-slate-400">Nov 02, 2023</span>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 flex size-[24px] items-center justify-center rounded-full border-2 border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="size-2 rounded-full bg-slate-300" />
                    </div>
                    <p className="text-sm font-semibold">New Loan Application</p>
                    <p className="mb-1 text-xs text-slate-500">Applied for Personal Loan (Tsh 10,000)</p>
                    <span className="text-[10px] font-medium text-slate-400">Oct 28, 2023</span>
                  </div>
                </div>
                <button className="mt-6 flex w-full items-center justify-center gap-1 text-xs font-semibold text-slate-500 transition-colors hover:text-primary">
                  View Full Audit Log
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 dark:bg-primary/10">
                <h4 className="mb-3 font-bold text-slate-900 dark:text-white">Quick Note</h4>
                <div className="mb-4 rounded-lg border border-primary/10 bg-white p-3 text-sm italic text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  &quot;Borrower is looking to consolidate high-interest credit card debt. Very responsive during the
                  initial screening.&quot;
                  <p className="mt-2 text-[10px] font-bold not-italic text-primary">
                    — Sarah Mitchell, Senior Officer
                  </p>
                </div>
                <button
                  className="w-full rounded-lg bg-primary py-2 text-xs font-bold text-white shadow-lg shadow-primary/20 opacity-60 cursor-not-allowed"
                  disabled
                  title="Adding notes is not implemented in this demo"
                >
                  ADD NEW NOTE
                </button>
              </div>
            </div>
          </div>
        </div>
        </main>

        <footer className="bg-white py-6 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 dark:bg-slate-900">
          © 2023 LoanSaaS Pro Platform. All Rights Reserved. Confidential B2B Environment.
        </footer>
      </div>
    </AppShell>
  );
}
