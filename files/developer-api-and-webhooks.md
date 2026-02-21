<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Developer API &amp; Webhooks | LoanSaaS</title>
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
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .mono-text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
<div class="flex h-screen overflow-hidden">
<!-- Sidebar -->
<aside class="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="bg-primary p-1.5 rounded-lg text-white">
<span class="material-symbols-outlined text-2xl">account_balance</span>
</div>
<h1 class="text-xl font-bold tracking-tight">LoanSaaS</h1>
</div>
<nav class="flex-1 px-4 space-y-1 overflow-y-auto">
<div class="py-4">
<p class="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main</p>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="text-sm font-medium">Loans</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Users</span>
</a>
</div>
<div class="py-4 border-t border-slate-100 dark:border-slate-800">
<p class="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Developer Portal</p>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">monitoring</span>
<span class="text-sm font-medium">Overview</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">key</span>
<span class="text-sm font-medium">API Keys</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">webhook</span>
<span class="text-sm font-medium">Webhooks</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="text-sm font-medium">Usage Logs</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">description</span>
<span class="text-sm font-medium">Documentation</span>
</a>
</div>
</nav>
<div class="p-4 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-3 px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
<div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs" data-alt="User avatar placeholder profile icon">JD</div>
<div class="flex-1 overflow-hidden">
<p class="text-xs font-semibold truncate">John Developer</p>
<p class="text-[10px] text-slate-500 truncate">Admin (Tenant)</p>
</div>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col overflow-hidden">
<!-- Top Nav -->
<header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
<div class="flex items-center gap-4">
<nav aria-label="Breadcrumb" class="flex text-sm text-slate-500">
<ol class="inline-flex items-center space-x-1 md:space-x-3">
<li class="inline-flex items-center">
<a class="hover:text-primary transition-colors" href="#">Settings</a>
</li>
<li>
<div class="flex items-center">
<span class="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span class="text-slate-900 dark:text-slate-100 font-medium">Developer</span>
</div>
</li>
</ol>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input class="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search documentation..." type="text"/>
</div>
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
</div>
</header>
<!-- Dashboard Content -->
<div class="flex-1 overflow-y-auto p-8 space-y-8">
<!-- Hero Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="max-w-2xl">
<h2 class="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">API &amp; Integrations</h2>
<p class="mt-2 text-slate-500">Manage your programmatic access, monitor real-time event webhooks, and debug API interaction logs across your multi-tenant environment.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
<span class="material-symbols-outlined text-sm">add</span>
                        Generate New API Key
                    </button>
</div>
</div>
<!-- Tabs/Sections Content -->
<div class="grid grid-cols-1 gap-8">
<!-- API Keys Card -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<div>
<h3 class="text-lg font-bold">Active API Keys</h3>
<p class="text-xs text-slate-500">Treat these keys with care. Do not share them in public repositories.</p>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
<tr>
<th class="px-6 py-3">Key Name</th>
<th class="px-6 py-3">Secret Key</th>
<th class="px-6 py-3">Created</th>
<th class="px-6 py-3">Last Used</th>
<th class="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
<tr>
<td class="px-6 py-4 font-medium">Production Primary</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 mono-text bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 w-fit">
<span>sk_live_••••••••3a9d</span>
<button class="text-primary hover:text-primary/80 transition-colors">
<span class="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</td>
<td class="px-6 py-4 text-slate-500">Oct 12, 2023</td>
<td class="px-6 py-4 text-slate-500">2 minutes ago</td>
<td class="px-6 py-4 text-right">
<button class="text-red-500 hover:text-red-600 font-medium px-3 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Revoke</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 font-medium">Staging Test Key</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 mono-text bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 w-fit">
<span>sk_test_••••••••f421</span>
<button class="text-primary hover:text-primary/80 transition-colors">
<span class="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</td>
<td class="px-6 py-4 text-slate-500">Sep 05, 2023</td>
<td class="px-6 py-4 text-slate-500">4 days ago</td>
<td class="px-6 py-4 text-right">
<button class="text-red-500 hover:text-red-600 font-medium px-3 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Revoke</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Webhooks Section -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h3 class="text-lg font-bold">Webhook Endpoints</h3>
<button class="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-sm">add_circle</span> Add Endpoint
                            </button>
