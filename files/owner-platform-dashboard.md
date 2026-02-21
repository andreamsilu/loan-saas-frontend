<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Owner Platform Dashboard</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts: Inter -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<div class="flex h-screen overflow-hidden">
<!-- Sidebar Navigation -->
<aside class="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">account_balance</span>
</div>
<div>
<h1 class="text-sm font-bold tracking-tight">Loan SaaS Admin</h1>
<p class="text-xs text-slate-500 dark:text-slate-400">Platform Owner</p>
</div>
</div>
<nav class="flex-1 px-4 space-y-1 mt-4">
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span>Tenants</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">payments</span>
<span>Billing</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">health_and_safety</span>
<span>System Health</span>
</a>
<div class="pt-4 pb-2">
<p class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Support</p>
</div>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">help_center</span>
<span>Help Desk</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 px-3 py-2">
<div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
<div class="w-full h-full bg-cover bg-center" data-alt="User avatar of the platform owner" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqxx1oAW92ll6YKbDz14LDoE_vqDNAWaA4uqjbBHyrJ3COzbUHGUSz0e4MjYmEtS1XCeXyo7VJxW-M05ou4Z7GutYJe9bmqaSWgbbNTPTS7oBIAUk2qp6GnMTuA9klCs-IFp1HHIsj1RMIKLu5JZqG8eujxP2jsI43PaTD80pE3jsisDbgTvFV59WWjZjXNVIPi0Y2mPP7VeaYZ9TnthqQ0Zn0_BlIhjOy9ACVFFfXuTQ8yLmCooQSdsX7lOI_sxn0f5YhAsMcd68')"></div>
</div>
<div class="flex-1 min-w-0">
<p class="text-xs font-semibold truncate">Alex Henderson</p>
<p class="text-[10px] text-slate-500 truncate">alex@loansaas.com</p>
</div>
<span class="material-symbols-outlined text-slate-400 text-sm">more_vert</span>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col overflow-y-auto scroll-smooth">
<!-- Header Bar -->
<header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
<div class="flex items-center gap-4 flex-1 max-w-xl">
<div class="relative w-full group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="Search tenants, transactions, or system logs..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
<button class="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
<span class="material-symbols-outlined text-sm">add</span>
                        New Tenant
                    </button>
</div>
</header>
<!-- Page Content -->
<div class="p-8 space-y-8">
<div class="flex flex-col gap-1">
<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Overview</h2>
<p class="text-sm text-slate-500 dark:text-slate-400">A high-level view of your platform performance and tenant growth.</p>
</div>
<!-- KPI Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Card 1 -->
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Total Tenants</p>
<span class="material-symbols-outlined text-slate-400">store</span>
</div>
<div class="flex items-end gap-2">
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">1,284</p>
<p class="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center mb-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> 12%
                            </p>
</div>
<p class="text-[11px] text-slate-400">vs. last 30 days</p>
</div>
<!-- Card 2 -->
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Active Tenants</p>
<span class="material-symbols-outlined text-slate-400">bolt</span>
</div>
<div class="flex items-end gap-2">
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">1,142</p>
<p class="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center mb-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> 5%
                            </p>
</div>
<p class="text-[11px] text-slate-400">vs. last 30 days</p>
</div>
<!-- Card 3 -->
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">MRR</p>
<span class="material-symbols-outlined text-slate-400">monetization_on</span>
</div>
<div class="flex items-end gap-2">
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">$452.5k</p>
<p class="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center mb-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span> 8.2%
                            </p>
</div>
<p class="text-[11px] text-slate-400">vs. last 30 days</p>
</div>
<!-- Card 4 -->
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">API Usage</p>
<span class="material-symbols-outlined text-slate-400">api</span>
</div>
<div class="flex items-end gap-2">
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">89%</p>
<p class="text-xs font-medium text-rose-600 bg-rose-50 dark:bg-rose-500/10 px-1.5 py-0.5 rounded flex items-center mb-1">
<span class="material-symbols-outlined text-[14px]">trending_down</span> 2%
                            </p>
