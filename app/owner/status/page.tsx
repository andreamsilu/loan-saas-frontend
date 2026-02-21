import { AppShell } from "@/components/AppShell";

const OWNER_SYSTEM_STATUS_MOCK = {
  regions: [
    {
      id: "us-east-1",
      name: "US East",
      statusLabel: "Operational",
      statusTone: "success",
      apiLatencyMs: 120,
      errorRatePercent: 0.2,
    },
    {
      id: "eu-west-1",
      name: "EU West",
      statusLabel: "Degraded",
      statusTone: "warning",
      apiLatencyMs: 240,
      errorRatePercent: 1.4,
    },
    {
      id: "ap-southeast-1",
      name: "APAC",
      statusLabel: "Operational",
      statusTone: "success",
      apiLatencyMs: 180,
      errorRatePercent: 0.5,
    },
  ],
  services: [
    {
      name: "Core API",
      statusLabel: "Operational",
      statusTone: "success",
      incidentsToday: 0,
    },
    {
      name: "Webhooks",
      statusLabel: "Degraded",
      statusTone: "warning",
      incidentsToday: 1,
    },
    {
      name: "Batch Jobs",
      statusLabel: "Operational",
      statusTone: "success",
      incidentsToday: 0,
    },
    {
      name: "File Storage",
      statusLabel: "Partial outage",
      statusTone: "danger",
      incidentsToday: 1,
    },
  ],
};

export default function OwnerSystemStatusPage() {
  return (
    <AppShell
      activePath="/owner/status"
      brandTitle="Loan SaaS Admin"
      brandSubtitle="Platform Owner"
      userName="Alex Henderson"
      userEmail="alex@loansaas.com"
      role="owner"
    >
      <main className="flex flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              System Status
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Health of core services and regions across the platform.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                check_circle
              </span>
              No critical incidents
            </span>
          </div>
        </header>

        <div className="space-y-6 p-8">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Regions
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {OWNER_SYSTEM_STATUS_MOCK.regions.length}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Services
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {OWNER_SYSTEM_STATUS_MOCK.services.length}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Today&apos;s incidents
              </p>
              <p className="mt-2 text-3xl font-bold text-amber-600">
                {OWNER_SYSTEM_STATUS_MOCK.services.reduce(
                  (sum, service) => sum + service.incidentsToday,
                  0,
                )}
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr,1fr]">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>Regions</span>
                <span>Latency / errors</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {OWNER_SYSTEM_STATUS_MOCK.regions.map((region) => {
                  const statusToneClass =
                    region.statusTone === "success"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : region.statusTone === "danger"
                        ? "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";

                  return (
                    <div
                      key={region.id}
                      className="flex items-center justify-between px-4 py-3 text-sm"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {region.name}
                        </span>
                        <span className="text-xs text-slate-500">{region.id}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                          <p>
                            {region.apiLatencyMs}
                            ms avg latency
                          </p>
                          <p>{region.errorRatePercent}% error rate</p>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusToneClass}`}
                        >
                          {region.statusLabel}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>Core services</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {OWNER_SYSTEM_STATUS_MOCK.services.map((service) => {
                  const statusToneClass =
                    service.statusTone === "success"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : service.statusTone === "danger"
                        ? "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";

                  return (
                    <div key={service.name} className="flex items-center justify-between px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {service.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {service.incidentsToday} incidents today
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusToneClass}`}
                      >
                        {service.statusLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