</div>
<div class="p-6 space-y-4">
<!-- Webhook Item 1 -->
<div class="p-4 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-800/30">
<div class="flex items-start justify-between">
<div class="space-y-1">
<div class="flex items-center gap-2">
<span class="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase rounded leading-none">Active</span>
<p class="font-semibold text-sm">ERP Integration Service</p>
</div>
<p class="text-xs mono-text text-slate-500">https://api.acme-erp.com/webhooks/loan-updates</p>
</div>
<div class="flex gap-2">
<button class="p-1.5 text-slate-400 hover:text-primary transition-colors"><span class="material-symbols-outlined text-sm">settings</span></button>
<button class="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
<span class="px-2 py-1 bg-white dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">loan.created</span>
<span class="px-2 py-1 bg-white dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">loan.funded</span>
<span class="px-2 py-1 bg-white dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">payment.failed</span>
</div>
</div>
<!-- Webhook Item 2 -->
<div class="p-4 border border-slate-100 dark:border-slate-800 rounded-lg">
<div class="flex items-start justify-between">
<div class="space-y-1">
<div class="flex items-center gap-2">
<span class="px-2 py-0.5 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 text-[10px] font-bold uppercase rounded leading-none">Inactive</span>
<p class="font-semibold text-sm">Beta Slack Bot</p>
</div>
<p class="text-xs mono-text text-slate-500">https://hooks.slack.com/services/T00000000/B00000000/...</p>
</div>
<div class="flex gap-2">
<button class="p-1.5 text-slate-400 hover:text-primary transition-colors"><span class="material-symbols-outlined text-sm">settings</span></button>
<button class="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
</div>
</div>
</div>
<!-- Webhook Secret Card -->
<div class="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6 flex flex-col gap-4">
<div class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-3xl">shield_locked</span>
<h4 class="font-bold">Signing Secret</h4>
</div>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Webhooks are signed with this secret so you can verify that requests are coming from our servers.
                        </p>
<div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/20 flex items-center justify-between">
<span class="mono-text text-xs text-slate-700 dark:text-slate-200 truncate pr-2">whsec_6B9aLq0vP5n7X2m9...</span>
<button class="text-primary hover:text-primary/80"><span class="material-symbols-outlined text-sm">visibility</span></button>
</div>
<button class="mt-auto w-full py-2 bg-white dark:bg-slate-800 text-primary font-bold text-xs rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors">
                            Send Test Event
                        </button>
</div>
</section>
<!-- API Usage Logs -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 class="text-lg font-bold">API Usage Logs</h3>
<p class="text-xs text-slate-500">Live feed of requests made using your API keys.</p>
</div>
<div class="flex items-center gap-2">
<select class="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary">
<option>All Methods</option>
<option>GET</option>
<option>POST</option>
</select>
<select class="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary">
<option>Success (2xx)</option>
<option>Errors (4xx, 5xx)</option>
</select>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
<tr>
<th class="px-6 py-3">Timestamp</th>
<th class="px-6 py-3">Method</th>
<th class="px-6 py-3">Endpoint</th>
<th class="px-6 py-3">Status</th>
<th class="px-6 py-3">Latency</th>
<th class="px-6 py-3 text-right">Details</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-sm mono-text">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<td class="px-6 py-4 text-slate-400 whitespace-nowrap">2023-11-24 14:32:01</td>
<td class="px-6 py-4 font-bold text-primary">POST</td>
<td class="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/loans/apply</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">201 Created</span>
</td>
<td class="px-6 py-4 text-slate-500">142ms</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">open_in_new</span>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<td class="px-6 py-4 text-slate-400 whitespace-nowrap">2023-11-24 14:31:55</td>
<td class="px-6 py-4 font-bold text-slate-500">GET</td>
<td class="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/users/me</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
</td>
<td class="px-6 py-4 text-slate-500">48ms</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">open_in_new</span>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<td class="px-6 py-4 text-slate-400 whitespace-nowrap">2023-11-24 14:30:12</td>
<td class="px-6 py-4 font-bold text-primary">POST</td>
<td class="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/loans/apply</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">400 Bad Req</span>
</td>
<td class="px-6 py-4 text-slate-500">110ms</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">open_in_new</span>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<td class="px-6 py-4 text-slate-400 whitespace-nowrap">2023-11-24 14:28:44</td>
<td class="px-6 py-4 font-bold text-slate-500">GET</td>
<td class="px-6 py-4 text-slate-700 dark:text-slate-300">/v1/loans/9821-abc</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
</td>
<td class="px-6 py-4 text-slate-500">67ms</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">open_in_new</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<p class="text-xs text-slate-500">Showing 1-10 of 2,492 requests</p>
<div class="flex gap-2">
<button class="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Previous</button>
<button class="px-3 py-1 text-xs bg-primary text-white rounded">Next</button>
</div>
</div>
</section>
</div>
</div>
</main>
</div>
</body></html>