<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tenant Overview Dashboard | LoanSaaS Pro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .active-nav {
            background-color: rgba(19, 127, 236, 0.1);
            color: #137fec;
            border-left: 3px solid #137fec;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div class="flex h-screen overflow-hidden">
<!-- Sidebar Navigation -->
<aside class="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="bg-primary rounded-lg p-1.5">
<span class="material-symbols-outlined text-white text-2xl">account_balance</span>
</div>
<div>
<h1 class="font-bold text-lg leading-tight tracking-tight">LoanSaaS Pro</h1>
<p class="text-xs text-slate-500 dark:text-slate-400">Tenant Admin Panel</p>
</div>
</div>
<nav class="flex-1 px-3 space-y-1 mt-4">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav group" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-semibold">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Borrowers</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="text-sm font-medium">Loans</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-sm font-medium">Reports</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">help_center</span>
<span class="text-sm font-medium">Help Support</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="User Profile" class="size-full object-cover" data-alt="Professional headshot of a business executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3POd4pRpS4_U2hEgbnenNfX9zWTeOTGMJWt858y8kpLQJTFttUxInckMSJwhVC-WeWcB7KwTLekT1F7Rv2rFEslU2iZm9Mm5zMcOskd2ZJAyjVUuX0fSuZxpIh11J1WB4CKQF-2QJtTxexaElzrlbE9QAAlMdyagC9uGTuaNn7njn6q3lYAgO5EIwwBwKm5IOtX2Gcuer0EwW9UxEI3QXF5ZG0NA9JdRgXM0KJr0oIxRQeEyPOxG0iCFp9zWlBpnXM6KUiWGRxnc"/>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-semibold truncate">Alex Chen</p>
<p class="text-xs text-slate-500 truncate">alex.chen@loansaas.pro</p>
</div>
<span class="material-symbols-outlined text-slate-400 text-sm">logout</span>
</div>
</div>
</aside>
<!-- Main Content Wrapper -->
<div class="flex-1 flex flex-col min-w-0 overflow-hidden">
<!-- Top Header -->
<header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
<div class="flex items-center gap-4 flex-1">
<h2 class="text-xl font-bold">Tenant Overview</h2>
<div class="max-w-md w-full ml-4 hidden md:block">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400" placeholder="Search borrowers, loans, or transactions..." type="text"/>
</div>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
<button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm">add</span>
                        New Loan Application
                    </button>
</div>
</header>
<!-- Dashboard Content -->
<main class="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark">
<!-- KPI Stat Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg material-symbols-outlined">group</span>
<span class="text-green-600 text-xs font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">+2.4% <span class="material-symbols-outlined text-[10px]">trending_up</span></span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Active Borrowers</p>
<h3 class="text-2xl font-bold mt-1">1,284</h3>
<p class="text-[10px] text-slate-400 mt-2 uppercase tracking-wider font-bold">Updated 5m ago</p>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-primary/10 text-primary rounded-lg material-symbols-outlined">account_balance_wallet</span>
<span class="text-red-600 text-xs font-bold flex items-center gap-1 bg-red-50 px-2 py-0.5 rounded-full">-1.1% <span class="material-symbols-outlined text-[10px]">trending_down</span></span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Active Loans Portfolio</p>
<h3 class="text-2xl font-bold mt-1">$4,215,800</h3>
<p class="text-[10px] text-slate-400 mt-2 uppercase tracking-wider font-bold">vs last month</p>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 rounded-lg material-symbols-outlined">warning</span>
<span class="text-green-600 text-xs font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">+0.5% <span class="material-symbols-outlined text-[10px]">arrow_upward</span></span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Portfolio at Risk (PAR)</p>
<h3 class="text-2xl font-bold mt-1 text-orange-600">3.2%</h3>
<p class="text-[10px] text-slate-400 mt-2 uppercase tracking-wider font-bold">Industry Average: 4.1%</p>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-lg material-symbols-outlined">payments</span>
<span class="text-green-600 text-xs font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">+12% <span class="material-symbols-outlined text-[10px]">trending_up</span></span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Today's Collections</p>
<h3 class="text-2xl font-bold mt-1">$12,450.00</h3>
<p class="text-[10px] text-slate-400 mt-2 uppercase tracking-wider font-bold">Target: $15,000</p>
</div>
</div>
<!-- Main Grid: Charts & Activity -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Repayment Trends -->
<div class="lg:col-span-2 space-y-6">
<div class="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center justify-between mb-8">
<div>
<h3 class="text-lg font-bold">Repayment Trends</h3>
<p class="text-sm text-slate-500">Monthly loan repayment performance for current fiscal year</p>
</div>
<select class="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-medium focus:ring-1 focus:ring-primary py-1.5 pl-3 pr-8">
<option>Last 6 Months</option>
<option>Last 12 Months</option>
<option>Current Year</option>
</select>
</div>
<!-- Mock Bar Chart -->
<div class="relative h-64 flex items-end justify-between gap-4 px-4">
<!-- Grid Lines -->
<div class="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none">
<div class="border-t border-slate-100 dark:border-slate-800 w-full h-px"></div>
<div class="border-t border-slate-100 dark:border-slate-800 w-full h-px"></div>
<div class="border-t border-slate-100 dark:border-slate-800 w-full h-px"></div>
<div class="border-t border-slate-100 dark:border-slate-800 w-full h-px"></div>
</div>
<!-- Bars -->
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-lg" style="height: 40%;"></div>
<span class="text-xs font-bold text-slate-400">JAN</span>
</div>
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-lg" style="height: 55%;"></div>
<span class="text-xs font-bold text-slate-400">FEB</span>
</div>
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-lg" style="height: 35%;"></div>
<span class="text-xs font-bold text-slate-400">MAR</span>
</div>
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-lg" style="height: 75%;"></div>
<span class="text-xs font-bold text-slate-400">APR</span>
</div>
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary/80 hover:bg-primary transition-colors rounded-t-lg" style="height: 65%;"></div>
<span class="text-xs font-bold text-slate-400">MAY</span>
</div>
<div class="flex flex-col items-center flex-1 gap-2 z-10">
<div class="w-full bg-primary hover:bg-primary/90 transition-colors rounded-t-lg" style="height: 90%;"></div>
<span class="text-xs font-bold text-slate-900 dark:text-white">JUN</span>
</div>
</div>
<div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<span class="size-3 bg-primary rounded-full"></span>
<span class="text-sm font-medium">Scheduled</span>
</div>
<div class="flex items-center gap-2">
<span class="size-3 bg-primary/20 rounded-full"></span>
<span class="text-sm font-medium">Actual</span>
</div>
</div>
<p class="text-sm text-slate-500">Average recovery rate: <span class="text-primary font-bold">94.2%</span></p>
</div>
</div>
<!-- Secondary Row within main col -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h4 class="font-bold mb-4">Portfolio Distribution</h4>
<div class="flex items-center gap-4">
<div class="size-20 rounded-full border-[6px] border-primary flex items-center justify-center relative">
<span class="text-xs font-bold">65%</span>
</div>
<div class="space-y-1">
<p class="text-xs font-bold text-slate-500">Personal Loans</p>
<p class="text-lg font-bold">$2.4M</p>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h4 class="font-bold mb-4">Risk Concentration</h4>
<div class="flex items-center gap-4">
<div class="size-20 rounded-full border-[6px] border-orange-500 flex items-center justify-center relative">
<span class="text-xs font-bold">12%</span>
</div>
<div class="space-y-1">
<p class="text-xs font-bold text-slate-500">SME Loans</p>
<p class="text-lg font-bold">$500k</p>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Recent Activity Feed -->
<div class="lg:col-span-1">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h3 class="font-bold">Recent Activity</h3>
<button class="text-xs font-bold text-primary hover:underline">View All</button>
</div>
<div class="p-2 flex-1 overflow-y-auto max-h-[600px] scrollbar-thin">
<!-- Activity Item 1 -->
<div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group">
<div class="flex gap-4">
<div class="shrink-0 size-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl">check_circle</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="text-sm font-semibold">Loan #L-9401 Approved</p>
<span class="text-[10px] font-medium text-slate-400 uppercase">2m ago</span>
</div>
<p class="text-xs text-slate-500 mt-1">SME Loan for <span class="font-bold text-slate-700 dark:text-slate-300">EcoBuild Solutions</span> was approved by System.</p>
<p class="text-xs font-bold text-primary mt-2">$45,000.00</p>
</div>
</div>
</div>
<!-- Activity Item 2 -->
<div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group border-t border-slate-50 dark:border-slate-800">
<div class="flex gap-4">
<div class="shrink-0 size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl">payments</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="text-sm font-semibold">Payment Received</p>
<span class="text-[10px] font-medium text-slate-400 uppercase">14m ago</span>
</div>
<p class="text-xs text-slate-500 mt-1">Repayment from <span class="font-bold text-slate-700 dark:text-slate-300">Johnathan Doe</span> for Loan #P-1022.</p>
<p class="text-xs font-bold text-primary mt-2">$1,240.00</p>
</div>
</div>
</div>
<!-- Activity Item 3 -->
<div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group border-t border-slate-50 dark:border-slate-800">
<div class="flex gap-4">
<div class="shrink-0 size-10 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl">person_add</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="text-sm font-semibold">New Borrower Registered</p>
<span class="text-[10px] font-medium text-slate-400 uppercase">1h ago</span>
</div>
<p class="text-xs text-slate-500 mt-1"><span class="font-bold text-slate-700 dark:text-slate-300">Sarah Jenkins</span> completed onboarding process.</p>
<div class="mt-2 flex gap-1">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">Tier 2 Verified</span>
</div>
</div>
</div>
</div>
<!-- Activity Item 4 -->
<div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group border-t border-slate-50 dark:border-slate-800">
<div class="flex gap-4">
<div class="shrink-0 size-10 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl">priority_high</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="text-sm font-semibold text-red-600">Payment Overdue</p>
<span class="text-[10px] font-medium text-slate-400 uppercase">2h ago</span>
</div>
<p class="text-xs text-slate-500 mt-1">Loan #P-1182 for <span class="font-bold text-slate-700 dark:text-slate-300">Markus Webb</span> is now 3 days past due.</p>
<button class="text-[10px] font-bold text-primary mt-2 border border-primary/20 px-2 py-1 rounded hover:bg-primary/5">Send Reminder</button>
</div>
</div>
</div>
<!-- Activity Item 5 -->
<div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group border-t border-slate-50 dark:border-slate-800">
<div class="flex gap-4">
<div class="shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-xl">description</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="text-sm font-semibold">Report Generated</p>
<span class="text-[10px] font-medium text-slate-400 uppercase">3h ago</span>
</div>
<p class="text-xs text-slate-500 mt-1">Monthly Financial Audit report for May 2024 is ready for download.</p>
<p class="text-xs font-medium text-slate-400 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">attachment</span> audit_may_24.pdf
                                            </p>
</div>
</div>
</div>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-800/50 text-center">
<button class="text-xs font-bold text-slate-500 flex items-center gap-2 justify-center mx-auto hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">refresh</span>
                                    Syncing Live Feed...
                                </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</body></html>