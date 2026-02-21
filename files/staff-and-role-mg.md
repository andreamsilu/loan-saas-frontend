<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Staff and Role Management - LoanSaaS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
<div class="relative flex min-h-screen flex-col">
<!-- Top Navigation -->
<header class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-3 sticky top-0 z-40">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3">
<div class="p-1.5 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined block">account_balance</span>
</div>
<h2 class="text-xl font-bold tracking-tight">LoanSaaS</h2>
</div>
<nav class="hidden md:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Loans</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium font-bold text-primary" href="#">Tenants</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Reporting</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Global search..." type="text"/>
</div>
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="flex items-center gap-3 pl-2">
<div class="text-right hidden sm:block">
<p class="text-xs font-bold leading-none">Apex Capital</p>
<p class="text-[10px] text-slate-500">Tenant Admin</p>
</div>
<img class="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700" data-alt="Profile picture of tenant administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-1qMXnKEJmoKol5Y6vxW1JiDHna_-4Oa9c5kPe17cCsK2qRXmsblXPUbY449i-Ye8YpEvQPX1lQtpyXuh2cvjfrjj9CG81z2Y-F3gTC4bsbHoy2XHPv4y_9_KO3ZUlCK-8_m91LcFTep3riup27FlhPQLv0mkxQdZFvDD8lbi2majctGQs_zxSt5xM7gDTXUrOrDSs0or0QPpBOEqr8XkGzHnYO8e7KqtSrs3YDJfIOGaR9-2UZ6dXdv1coAuFOJSQqyTOWa9p1Y"/>
</div>
</div>
</header>
<div class="flex flex-1">
<!-- Sidebar -->
<aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 hidden lg:flex flex-col p-4 gap-2">
<div class="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Settings</div>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-xl">settings</span>
<span class="text-sm font-medium">General</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span class="material-symbols-outlined text-xl">group</span>
<span class="text-sm font-semibold">Staff Management</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-xl">admin_panel_settings</span>
<span class="text-sm font-medium">Roles &amp; Permissions</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-xl">credit_card</span>
<span class="text-sm font-medium">Billing &amp; Plan</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-xl">security</span>
<span class="text-sm font-medium">Security</span>
</a>
<div class="mt-auto p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
<p class="text-xs text-slate-500 dark:text-slate-400 mb-2">Usage Limit</p>
<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
<div class="bg-primary h-1.5 rounded-full" style="width: 65%"></div>
</div>
<p class="text-xs font-semibold">13 / 20 Staff Members</p>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 overflow-y-auto p-8">
<div class="max-w-6xl mx-auto">
<!-- Header Actions -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Staff Management</h1>
<p class="text-slate-500 dark:text-slate-400 mt-1">Manage team access, invite new members, and control organization security.</p>
</div>
<div class="flex items-center gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all">
<span class="material-symbols-outlined text-lg">download</span> Export
                            </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
<span class="material-symbols-outlined text-lg">person_add</span> Invite Staff
                            </button>
</div>
</div>
<!-- Table Controls -->
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
<div class="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 gap-4">
<div class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
<button class="px-3 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-slate-700 shadow-sm">All Staff</button>
<button class="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Active</button>
<button class="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Pending</button>
</div>
<div class="flex items-center gap-3 w-full sm:w-auto">
<div class="relative w-full sm:w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">filter_list</span>
<input class="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="Search by name or email..." type="text"/>
</div>
</div>
</div>
<!-- Table -->
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<tr>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Staff Member</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Role</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Active</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full" data-alt="John Cooper portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_C8--xRSEu4oZTeL345dZ2OvG3RzUU2aBnsY6E8FXmGSMLfCZNT8kM-uOkUmn8tnhi66uubCYb2Xu9UmZFJ3otQOuacHvDEGXxezIJIl5gcx9Ed3LXzIAtxmiJIfF6plNNibfHbPKP0cFpy0ntK1XKwWXELtSAshw1i-UTXRH_LOptGBBULq6vFQaO3yqhn5wuFbtvE9xuMaBbhCvuA8sw1Tkmd0Iid-Si3aRTnKme1LksVA_-1VGcbNIaOaB9a4_JfcJCMflOtg"/>
<div>
<p class="text-sm font-bold">John Cooper</p>
<p class="text-xs text-slate-500">john.cooper@apex-capital.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-primary/10 text-primary">
                                                Tenant Admin
                                            </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">Active</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500">
                                            2 mins ago
                                        </td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full" data-alt="Sarah Jenkins portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx9X7c8rwPdvWWxYhEIWuOejMdn1vBlrd9rqDwMHjnSJSGJpditUSt5oy-78kl0_7P0iiirBn1zBhGG-KL_z5UtGjwAJu8r4-YUkmUtFWszbFniKIC5oY-BIAO91U26SMTL-wU9ouN1LkxfNVq6p5xa3QXS77jEdWZEZLDaZ2OtSJQrangKM3QYJK7iHDE7hmB6MyuQoXePWEkQhYT5NLbC-nK41986wPjwobe0pTuRh09X3fcwdJkrERTZoHmrDnzzTx6l4gvX-Q"/>
