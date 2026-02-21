 "use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export default function StaffAndRoleManagementPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <AppShell
      activePath="/staff"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Apex Capital"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <div className="flex min-w-0 flex-1 bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
        <main className="flex-1 overflow-y-auto p-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Staff Management
                  </h1>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Manage team access, invite new members, and control organization security.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold opacity-60 cursor-not-allowed dark:border-slate-700 dark:bg-slate-900"
                    disabled
                    title="Export is not implemented in this demo"
                  >
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      download
                    </span>
                    Export
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowInviteModal(true)}
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
                    title="Invite a new staff member"
                  >
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      person_add
                    </span>
                    Invite Staff
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-200 p-4 dark:border-slate-800 sm:flex-row">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                    <button className="rounded-md bg-white px-3 py-1.5 text-xs font-bold shadow-sm dark:bg-slate-700">
                      All Staff
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-200">
                      Active
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-200">
                      Pending
                    </button>
                  </div>
                  <div className="flex w-full items-center gap-3 sm:w-auto">
                    <div className="relative w-full sm:w-64">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                        filter_list
                      </span>
                      <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                          Staff Member
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                          Assigned Role
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                          Status
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                          Last Active
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center"
                              data-alt="John Cooper portrait"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_C8--xRSEu4oZTeL345dZ2OvG3RzUU2aBnsY6E8FXmGSMLfCZNT8kM-uOkUmn8tnhi66uubCYb2Xu9UmZFJ3otQOuacHvDEGXxezIJIl5gcx9Ed3LXzIAtxmiJIfF6plNNibfHbPKP0cFpy0ntK1XKwWXELtSAshw1i-UTXRH_LOptGBBULq6vFQaO3yqhn5wuFbtvE9xuMaBbhCvuA8sw1Tkmd0Iid-Si3aRTnKme1LksVA_-1VGcbNIaOaB9a4_JfcJCMflOtg')",
                              }}
                            />
                            <div>
                              <p className="text-sm font-bold">John Cooper</p>
                              <p className="text-xs text-slate-500">john.cooper@apex-capital.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                            Tenant Admin
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                              Active
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">2 mins ago</td>
                        <td className="px-6 py-4 text-right">
                          <button className="rounded p-1 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center"
                              data-alt="Sarah Jenkins portrait"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx9X7c8rwPdvWWxYhEIWuOejMdn1vBlrd9rqDwMHjnSJSGJpditUSt5oy-78kl0_7P0iiirBn1zBhGG-KL_z5UtGjwAJu8r4-YUkmUtFWszbFniKIC5oY-BIAO91U26SMTL-wU9ouN1LkxfNVq6p5xa3QXS77jEdWZEZLDaZ2OtSJQrangKM3QYJK7iHDE7hmB6MyuQoXePWEkQhYT5NLbC-nK41986wPjwobe0pTuRh09X3fcwdJkrERTZoHmrDnzzTx6l4gvX-Q')",
                              }}
                            />
                            <div>
                              <p className="text-sm font-bold">Sarah Jenkins</p>
                              <p className="text-xs text-slate-500">s.jenkins@apex-capital.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            Loan Officer
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                              Active
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">Yesterday, 4:32 PM</td>
                        <td className="px-6 py-4 text-right">
                          <button className="rounded p-1 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-slate-400" aria-hidden="true">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                              MB
                            </div>
                            <div>
                              <p className="text-sm font-bold">Marcus Brown</p>
                              <p className="text-xs text-slate-500">marcus@apex-capital.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            Compliance
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                              Invited
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">-</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-primary hover:underline">Resend</button>
                        </td>
                      </tr>

                      <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center"
                              data-alt="David Chen portrait"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGPFyNFy1FgPOs71NMYth2sxjp-RfUiiQydHfmfljW81AHXYPE3jDK8y6BRYjViLvdP9zXn_KeZXujRWb7V0tWf27CAbwmc-9cfXgrnT4YN3Ckb_WfZ_4YMaRZGtWRRMyIhKAHiroYAphp53tV8oH7WWhePVTstP5iG6eShrAPiB7ByncUm8IlNgLpB7N2MCjfeb93l_BB2yGixOo-mjvlS99EIf_YDrzxc-O3Z6XuovlGaUQbGPVA18ZHmIgfb9qLv2Q0N744nFA')",
                              }}
                            />
                            <div>
                              <p className="text-sm font-bold">David Chen</p>
                              <p className="text-xs text-slate-500">d.chen@apex-capital.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            Support Agent
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <span className="text-xs font-medium text-slate-500">Suspended</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-slate-500 transition-colors hover:text-primary">
                            Reactivate
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/30">
                  <p className="text-xs text-slate-500">Showing 1 to 4 of 13 members</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-lg border border-slate-200 p-1.5 text-slate-400 disabled:opacity-50 dark:border-slate-700"
                      disabled
                    >
                      <span className="material-symbols-outlined block text-sm" aria-hidden="true">
                        chevron_left
                      </span>
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                      1
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700">
                      2
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700">
                      3
                    </button>
                    <button className="rounded-lg border border-slate-200 p-1.5 dark:border-slate-700">
                      <span className="material-symbols-outlined block text-sm" aria-hidden="true">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        {showInviteModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
            onClick={() => setShowInviteModal(false)}
          >
            <div
              className="w-full max-w-lg animate-in rounded-xl bg-white shadow-2xl dark:bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
              <h3 className="text-lg font-bold">Invite Team Member</h3>
              <button
                type="button"
                className="p-1 text-slate-400 transition-colors hover:text-slate-600"
                onClick={() => setShowInviteModal(false)}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  close
                </span>
              </button>
            </div>
            <div className="p-6">
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                Invitations will be sent to the email addresses provided below. You can assign multiple roles and
                custom permissions.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sarah@company.com"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase text-slate-500">
                    Assign Role
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800">
                    <option>Select a role...</option>
                    <option>Tenant Admin</option>
                    <option>Loan Officer</option>
                    <option>Compliance Manager</option>
                    <option>Support Staff</option>
                    <option>Viewer (Read Only)</option>
                  </select>
                </div>
                <div className="pt-2">
                  <label className="mb-3 block text-xs font-bold uppercase text-slate-500">
                    Permissions Preview
                  </label>
                  <div className="space-y-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Create &amp; Edit Loans</span>
                      <div className="relative h-4 w-8 rounded-full bg-primary">
                        <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Access Financial Reports</span>
                      <div className="relative h-4 w-8 rounded-full bg-slate-300 dark:bg-slate-600">
                        <div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Manage Other Staff</span>
                      <div className="relative h-4 w-8 rounded-full bg-slate-300 dark:bg-slate-600">
                        <div className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end gap-3 bg-slate-50 px-6 py-4 dark:bg-slate-800/50">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                onClick={() => setShowInviteModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              >
                Send Invitation
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
