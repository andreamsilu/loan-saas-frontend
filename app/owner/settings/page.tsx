import { AppShell } from "@/components/AppShell";

export default function OwnerPlatformSettingsPage() {
  return (
    <AppShell
      activePath="/owner/settings"
      brandTitle="Loan SaaS Admin"
      brandSubtitle="Platform Owner"
      userName="Alex Henderson"
      userEmail="alex@loansaas.com"
      role="owner"
    >
      <main className="flex flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Platform Settings
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Configure global limits, branding, and compliance settings for all tenants.
            </p>
          </div>
        </div>

        <div className="space-y-6 p-8">
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Default data retention
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">7 years</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Applied to all tenants unless overridden.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Max tenants per region
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">250</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Controls provisioning capacity per cloud region.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Default SLA tier
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">Gold</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                New tenants inherit this SLA configuration.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr,1fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Global branding
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Manage the default logo and colors used across tenant workspaces.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/40">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Platform logo
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Recommended size: 160×40, transparent background.
                    </p>
                  </div>
                  <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                    Upload
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    Primary color
                    <span className="inline-flex size-4 rounded-full bg-primary" />
                  </button>
                  <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    Accent color
                    <span className="inline-flex size-4 rounded-full bg-emerald-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Compliance defaults
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Control baseline compliance requirements for all tenants.
              </p>
              <div className="mt-4 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <label className="flex items-center justify-between gap-3">
                  <span>Require 2FA for all tenant admins</span>
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span>Enforce IP allowlists for API access</span>
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span>Enable audit log export for all tenants</span>
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" />
                </label>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

