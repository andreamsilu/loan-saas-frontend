"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export default function StaffBillingAndPlanPage() {
  const [autoRenewEnabled, setAutoRenewEnabled] = useState(true);
  const [showRenewForm, setShowRenewForm] = useState(false);

  return (
    <AppShell
      activePath="/staff/billing"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Apex Capital"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Subscription &amp; Billing
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            See how your tenant is subscribed to the platform owner, including plan, usage, and seat limits.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Current Plan
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                    Growth
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Tuned for emerging lenders with growing teams and portfolios.
                  </p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-2xl font-black text-slate-900 dark:text-slate-100">Tsh 450,000</p>
                  <p className="text-xs text-slate-500">per month, billed annually</p>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {autoRenewEnabled
                      ? "24 days remaining · renews on Dec 31, 2025"
                      : "24 days remaining · ends on Dec 31, 2025"}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 text-xs md:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">Staff seats</p>
                  <p className="mt-1 text-slate-500">
                    13 / 20 used
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    Active borrowers
                  </p>
                  <p className="mt-1 text-slate-500">Up to 10,000</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    Environments
                  </p>
                  <p className="mt-1 text-slate-500">Sandbox + Production</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-4 text-xs md:flex-row md:items-center dark:border-slate-800">
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    Subscription term
                  </p>
                  <p className="mt-1 text-slate-500">
                    Jan 01, 2025 – Dec 31, 2025 ·{" "}
                    {autoRenewEnabled ? "auto‑renew enabled" : "auto‑renew disabled"}
                  </p>
                </div>
                <div className="flex flex-col items-stretch gap-2 md:items-end">
                  <button
                    type="button"
                    className={`inline-flex items-center justify-between rounded-full border px-3 py-1 text-[11px] font-semibold ${
                      autoRenewEnabled
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-200"
                        : "border-slate-300 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                    }`}
                    onClick={() => {
                      const next = !autoRenewEnabled;
                      setAutoRenewEnabled(next);
                      alert(
                        next
                          ? "Auto-renew has been enabled for this subscription (demo only)."
                          : "Auto-renew has been disabled; the subscription will end at the current term (demo only).",
                      );
                    }}
                  >
                    <span>Auto‑renew</span>
                    <span
                      className={`ml-2 flex h-4 w-7 items-center rounded-full ${
                        autoRenewEnabled
                          ? "bg-emerald-500"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    >
                      <span
                        className={`h-3 w-3 rounded-full bg-white transition-transform ${
                          autoRenewEnabled ? "translate-x-3" : "translate-x-0.5"
                        }`}
                      />
                    </span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                      onClick={() => {
                        alert("In a real system you could extend the current subscription term here.");
                      }}
                    >
                      Extend term
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                      onClick={() => setShowRenewForm(true)}
                    >
                      Renew now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Seat usage
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                This is a static demonstration of how staff usage could be summarized.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Admins</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">3 / 5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Loan officers</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">6 / 10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Support</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">4 / 5</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {showRenewForm && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Renew subscription
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Confirm how you want to renew this tenant&apos;s subscription with the platform
                owner.
              </p>

              <form
                className="mt-4 space-y-4 text-xs"
                onSubmit={(event) => {
                  event.preventDefault();
                  setShowRenewForm(false);
                  alert("Renewal submitted (demo only). This would charge the tenant in a real system.");
                }}
              >
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-200">
                    Plan
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                    <option>Growth (current)</option>
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Enterprise</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    Billing cycle
                  </p>
                  <div className="flex gap-2">
                    <label className="flex flex-1 cursor-pointer items-center justify-between rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
                      <span className="flex flex-col">
                        <span className="font-semibold">Monthly</span>
                        <span className="text-[11px] text-slate-500">Higher flexibility</span>
                      </span>
                      <input type="radio" name="billing-cycle" defaultChecked className="h-3 w-3" />
                    </label>
                    <label className="flex flex-1 cursor-pointer items-center justify-between rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
                      <span className="flex flex-col">
                        <span className="font-semibold">Annual</span>
                        <span className="text-[11px] text-slate-500">Best value</span>
                      </span>
                      <input type="radio" name="billing-cycle" className="h-3 w-3" />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-200">
                      Next renewal date
                    </label>
                    <input
                      type="text"
                      value="Dec 31, 2025"
                      readOnly
                      className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-200">
                      Payment method
                    </label>
                    <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                      <option>Visa ending 4242</option>
                      <option>Mastercard ending 9981</option>
                      <option>Bank transfer</option>
                    </select>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    This is a demo; no real charges will be made.
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                      onClick={() => setShowRenewForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                    >
                      Confirm renewal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </AppShell>
  );
}
