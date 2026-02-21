import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const DEVELOPER_PORTAL_MOCK = {
  apiKeys: [
    {
      name: "Production Primary",
      maskedKey: "sk_live_••••••••3a9d",
      createdAt: "Oct 12, 2023",
      lastUsed: "2 minutes ago",
    },
    {
      name: "Staging Test Key",
      maskedKey: "sk_test_••••••••f421",
      createdAt: "Sep 05, 2023",
      lastUsed: "4 days ago",
    },
  ],
};

export default function DeveloperApiWebhooksPage() {
  return (
    <AppShell
      activePath="/developer"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Developer Portal"
      userName="John Developer"
      userEmail="admin@tenant.dev"
      role="tenant"
    >
      <main className="flex flex-1 flex-col overflow-hidden">
          <header className="z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href="/tenant/settings" className="transition-colors hover:text-primary">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="material-symbols-outlined mx-1 text-sm" aria-hidden="true">
                        chevron_right
                      </span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        Developer
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-64 rounded-lg border-none bg-slate-100 py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary dark:bg-slate-800"
                />
              </div>
              <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined" aria-hidden="true">
                  notifications
                </span>
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500 dark:border-slate-900" />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-8 overflow-y-auto p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                  API &amp; Integrations
                </h2>
                <p className="mt-2 text-slate-500">
                  Manage your programmatic access, monitor real-time event webhooks, and debug API interaction logs
                  across your multi-tenant environment.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    add
                  </span>
                  Generate New API Key
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold">Active API Keys</h3>
                    <p className="text-xs text-slate-500">
                      Treat these keys with care. Do not share them in public repositories.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-3">Key Name</th>
                        <th className="px-6 py-3">Secret Key</th>
                        <th className="px-6 py-3">Created</th>
                        <th className="px-6 py-3">Last Used</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm dark:divide-slate-800">
                      {DEVELOPER_PORTAL_MOCK.apiKeys.map((key) => (
                        <tr key={key.name}>
                          <td className="px-6 py-4 font-medium">{key.name}</td>
                          <td className="px-6 py-4">
                            <div className="flex w-fit items-center gap-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 font-mono dark:border-slate-700 dark:bg-slate-800">
                              <span>{key.maskedKey}</span>
                              <button className="text-primary transition-colors hover:text-primary/80">
                                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                                  content_copy
                                </span>
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{key.createdAt}</td>
                          <td className="px-6 py-4 text-slate-500">{key.lastUsed}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="rounded px-3 py-1 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20">
                              Revoke
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                    <h3 className="text-lg font-bold">Webhook Endpoints</h3>
                    <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        add_circle
                      </span>
                      Add Endpoint
                    </button>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase leading-none text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Active
                            </span>
                            <p className="text-sm font-semibold">ERP Integration Service</p>
                          </div>
                          <p className="text-xs text-slate-500 font-mono">
                            https://api.acme-erp.com/webhooks/loan-updates
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">
                              settings
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-200 pt-3 dark:border-slate-700">
                        <span className="rounded border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          loan.created
                        </span>
                        <span className="rounded border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          loan.funded
                        </span>
                        <span className="rounded border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          payment.failed
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-800">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase leading-none text-slate-700 dark:bg-slate-800 dark:text-slate-400">
                              Inactive
                            </span>
                            <p className="text-sm font-semibold">Beta Slack Bot</p>
                          </div>
                          <p className="text-xs text-slate-500 font-mono">
                            https://hooks.slack.com/services/T00000000/B00000000/...
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1.5 text-slate-400 transition-colors hover:text-primary">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">
                              settings
                            </span>
                          </button>
                          <button className="p-1.5 text-slate-400 transition-colors hover:text-red-500">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                      shield_locked
                    </span>
                    <h4 className="font-bold">Signing Secret</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    Webhooks are signed with this secret so you can verify that requests are coming from our servers.
                  </p>
                  <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-white p-3 dark:bg-slate-800">
                    <span className="truncate pr-2 text-xs text-slate-700 font-mono dark:text-slate-200">
                      whsec_6B9aLq0vP5n7X2m9...
                    </span>
                    <button className="text-primary hover:text-primary/80">
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        visibility
                      </span>
                    </button>
                  </div>
                  <button className="mt-auto w-full rounded-lg border border-primary/30 bg-white py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/5 dark:bg-slate-800">
                    Send Test Event
                  </button>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold">API Usage Logs</h3>
                    <p className="text-xs text-slate-500">
                      Live feed of requests made using your API keys.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="text-xs rounded-lg border border-slate-200 bg-slate-50 focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
                      <option>All Methods</option>
                      <option>GET</option>
                      <option>POST</option>
                    </select>
                    <select className="text-xs rounded-lg border border-slate-200 bg-slate-50 focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
                      <option>Success (2xx)</option>
                      <option>Errors (4xx, 5xx)</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-3">Timestamp</th>
                        <th className="px-6 py-3">Method</th>
                        <th className="px-6 py-3">Endpoint</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Latency</th>
                        <th className="px-6 py-3 text-right">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm font-mono dark:divide-slate-800">
                      <tr className="cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4 text-slate-400">
                          2023-11-24 14:32:01
                        </td>
                        <td className="px-6 py-4 font-bold text-primary">POST</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/loans/apply</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            201 Created
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">142ms</td>
                        <td className="px-6 py-4 text-right">
                          <span className="material-symbols-outlined text-slate-400 transition-colors hover:text-primary" aria-hidden="true">
                            open_in_new
                          </span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4 text-slate-400">
                          2023-11-24 14:31:55
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-500">GET</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/users/me</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            200 OK
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">48ms</td>
                        <td className="px-6 py-4 text-right">
                          <span className="material-symbols-outlined text-slate-400 transition-colors hover:text-primary" aria-hidden="true">
                            open_in_new
                          </span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4 text-slate-400">
                          2023-11-24 14:30:12
                        </td>
                        <td className="px-6 py-4 font-bold text-primary">POST</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/loans/apply</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            400 Bad Req
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">110ms</td>
                        <td className="px-6 py-4 text-right">
                          <span className="material-symbols-outlined text-slate-400 transition-colors hover:text-primary" aria-hidden="true">
                            open_in_new
                          </span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4 text-slate-400">
                          2023-11-24 14:28:44
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-500">GET</td>
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                          /v1/loans/9821-abc
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            200 OK
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">67ms</td>
                        <td className="px-6 py-4 text-right">
                          <span className="material-symbols-outlined text-slate-400 transition-colors hover:text-primary" aria-hidden="true">
                            open_in_new
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 dark:border-slate-800">
                  <p className="text-xs text-slate-500">Showing 1-10 of 2,492 requests</p>
                  <div className="flex gap-2">
                    <button className="rounded border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                      Previous
                    </button>
                    <button className="rounded bg-primary px-3 py-1 text-xs text-white">Next</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </main>
    </AppShell>
  );
}
