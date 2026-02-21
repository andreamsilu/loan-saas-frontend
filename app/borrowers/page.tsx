import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const BORROWERS_DASHBOARD_MOCK = {
  totalBorrowers: 1284,
  activeLoans: 856,
  overdueCount: 42,
  blacklistedCount: 18,
  borrowers: [
    {
      id: "ID-882910",
      name: "Johnathan Doe",
      avatarAlt: "Portrait of John Doe",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBetnhuXJFCxANNijpUr98W12wSXvW-ZS6eTSyL6e-kRwmCBm-sttMfbcxuhY90nN1OarGWD325aztl7e-G0ONHMjz0OO1jkHNCBNMXvAcSakXPQwJldXilV7v1GVOJR4QmoJGQ2qn1r9hbUdJg1SE4E_y12MmJWCDE6QxWB_IhhW7WnGDILHMv2rPILTwbu4oWKUKH8OD6zKQbTg7HwlYPRmxlAlvPUvvse4Bn7L-IygCqo22x9dp9LAjtVve-21m9ypjqt1P3D6g",
      phone: "+1 (555) 010-2345",
      statusLabel: "Active",
      statusTone: "success",
      balance: 1250,
    },
    {
      id: "ID-773204",
      name: "Sarah Miller",
      avatarAlt: "Portrait of Sarah Miller",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCj7eWq76HaDDXYPfCJOg9C5pDO2GXwGL1ndTFJvkzOyWpeCh07Qghypg-fS8pjjRS-tl_NpdQgrRKvYlHNtdwSHlDecjj5JgOmz2IRkUnwp-anyy3zsGhwAqWUdvgpfeXEHyUFuL2W4e45DGCrzaIxdiygDHelXmczRIf3KACDu5BFOHQ-0NKWzGfsrG6fKK_Ai2PkFmM5NLWS0bRaEALIPxIMJ2MkzFVSHGOOx0pL3MHGzO3eQlPPnjEaA25E5dOyWHm4GO7CSE",
      phone: "+1 (555) 019-9876",
      statusLabel: "Overdue",
      statusTone: "warning",
      balance: 4820,
    },
    {
      id: "ID-441029",
      name: "Robert Brown",
      avatarAlt: "Portrait of Robert Brown",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxI_uXjezm1K8mM78jp9qRQgYIMpQk-xpXtoLIcBfvjZC1PvlmjiREsXX8QPfCIommE8TcrmolbnkgfyFMRgU6ghddvcZ9ZmR885UQmz3DJCAXCWc1CdB2rV9fKhNOk55JLfxVzgJ7ANx7J6MgK0vvGU4NnLKRdxY93J0oeOBzrkSa_Fe4RvkYISfsXL-1pD-wwDeAIo7xF_Q4XiHwQvtRHhk6s6kqx6-dEic73Va43H6RylzfPfmDX-6s_6iA9fjcySQ2E19y-jo",
      phone: "+1 (555) 023-4561",
      statusLabel: "Blacklisted",
      statusTone: "danger",
      balance: 12450.5,
    },
    {
      id: "ID-229315",
      name: "Emily Davis",
      avatarAlt: "Portrait of Emily Davis",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2kVCyDXrOGUlTxiJwKB__xV1O43W-ep5yEUuUl1InnLom_0EFb7Jefr2wUktXR33qwG4F3xtzxdLpYV9qsN2ZUsYVJKDdUSb2Ztm6da9jNOuoFtAThJwJ0zqi7yuxC5Gwyl4kgaJSUnqwojitXg1-cdRjNmoFpiJtTqP35AyDLRzzmb79gxtxCrB2jWNZRPpDGH4F8FTLV068PSTHwl-5IAJnTEhwriz6O_kJJYre1Z2BeFXK1hHu-4yhiQlh1F1H3ujr6DYBN9E",
      phone: "+1 (555) 045-6782",
      statusLabel: "Pending",
      statusTone: "info",
      balance: 0,
    },
    {
      id: "ID-110293",
      name: "Michael Wilson",
      avatarAlt: "Portrait of Michael Wilson",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0KeoF0F1jtIIH7tGcsUapAa_3mvATF9JmMgj-BhyfujXOLdPCdVtO7wEZx29PsdzxY3Yz-y5cifwWo4YVYGUudlAPQm02qnK0ORxYiT351W5N1F-fduJr94bzoDZuaHiyLbRv5iLnWLX32p2NPjaesmr8E0vBB5-m57nIOcUfbCNl-39Aa0Qvj9sI9eA6MrIyfsrhY5MTbvK_Ck-y4NDnzZCbnsypcAR-H5PfIa1ujKlKiLdbpfGXDUbGqdpxyLHCjC2vKjFGEAI",
      phone: "+1 (555) 078-9012",
      statusLabel: "Active",
      statusTone: "success",
      balance: 890,
    },
  ],
};

