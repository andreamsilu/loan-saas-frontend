<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Loan Portfolio Management - LendSaaS Pro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#137fec",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101922",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
<div class="flex min-h-screen">
<!-- Sidebar -->
<aside class="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-20">
<div class="p-6 flex items-center gap-3">
<div class="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">payments</span>
</div>
<div>
<h1 class="font-bold text-lg leading-tight">LendSaaS Pro</h1>
<p class="text-xs text-slate-500 dark:text-slate-400">Tenant Admin</p>
</div>
</div>
<nav class="flex-1 px-4 py-4 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white transition-colors" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
<span class="text-sm font-medium">Loan Portfolio</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Borrowers</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">description</span>
<span class="text-sm font-medium">Reports</span>
</a>
<div class="pt-4 pb-2">
<p class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">System</p>
</div>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">history</span>
<span class="text-sm font-medium">Audit Logs</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 px-2">
<div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="Admin user avatar" data-alt="Corporate headshot of a middle aged man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4BJY0_-UvTkDz5IpjfcbtWCxDQv_io1_cJDgA3MPf9gWTFlk5zcwfDQCCt4cUH4DerW3EHeFjkAZFfjZUQHrLDIv3tzpRBWuK5kdzun93ESesnmWQRRIDGr73Hgc6NT4ljyM8A5A-nMhBPAbvgQ_6VFpcyzOzGzGM8-GJJC-A4pBP8BCBDrVfTf5s06JeNiPXjskcpAuwC2-LTBLbvGT9G4hXVHXZrMNbFikqR7SHNXXlc15ZeYDVBOP76_kmmVPEa9326NF2kLo"/>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium truncate">James Wilson</p>
<p class="text-xs text-slate-500 truncate">james@lendsaas.com</p>
</div>
<span class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">logout</span>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 ml-64 flex flex-col min-w-0">
<!-- Header Bar -->
<header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
<div class="flex items-center flex-1 max-w-lg">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl leading-none">search</span>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search by Borrower ID, Name, or Product..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-500 hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
<button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-sm">
<span class="material-symbols-outlined text-lg leading-none">add</span>
                        Create New Loan
                    </button>
</div>
</header>
<!-- Page Content -->
<div class="p-8 space-y-8">
<!-- Page Title & Stats -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 class="text-3xl font-extrabold tracking-tight">Active Loan Portfolio</h2>
<p class="text-slate-500 dark:text-slate-400 mt-1">Real-time overview of all disbursed and monitored lending products.</p>
</div>
<div class="flex gap-4">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-lg leading-none">download</span>
                            Export CSV
                        </button>
