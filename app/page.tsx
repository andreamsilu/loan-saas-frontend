 "use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type DemoUserRole = "owner" | "tenant" | "borrower";

type DemoUser = {
  email: string;
  password: string;
  role: DemoUserRole;
};

const DEMO_USERS: DemoUser[] = [
  {
    email: "owner@loansaas.com",
    password: "Owner123",
    role: "owner",
  },
  {
    email: "tenant.admin@loansaas.com",
    password: "Tenant123",
    role: "tenant",
  },
  {
    email: "johnathan.doe@example.com",
    password: "Borrower123",
    role: "borrower",
  },
];

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");
    const normalizedEmail = email.trim().toLowerCase();
    const matchedUser = DEMO_USERS.find(
      (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
    );
    if (!matchedUser) {
      setError("Invalid credentials for any owner, tenant, or borrower account.");
      return;
    }
    setIsSubmitting(true);
    try {
      window.localStorage.setItem("loansaas_role", matchedUser.role);
    } catch {}

    const targetPath =
      matchedUser.role === "owner"
        ? "/owner"
        : matchedUser.role === "tenant"
          ? "/tenant"
          : "/borrowers/profile";
    router.push(targetPath);
  };

  return (
    <div className="relative min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.1fr,1fr]">
        <section className="relative hidden overflow-hidden bg-slate-950 px-10 py-12 text-slate-50 lg:flex lg:flex-col">
          <div className="absolute inset-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a,_transparent_55%),radial-gradient(circle_at_bottom,_#020617,_transparent_55%)]" />
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <div className="relative flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/40">
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                account_balance
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-200">
                LoanSaaS Pro
              </span>
              <span className="text-xs text-slate-400">Unified lending management platform</span>
            </div>
          </div>

          <div className="relative mt-20 max-w-xl space-y-8">
            <div>
              <p className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary/90 ring-1 ring-primary/40">
                Enterprise-grade loan servicing
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Control your lending operations from a single intelligent workspace.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Monitor portfolios in real-time, streamline collections, and keep every borrower
                interaction auditable across teams and tenants.
              </p>
            </div>

            <div className="grid gap-4 text-xs sm:grid-cols-3 sm:text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-400">Active tenants</p>
                <p className="mt-2 text-2xl font-semibold">120+</p>
                <p className="mt-1 text-[11px] text-emerald-400">Onboarded in the last 12 months</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-400">Disbursed volume</p>
                <p className="mt-2 text-2xl font-semibold">Tsh 4.2B</p>
                <p className="mt-1 text-[11px] text-slate-400">Tracked across personal and SME loans</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-slate-400">Recovery rate</p>
                <p className="mt-2 text-2xl font-semibold">94.2%</p>
                <p className="mt-1 text-[11px] text-slate-400">Average across automated collections</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    verified_user
                  </span>
                </span>
                <span>SOC2-ready architecture and audit logs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    thunderstorm
                  </span>
                </span>
                <span>API-first for underwriting, payouts, and webhooks</span>
              </div>
            </div>
          </div>

          <div className="relative mt-auto flex items-center justify-between pt-10 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                lock
              </span>
              <span>Bank-grade encryption for data in transit and at rest</span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span>Real-time sync with your core banking system</span>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-y-10 right-0 -z-10 hidden w-px bg-gradient-to-b from-slate-200 via-slate-100 to-transparent lg:block dark:from-slate-800 dark:via-slate-900" />

          <div className="w-full max-w-md">
            <div className="mb-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  account_balance
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                Sign in to your workspace
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Use your organization email to access tenant dashboards and collections tooling.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none">
              <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  <span>SSO coming soon</span>
                </div>
                <span>Staff, owners, and developers sign in here</span>
              </div>

              <div className="mb-4 space-y-1.5 text-xs text-slate-500">
                <p className="font-semibold text-slate-700 dark:text-slate-300">Demo credentials</p>
                <p>Owner: owner@loansaas.com / Owner123</p>
                <p>Tenant: tenant.admin@loansaas.com / Tenant123</p>
                <p>Borrower: johnathan.doe@example.com / Borrower123</p>
              </div>

              <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-100"
                  >
                    Work email or phone
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        mail
                      </span>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      className="block w-full rounded-lg border-0 bg-transparent py-3 pl-10 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:text-white dark:ring-slate-700"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-100"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs font-medium text-primary hover:text-primary/80"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        lock
                      </span>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Enter your password"
                      className="block w-full rounded-lg border-0 bg-transparent py-3 pl-10 pr-10 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:text-white dark:ring-slate-700"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      aria-label="Toggle password visibility"
                    >
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-3">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700"
                    />
                    <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                      Remember this device
                    </span>
                  </label>
                  <p className="text-xs text-slate-400">
                    Session timeout in{" "}
                    <span className="font-semibold text-slate-600 dark:text-slate-200">
                      30 minutes
                    </span>
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-lg shadow-primary/30 transition-transform transition-colors hover:-translate-y-px hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Signing in..." : "Continue to dashboard"}
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50/70 px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      domain
                    </span>
                    Switch tenant subdomain
                  </button>
                  {error && (
                    <p className="text-xs font-medium text-red-600 dark:text-red-400">{error}</p>
                  )}
                </div>
              </form>

              <div className="mt-6 border-t border-dashed border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800">
                <p>
                  Need a new tenant or sandbox environment? Contact{" "}
                  <a href="#" className="font-medium text-primary hover:underline">
                    Platform Support
                  </a>
                  .
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-[11px] text-slate-400">
              By continuing, you agree to the LoanSaaS Pro{" "}
              <a href="#" className="font-medium text-slate-500 underline-offset-2 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="font-medium text-slate-500 underline-offset-2 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