</div>
<p class="text-[11px] text-slate-400">system capacity utilization</p>
</div>
</div>
<!-- Main Chart Section -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div>
<h3 class="text-base font-bold text-slate-900 dark:text-slate-100">Tenant Growth over Time</h3>
<p class="text-xs text-slate-500 dark:text-slate-400">New tenant acquisition performance over the last 12 months.</p>
</div>
<div class="flex items-center gap-2">
<div class="flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
<button class="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">6M</button>
<button class="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-700 shadow-sm rounded-md text-slate-900 dark:text-slate-100">12M</button>
<button class="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">All Time</button>
</div>
<button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
<span class="material-symbols-outlined text-base">download</span>
</button>
</div>
</div>
<div class="p-6">
<div class="flex flex-col gap-4">
<div class="flex items-baseline gap-2">
<p class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">+240</p>
<span class="text-sm font-medium text-emerald-600">New tenants this year</span>
</div>
<!-- SVG Chart Simulation -->
<div class="relative w-full h-[320px] mt-4">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
<!-- Grid Lines -->
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="1000" y1="50" y2="50"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="1000" y1="125" y2="125"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="1000" y1="200" y2="200"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="1000" y1="275" y2="275"></line>
<!-- Area Gradient -->
<defs>
<lineargradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#137fec" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#137fec" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,220 C100,240 200,80 300,100 C400,120 500,220 600,180 C700,140 800,40 900,60 C1000,80 1000,300 0,300 Z" fill="url(#chartGradient)"></path>
<!-- Line Path -->
<path d="M0,220 C100,240 200,80 300,100 C400,120 500,220 600,180 C700,140 800,40 900,60 C1000,80" fill="none" stroke="#137fec" stroke-linecap="round" stroke-width="3"></path>
<!-- Data Points -->
<circle cx="300" cy="100" fill="#137fec" r="4"></circle>
<circle cx="600" cy="180" fill="#137fec" r="4"></circle>
<circle cx="900" cy="60" fill="#137fec" r="4"></circle>
</svg>
<!-- X-Axis Labels -->
<div class="flex justify-between mt-4 px-2">
<span class="text-xs font-medium text-slate-400">Jan</span>
<span class="text-xs font-medium text-slate-400">Feb</span>
<span class="text-xs font-medium text-slate-400">Mar</span>
<span class="text-xs font-medium text-slate-400">Apr</span>
<span class="text-xs font-medium text-slate-400">May</span>
<span class="text-xs font-medium text-slate-400">Jun</span>
<span class="text-xs font-medium text-slate-400">Jul</span>
<span class="text-xs font-medium text-slate-400">Aug</span>
<span class="text-xs font-medium text-slate-400">Sep</span>
<span class="text-xs font-medium text-slate-400">Oct</span>
<span class="text-xs font-medium text-slate-400">Nov</span>
<span class="text-xs font-medium text-slate-400">Dec</span>
</div>
</div>
</div>
</div>
</div>
<!-- Secondary Sections -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
<!-- Recent Alerts -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<h3 class="text-base font-bold">System Alerts</h3>
<a class="text-xs font-semibold text-primary hover:underline" href="#">View all</a>
</div>
<div class="divide-y divide-slate-100 dark:divide-slate-800">
<div class="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div class="size-8 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 flex-shrink-0">
<span class="material-symbols-outlined text-lg">warning</span>
</div>
<div class="flex-1">
<p class="text-sm font-semibold">Database Latency Spike</p>
<p class="text-xs text-slate-500">API nodes in us-east-1 are experiencing high latency.</p>
<p class="text-[10px] text-slate-400 mt-1">2 minutes ago</p>
</div>
</div>
<div class="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div class="size-8 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
<span class="material-symbols-outlined text-lg">credit_card_off</span>
</div>
<div class="flex-1">
<p class="text-sm font-semibold">Failed Payout</p>
<p class="text-xs text-slate-500">Tenant "Global Finance Ltd" payout failed due to bank verification.</p>
<p class="text-[10px] text-slate-400 mt-1">45 minutes ago</p>
</div>
</div>
<div class="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div class="size-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
<span class="material-symbols-outlined text-lg">person_add</span>
</div>
<div class="flex-1">
<p class="text-sm font-semibold">New Enterprise Signup</p>
<p class="text-xs text-slate-500">Capital One has successfully onboarded as a Tier 1 tenant.</p>
<p class="text-[10px] text-slate-400 mt-1">3 hours ago</p>
</div>
</div>
</div>
</div>
<!-- Top Tenants List -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<h3 class="text-base font-bold">Top Performing Tenants</h3>
<a class="text-xs font-semibold text-primary hover:underline" href="#">See full list</a>
</div>
<div class="p-0 overflow-x-auto">
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-3 font-semibold text-slate-500">Tenant</th>
<th class="px-6 py-3 font-semibold text-slate-500">Volume</th>
<th class="px-6 py-3 font-semibold text-slate-500 text-right">Revenue</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr>
<td class="px-6 py-4 flex items-center gap-3">
<div class="size-6 rounded-md bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Company logo for BlueRock Fin" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GOZLdCGmLUVn4cCgtAxE9WVkgpUQ4S8tTwslYpMUuuHu61KekJ4J6UI_Zj0tUp0a5z696rlZTLPSzO7oCS8SuKOjfb8UhVrxelLU94b9DWwTr-hnftMPrO5x7PiUrZCSNDUVZFys8_N4aZeS-s2LddOqVjpGK3rb7X03juDtyB-8QHtwpRUwuwSsOOtYkCvtdwYp_UZFMHX4TufhK3bky0to55NUTOS7caUmpF7ZQfuH1F5CcwbroJSIpID_99ZoUzP5cv9S3U')"></div>
<span class="font-medium">BlueRock Fin</span>
</td>
<td class="px-6 py-4 text-slate-500">2,480 loans</td>
<td class="px-6 py-4 font-semibold text-right">$42,100</td>
</tr>
<tr>
<td class="px-6 py-4 flex items-center gap-3">
<div class="size-6 rounded-md bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Company logo for SwiftLending" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzXE58v_HE-bngPkEGgPITXDxX5csvaRJGkqxx0Pr6SvCVf2IvStYe9jXRzJ_0V85IXGcO5lE2Uv80Qi3m53Cses-RDkhTZqkgZ-booHhF0y8iUXP0U4PmRrOfSzLnAzTNvhirgouywDMwGCGhN1B1KsATel_DIB9HD62Sppm4NPMBvps8hruOsPDt70tOkc3mGIAKOtcJbAKMFBXWKrKhQTQu8qJ99lqT5z0k59xtTJeY6mm2zdD1JikIJ0doD4D2Ja1LhLdwg6w')"></div>
<span class="font-medium">SwiftLending</span>
</td>
<td class="px-6 py-4 text-slate-500">1,922 loans</td>
<td class="px-6 py-4 font-semibold text-right">$38,450</td>
</tr>
<tr>
<td class="px-6 py-4 flex items-center gap-3">
<div class="size-6 rounded-md bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Company logo for Peak Credit" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeACBQv4Zf8wZ8OBfBdf5UOMBj8o8zceVHnLFmj0n3CgLHzzhrMmydK_N1arGtZAEkSoRQY7_o3ZckUpmZUGrMsosGOFF7nX4Kp6SGdqIc76DgkQ0CD6O0K-IS1AGFKDnKG8MVnIi1A2j1raBMv740THfIV4s4nAYjYV-wnYACGbKnang8Y4Ox9gpVd62Yrey2xg-vzfntJbfiYQYFB5SqjC7LlgzM4eAZ40rMEiMvCwyXfCkrwVTKAW0t4euKwQKAgh0IxL3T6u8')"></div>
<span class="font-medium">Peak Credit</span>
</td>
<td class="px-6 py-4 text-slate-500">1,540 loans</td>
<td class="px-6 py-4 font-semibold text-right">$29,120</td>
</tr>
<tr>
<td class="px-6 py-4 flex items-center gap-3">
<div class="size-6 rounded-md bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Company logo for Unity Mortgage" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvK3XhW0Ssc7DvnHULYtLps153dWjxnMHf3SovoApaKDmesL8uIaEbGV3sosU9flFd4O1Ohn-s8D98mM9rFZv_aGwbIhu17aXMspqBNW_R5iZqgfrLzArl-n6wvm5W3TRK6PT52DM1nm1j0VmoBB1cnQkODZ-LR3ctNgsC9uXnToKQIlQ9xFAD7IMymCszDe2TQ95EOd2FtsAVKWyUsjh_0Q3BvfG-LNn5mtnooTt0W8C2ma3Ceo22qp521Hl7tcR6eqW5eBIZ2vU')"></div>
<span class="font-medium">Unity Mortgage</span>
</td>
<td class="px-6 py-4 text-slate-500">1,210 loans</td>
<td class="px-6 py-4 font-semibold text-right">$24,800</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>