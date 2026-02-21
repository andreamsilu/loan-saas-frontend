<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Loan Schedule and Details | LoanSaaS</title>
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
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
<div class="relative flex min-h-screen flex-col group/design-root overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-3xl">account_balance</span>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">LoanSaaS</h2>
</div>
<div class="hidden md:flex items-center gap-1">
<label class="flex flex-col min-w-64 h-10">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-slate-200 dark:border-slate-700">
<div class="text-slate-500 bg-slate-50 dark:bg-slate-800 flex items-center justify-center px-3">
<span class="material-symbols-outlined text-xl">search</span>
</div>
<input class="w-full border-none bg-slate-50 dark:bg-slate-800 focus:ring-0 text-sm placeholder:text-slate-500 text-slate-900 dark:text-white px-2" placeholder="Search loans, tenants..."/>
</div>
</label>
</div>
</div>
<div class="flex flex-1 justify-end gap-6 items-center">
<nav class="hidden lg:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Dashboard</a>
<a class="text-primary text-sm font-semibold border-b-2 border-primary pb-1" href="#">Loans</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Tenants</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Reports</a>
</nav>
<div class="flex items-center gap-3">
<button class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
<div class="flex items-center gap-3 cursor-pointer group">
<div class="bg-primary/10 rounded-full p-0.5 border border-primary/20">
<img alt="Profile" class="size-8 rounded-full object-cover" data-alt="Portrait of a smiling professional male user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt2WjyIuPnUB9w1iTLz5lK-aVqfGmnBTEeAaT3KpDCBBQXCKwGnoOK74E_BrXFlnHNT0yAG4QdK_P-XRG1_xr6LT8akSh1yNmzLO6lVZU6bdrVe9HNTxZ7aTQeG6_Y3-FCgyxJgxzm7ZhcwXTCZi4rIUmEOAjUN_x1DwiL_jhObq9xlN5J8FclkKqeQkQLFB4wZElPOGpnfrtWs6kvJTRSuQ7NX-OyZi9V2qGu6-alqebKtr2u9gmxvA2ijU5c4l4qZ7xRYTSJKYc"/>
</div>
<span class="hidden sm:inline text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">Staff Admin</span>
</div>
</div>
</div>
</header>
<main class="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-10 py-6">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 mb-6 text-sm">
<a class="text-slate-500 hover:text-primary transition-colors" href="#">Loans</a>
<span class="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
<span class="text-slate-900 dark:text-slate-200 font-medium">Loan #L-9842</span>
</nav>
<!-- Loan Header Card -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">
<h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Loan #L-9842</h1>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span class="size-1.5 rounded-full bg-green-600 mr-1.5"></span>
                            ACTIVE
                        </span>
</div>
<div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 text-sm">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-lg">corporate_fare</span>
<span>Borrower: <span class="text-slate-900 dark:text-slate-100 font-semibold">Acme Corp</span></span>
</div>
<span class="hidden md:inline">•</span>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-lg">calendar_today</span>
<span>Issued: Jan 12, 2024</span>
</div>
<span class="hidden md:inline">•</span>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-lg">account_balance_wallet</span>
<span>Tenancy: Professional Tier</span>
</div>
</div>
</div>
<div class="flex items-center gap-3">
<button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
<span class="material-symbols-outlined text-xl">event_repeat</span>
                        Reschedule
                    </button>
<button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition-all">
<span class="material-symbols-outlined text-xl">payments</span>
                        Record Payment
                    </button>
</div>
</div>
</div>
<!-- Metric Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Total Balance</p>
<div class="flex items-baseline gap-1">
<p class="text-2xl font-black text-slate-900 dark:text-white">$45,200.00</p>
</div>
<div class="mt-2 text-xs text-green-600 font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-xs">arrow_downward</span>
<span>12% reduction this quarter</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Next Due Amount</p>
<p class="text-2xl font-black text-slate-900 dark:text-white">$1,250.00</p>
<div class="mt-2 text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-xs">schedule</span>
<span>Due in 8 days (Mar 15)</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Last Payment</p>
<p class="text-2xl font-black text-slate-900 dark:text-white">Feb 15, 2024</p>
<div class="mt-2 text-xs text-slate-400 font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-xs">check_circle</span>
<span>Paid on time via ACH</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Interest Rate</p>
<p class="text-2xl font-black text-slate-900 dark:text-white">6.5%</p>
<div class="mt-2 text-xs text-slate-400 font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-xs">trending_up</span>
<span>Fixed rate (36 months)</span>
</div>
</div>
</div>
<!-- Tabbed Section -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div class="border-b border-slate-200 dark:border-slate-800 px-6">
<div class="flex gap-8 overflow-x-auto">
<button class="flex items-center gap-2 py-4 border-b-2 border-primary text-primary font-bold text-sm">
<span class="material-symbols-outlined text-xl">calendar_month</span>
                        Schedule
                    </button>
<button class="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-bold text-sm transition-colors">
<span class="material-symbols-outlined text-xl">receipt_long</span>
                        Transactions
                    </button>
<button class="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-bold text-sm transition-colors">
<span class="material-symbols-outlined text-xl">folder_open</span>
                        Documents
                        <span class="ml-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px]">4</span>
</button>
</div>
</div>
<div class="p-0 overflow-x-auto">
<table class="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">#</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Due Date</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Principal</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Interest</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fees</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Total Amount</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Status</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"></th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">1</td>
<td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Jan 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,000.00</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$244.83</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">PAID</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">2</td>
<td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Feb 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,005.42</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$239.41</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">PAID</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<tr class="bg-primary/5 hover:bg-primary/10 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-primary">3</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">Mar 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,010.87</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$233.96</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">UPCOMING</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">4</td>
<td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Apr 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,016.35</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$228.48</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">PENDING</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">5</td>
<td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">May 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,021.85</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$222.98</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">PENDING</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">6</td>
<td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Jun 15, 2024</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$1,027.39</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$217.44</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">$5.17</td>
<td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-right">$1,250.00</td>
<td class="px-6 py-4 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">PENDING</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer/Pagination -->
<div class="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
<p class="text-xs font-semibold text-slate-500 dark:text-slate-400">Showing <span class="text-slate-900 dark:text-white">6</span> of <span class="text-slate-900 dark:text-white">36</span> installments</p>
<div class="flex items-center gap-2">
<button class="px-3 py-1 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50" disabled="">Previous</button>
<div class="flex items-center gap-1">
<button class="w-8 h-8 flex items-center justify-center text-xs font-bold bg-primary text-white rounded">1</button>
<button class="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors">2</button>
<button class="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors">3</button>
<span class="text-slate-400 mx-1">...</span>
<button class="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors">6</button>
</div>
<button class="px-3 py-1 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Next</button>
</div>
</div>
</div>
<!-- Quick View: Recent Activity -->
<div class="mt-8">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Loan Remarks &amp; Notes</h3>
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div class="flex gap-4">
<div class="flex-shrink-0">
<div class="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">edit_note</span>
</div>
</div>
<div class="flex-1">
<textarea class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" placeholder="Add a private note about this loan..." rows="2"></textarea>
<div class="mt-3 flex justify-end">
<button class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Post Note</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>