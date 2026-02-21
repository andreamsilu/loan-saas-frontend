import { AppShell } from "@/components/AppShell";

const OWNER_BILLING_SUBSCRIPTIONS_MOCK = [
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

export default function OwnerBillingPage() {
  return (
    <AppShell
      activePath="/owner/billing"
      brandTitle="Loan SaaS Admin"
      brandSubtitle="Platform Owner"
      userName="Alex Henderson"
      userEmail="alex@loansaas.com"
      role="owner"
    >
      <main className="flex flex-1 flex-col overflow-y-auto scroll-smooth">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Subscriptions &amp; Billing
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Monitor tenant plans, MRR, and invoice status across the platform.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Export billing report
            </button>
          </div>
        </header>

        <div className="space-y-8 p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total MRR
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                Tsh
                {OWNER_BILLING_SUBSCRIPTIONS_MOCK.reduce(
                  (sum, subscription) => sum + subscription.mrrAmount,
                  0,
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active tenants
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {
                  OWNER_BILLING_SUBSCRIPTIONS_MOCK.filter(
                    (subscription) => subscription.statusTone === "success",
                  ).length
                }
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                At risk (billing)
              </p>
              <p className="mt-2 text-3xl font-bold text-amber-600">
                {
                  OWNER_BILLING_SUBSCRIPTIONS_MOCK.filter(
                    (subscription) => subscription.statusTone !== "success",
                  ).length
                }
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Tenant subscriptions
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Detailed view of each tenant&apos;s plan, status, and next invoice.
                </p>
              </div>
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
                  {OWNER_BILLING_SUBSCRIPTIONS_MOCK.map((subscription) => {
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
        </div>
      </main>
    </AppShell>
  );
}
