import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export default function TenantSettingsBrandingPage() {
  return (
    <AppShell
      activePath="/tenant/settings"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Tenant Admin"
      userEmail="admin@tenant.com"
      role="tenant"
    >
      <div className="relative flex min-h-screen w-full flex-col bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
        <div className="layout-container flex h-full grow flex-col">
          <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 bg-white px-10 py-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-primary">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    account_balance
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                    LoanSaaS Pro
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tenant Admin Panel
                  </p>
                </div>
              </div>
              <label className="flex h-10 min-w-40 max-w-64 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg bg-slate-100 dark:bg-slate-800">
                  <div className="flex items-center justify-center pl-4 text-slate-500">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      search
                    </span>
                  </div>
                  <input
                    placeholder="Search settings..."
                    className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent px-4 text-base font-normal placeholder:text-slate-500 focus:ring-0"
                  />
                </div>
              </label>
            </div>
            <div className="flex flex-1 items-center justify-end gap-8">
              <nav className="flex items-center gap-6">
                <Link
                  href="/tenant"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
                >
                  Dashboard
                </Link>
                <Link
                  href="/loans"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
                >
                  Loans
                </Link>
                <Link
                  href="/tenant/settings"
                  className="border-b-2 border-primary py-4 text-sm font-bold text-primary"
                >
                  Settings
                </Link>
              </nav>
              <div className="flex gap-2">
                <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    notifications
                  </span>
                </button>
                <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    help
                  </span>
                </button>
              </div>
              <div
                className="size-10 rounded-full border border-slate-200 bg-cover bg-center bg-no-repeat"
                data-alt="User profile avatar"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBeXlWQev3WquT4xB1qJ4wA6O5o5dJfgVTQDEdzYbjrXwlxfE5Zfd6zecOu3XNZ1Xd47gTzpqC1yUTd44rjWF7s-Uc7jLmhcHzi8L8R1AA1hzFGCbxANxl_qThqQjXv1jJrQuIuMNjaoNsd6Tql4F_Cu3YWeuBfuF--IkTDYSGJQOxyYnozBT6j8dBDpAztwvrZjrIxYc6GM-SdpX8geNxgYT9LUCBt8AveTuj-A5xVi78foCQBPGTNFSaP4KHouns4l3kIMf8yzc8\")",
                }}
              />
            </div>
          </header>

          <main className="flex-1 overflow-y-auto bg-background-light p-10 dark:bg-background-dark">
            <div className="mx-auto max-w-[960px]">
              <div className="mb-8">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  Tenant Branding &amp; Settings
                </h1>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Manage your platform&apos;s visual identity, contact details, and global notification systems.
                </p>
              </div>

              <section className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      brush
                    </span>
                    Logo &amp; Visual Identity
                  </h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                      <p className="mb-4 text-sm font-bold text-slate-900 dark:text-white">
                        Main Platform Logo
                      </p>
                      <div className="flex items-start gap-6">
                        <div className="relative flex size-32 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                          <div
                            className="h-full w-full bg-contain bg-center bg-no-repeat"
                            data-alt="Company main logo preview"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt3J9HZpCxgzJl6pKg_pImUmOgTHnCOwLnc1snG1khNEo1WgqD50UIneSGugoEeQPv_RLadeCMnWxZ_cQ24PfywwAwn4i11lyBauXzuEa8_ow2pkkLu82PcjNm1vX_noPeH7BiHa4ot7yjX8l1w65s_8igTddLLmAS0AIUkyJ7VO2TyKfG4MqJ4pXq2GEvpPNJWsCWyTS7JpolOXy4po7fZr69a5RVP4YP0rblrOU32Bq-fur2Ch-k9xpWK-FzGHhHvHDKyXmbaMo")',
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="mb-3 text-xs text-slate-500">
                            Recommended size: 512x512px. SVG or PNG preferred. Max size 2MB.
                          </p>
                          <div className="flex gap-2">
                            <button
                              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white opacity-60 cursor-not-allowed"
                              disabled
                              title="Logo upload is not implemented in this demo"
                            >
                              Upload New
                            </button>
                            <button
                              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 opacity-60 cursor-not-allowed dark:bg-slate-800 dark:text-slate-200"
                              disabled
                              title="Logo removal is not implemented in this demo"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-4 text-sm font-bold text-slate-900 dark:text-white">
                        Primary Brand Color
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="size-14 rounded-lg border-2 border-white bg-primary shadow-lg dark:border-slate-700" />
                        <div className="flex-1">
                          <label className="mb-1 block text-xs font-medium text-slate-500">
                            Hex Code
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value="#137fec"
                              readOnly
                              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono dark:border-slate-700 dark:bg-slate-800"
                            />
                            <button className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                                colorize
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-xs italic text-slate-500">
                        This color will be used for buttons, links, and active states across the tenant dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      support_agent
                    </span>
                    Support Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Support Email
                    </label>
                    <input
                      type="email"
                      placeholder="support@yourcompany.com"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Support Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Help Center / FAQ URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://help.yourcompany.com"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-20 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      notifications_active
                    </span>
                    Notification Settings (SMS/Email)
                  </h2>
                  <span className="rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 bg-emerald-100">
                    System Ready
                  </span>
                </div>
                <div className="space-y-8 p-8">
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                        alternate_email
                      </span>
                      SMTP Email Configuration
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500">
                          SMTP Server
                        </label>
                        <input
                          type="text"
                          value="smtp.sendgrid.net"
                          readOnly
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500">Port</label>
                        <input
                          type="text"
                          value="587"
                          readOnly
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500">Security</label>
                        <select className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800">
                          <option>TLS</option>
                          <option>SSL</option>
                          <option>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 flex items-end gap-4">
                      <div className="flex-1 space-y-1">
                        <label className="text-xs font-semibold text-slate-500">
                          API Key / Password
                        </label>
                        <input
                          type="password"
                          value="••••••••••••••••"
                          readOnly
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800"
                        />
                      </div>
                      <button className="h-[38px] rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20">
                        Test Connection
                      </button>
                    </div>
                  </div>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  <div>
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                        sms
                      </span>
                      SMS Gateway (Twilio/Vonage)
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500">
                          Account SID
                        </label>
                        <input
                          type="text"
                          placeholder="ACxxxxxxxxxxxxxxxx"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500">
                          Auth Token
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••••••••••"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 text-sm dark:border-slate-700 dark:bg-slate-800"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 dark:bg-primary/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">
                          info
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          SMS rates may vary based on your gateway provider&apos;s plan.
                        </p>
                      </div>
                      <button className="text-xs font-bold text-primary hover:underline">
                        View pricing info
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-end gap-3 border-t border-slate-200 bg-white/80 px-10 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
            <button
              className="rounded-lg px-6 py-2.5 text-sm font-bold text-slate-600 opacity-60 cursor-not-allowed dark:text-slate-300"
              disabled
              title="Settings persistence is not implemented in this demo"
            >
              Discard Changes
            </button>
            <button
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-2.5 text-sm font-bold text-white opacity-60 cursor-not-allowed dark:bg-primary"
              disabled
              title="Settings persistence is not implemented in this demo"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                save
              </span>
              Save All Settings
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