export default function BorrowerManagementListPage() {
  return (
    <AppShell
      activePath="/borrowers"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Alex Rivera"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search borrowers by name, ID, or phone..."
                className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined" aria-hidden="true">
                notifications
              </span>
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <Link
              href="/borrowers/profile"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                add
              </span>
              <span>Add Borrower</span>
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8">
          <div className="mb-8 flex flex-col gap-4 justify-between md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Borrower Management</h2>
              <p className="text-slate-500 dark:text-slate-400">
                Oversee all registered borrowers and their current financial status.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium opacity-60 cursor-not-allowed dark:border-slate-800 dark:bg-slate-900"
                disabled
                title="Filters are not implemented in this demo"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  filter_list
                </span>
                <span>Filters</span>
              </button>
              <button
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium opacity-60 cursor-not-allowed dark:border-slate-800 dark:bg-slate-900"
                disabled
                title="Export is not implemented in this demo"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  file_download
                </span>
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total Borrowers
              </p>
              <p className="mt-1 text-2xl font-bold">
                {BORROWERS_DASHBOARD_MOCK.totalBorrowers.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Active Loans
              </p>
              <p className="mt-1 text-2xl font-bold">
                {BORROWERS_DASHBOARD_MOCK.activeLoans.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Overdue
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-600">
                {BORROWERS_DASHBOARD_MOCK.overdueCount.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Blacklisted
              </p>
              <p className="mt-1 text-2xl font-bold text-red-600">
                {BORROWERS_DASHBOARD_MOCK.blacklistedCount.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      ID Number
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Outstanding Balance
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {BORROWERS_DASHBOARD_MOCK.borrowers.map((borrower) => {
                    const statusBgClass =
                      borrower.statusTone === "success"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : borrower.statusTone === "warning"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                          : borrower.statusTone === "danger"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";

                    return (
                      <tr
                        key={borrower.id}
                        className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/80"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="size-8 rounded-full bg-slate-200 bg-cover bg-center"
                              data-alt={borrower.avatarAlt}
                              style={{
                                backgroundImage: `url('${borrower.avatarUrl}')`,
                              }}
                            />
                            <span className="cursor-pointer font-medium text-primary hover:underline">
                              {borrower.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          {borrower.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          {borrower.phone}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBgClass}`}
                          >
                            {borrower.statusLabel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium text-slate-900 dark:text-slate-100">
                          Tsh
                          {borrower.balance.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="rounded p-1 text-slate-400 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-lg" aria-hidden="true">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-100">1</span> to{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-100">10</span> of{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-100">1,284</span> results
              </p>
              <div className="flex items-center gap-1">
                <button
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
                  disabled
                >
                  Previous
                </button>
                <button className="size-8 rounded-lg bg-primary text-sm font-semibold text-white">
                  1
                </button>
                <button className="size-8 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  2
                </button>
                <button className="size-8 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  3
                </button>
                <span className="px-2 text-slate-400">...</span>
                <button className="size-8 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  129
                </button>
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-900">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