<div>
<p class="text-sm font-bold">Sarah Jenkins</p>
<p class="text-xs text-slate-500">s.jenkins@apex-capital.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                Loan Officer
                                            </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">Active</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500">
                                            Yesterday, 4:32 PM
                                        </td>
<td class="px-6 py-4 text-right">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
<span class="material-symbols-outlined text-slate-400">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">MB</div>
<div>
<p class="text-sm font-bold">Marcus Brown</p>
<p class="text-xs text-slate-500">marcus@apex-capital.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                Compliance
                                            </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span class="text-xs font-medium text-amber-600 dark:text-amber-400">Invited</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500">
                                            -
                                        </td>
<td class="px-6 py-4 text-right">
<button class="text-xs font-bold text-primary hover:underline">Resend</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full" data-alt="David Chen portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPFyNFy1FgPOs71NMYth2sxjp-RfUiiQydHfmfljW81AHXYPE3jDK8y6BRYjViLvdP9zXn_KeZXujRWb7V0tWf27CAbwmc-9cfXgrnT4YN3Ckb_WfZ_4YMaRZGtWRRMyIhKAHiroYAphp53tV8oH7WWhePVTstP5iG6eShrAPiB7ByncUm8IlNgLpB7N2MCjfeb93l_BB2yGixOo-mjvlS99EIf_YDrzxc-O3Z6XuovlGaUQbGPVA18ZHmIgfb9qLv2Q0N744nFA"/>
<div>
<p class="text-sm font-bold">David Chen</p>
<p class="text-xs text-slate-500">d.chen@apex-capital.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                Support Agent
                                            </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
<span class="text-xs font-medium text-slate-500">Suspended</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500">
                                            Oct 24, 2023
                                        </td>
<td class="px-6 py-4 text-right">
<button class="text-xs font-bold text-slate-500 hover:text-primary transition-colors">Reactivate</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
<p class="text-xs text-slate-500">Showing 1 to 4 of 13 members</p>
<div class="flex items-center gap-2">
<button class="p-1.5 border border-slate-200 dark:border-slate-700 rounded-lg disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-sm block">chevron_left</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold">2</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold">3</button>
<button class="p-1.5 border border-slate-200 dark:border-slate-700 rounded-lg">
<span class="material-symbols-outlined text-sm block">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
<!-- Invitation Modal (Simulated overlay) -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
<div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
<div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 class="text-lg font-bold">Invite Team Member</h3>
<button class="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="p-6">
<p class="text-sm text-slate-500 mb-6 leading-relaxed">Invitations will be sent to the email addresses provided below. You can assign multiple roles and custom permissions.</p>
<form class="space-y-4">
<div>
<label class="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email Address</label>
<input class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. sarah@company.com" type="email"/>
</div>
<div>
<label class="block text-xs font-bold text-slate-500 uppercase mb-1.5">Assign Role</label>
<select class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
<option>Select a role...</option>
<option>Tenant Admin</option>
<option>Loan Officer</option>
<option>Compliance Manager</option>
<option>Support Staff</option>
<option>Viewer (Read Only)</option>
</select>
</div>
<div class="pt-2">
<label class="block text-xs font-bold text-slate-500 uppercase mb-3">Permissions Preview</label>
<div class="space-y-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
<div class="flex items-center justify-between">
<span class="text-xs font-medium">Create &amp; Edit Loans</span>
<div class="w-8 h-4 bg-primary rounded-full relative">
<div class="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div class="flex items-center justify-between">
<span class="text-xs font-medium">Access Financial Reports</span>
<div class="w-8 h-4 bg-slate-300 dark:bg-slate-600 rounded-full relative">
<div class="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div class="flex items-center justify-between">
<span class="text-xs font-medium">Manage Other Staff</span>
<div class="w-8 h-4 bg-slate-300 dark:bg-slate-600 rounded-full relative">
<div class="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</form>
</div>
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-end gap-3">
<button class="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Cancel</button>
<button class="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">Send Invitation</button>
</div>
</div>
</div>
</body></html>