</div>
</div>
<!-- KPI Overview -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center justify-between mb-2">
<span class="text-sm font-medium text-slate-500">Total Outstanding</span>
<span class="material-symbols-outlined text-primary">account_balance</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-2xl font-bold">$4,250,890.00</span>
<span class="text-xs font-medium text-emerald-600 flex items-center bg-emerald-50 px-1.5 py-0.5 rounded leading-none">+2.4%</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center justify-between mb-2">
<span class="text-sm font-medium text-slate-500">Active Disbursements</span>
<span class="material-symbols-outlined text-primary">trending_up</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-2xl font-bold">1,284</span>
<span class="text-xs font-medium text-emerald-600 flex items-center bg-emerald-50 px-1.5 py-0.5 rounded leading-none">+0.8%</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center justify-between mb-2">
<span class="text-sm font-medium text-slate-500">Total in Arrears</span>
<span class="material-symbols-outlined text-red-500">warning</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-2xl font-bold">12.5%</span>
<span class="text-xs font-medium text-red-600 flex items-center bg-red-50 px-1.5 py-0.5 rounded leading-none">+1.2%</span>
</div>
</div>
</div>
<!-- Filters -->
<div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-lg">filter_list</span>
<span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Filters:</span>
</div>
<div class="flex-1 flex flex-wrap gap-3">
<div class="relative min-w-[180px]">
<select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
<option>All Statuses</option>
<option>Disbursed</option>
<option>Pending Approval</option>
<option>In Arrears</option>
<option>Fully Repaid</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg">expand_more</span>
</div>
<div class="relative min-w-[220px]">
<div class="flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 gap-2 text-sm cursor-pointer">
<span class="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
<span class="text-slate-600 dark:text-slate-400 font-medium">Oct 1, 2023 - Oct 31, 2023</span>
</div>
</div>
<div class="relative min-w-[180px]">
<select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
<option>All Loan Products</option>
<option>SME Term Loan</option>
<option>Micro-credit</option>
<option>Business Line</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg">expand_more</span>
</div>
</div>
<button class="text-sm font-medium text-primary hover:underline px-2">Clear All</button>
</div>
<!-- Data Table Container -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Borrower</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Loan Product</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Principal</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Outstanding</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Disbursed Date</th>
<th class="px-6 py-4"></th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">JS</div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Jordan Smith</p>
<p class="text-xs text-slate-500">ID: LN-2023-9021</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<p class="text-sm font-medium">SME Growth Term</p>
<p class="text-xs text-slate-500">24 Months Fixed</p>
</td>
<td class="px-6 py-4 text-sm font-medium">$50,000.00</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">$42,150.00</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span class="size-1.5 rounded-full bg-emerald-500"></span>
                                            Disbursed
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 12, 2023</td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">AM</div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Aurora Markets LLC</p>
<p class="text-xs text-slate-500">ID: LN-2023-8845</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<p class="text-sm font-medium">Inventory Financing</p>
<p class="text-xs text-slate-500">Short Term Bridge</p>
</td>
<td class="px-6 py-4 text-sm font-medium">$12,500.00</td>
<td class="px-6 py-4 text-sm font-bold text-red-600">$8,750.00</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
<span class="size-1.5 rounded-full bg-red-500"></span>
                                            In Arrears
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Sep 05, 2023</td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">BW</div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Boutique Wellness</p>
<p class="text-xs text-slate-500">ID: LN-2023-1102</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<p class="text-sm font-medium">Micro-finance Plus</p>
<p class="text-xs text-slate-500">Unsecured</p>
</td>
<td class="px-6 py-4 text-sm font-medium">$3,000.00</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">$0.00</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
<span class="size-1.5 rounded-full bg-amber-500"></span>
                                            Pending
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Processing...</td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">RC</div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Riverstone Construction</p>
<p class="text-xs text-slate-500">ID: LN-2023-7412</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<p class="text-sm font-medium">Equipment Lease</p>
<p class="text-xs text-slate-500">Asset Backed</p>
</td>
<td class="px-6 py-4 text-sm font-medium">$120,000.00</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">$98,000.00</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span class="size-1.5 rounded-full bg-emerald-500"></span>
                                            Disbursed
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Aug 20, 2023</td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">HK</div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-100">H.K. Logistics</p>
<p class="text-xs text-slate-500">ID: LN-2023-2219</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<p class="text-sm font-medium">Business Expansion</p>
<p class="text-xs text-slate-500">5 Year Amortization</p>
</td>
<td class="px-6 py-4 text-sm font-medium">$250,000.00</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">$234,400.00</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span class="size-1.5 rounded-full bg-emerald-500"></span>
                                            Disbursed
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 01, 2023</td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
<p class="text-sm text-slate-500">Showing <span class="font-bold text-slate-900 dark:text-slate-100">1 to 5</span> of <span class="font-bold text-slate-900 dark:text-slate-100">1,284</span> loans</p>
<div class="flex items-center gap-2">
<button class="p-2 border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors disabled:opacity-50" disabled="">
<span class="material-symbols-outlined leading-none">chevron_left</span>
</button>
<button class="size-8 flex items-center justify-center rounded bg-primary text-white text-sm font-bold">1</button>
<button class="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">2</button>
<button class="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">3</button>
<span class="px-1">...</span>
<button class="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">257</button>
<button class="p-2 border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined leading-none">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>