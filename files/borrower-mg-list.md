<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Borrower Management List | LoanSaaS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
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
                        "display": ["Inter"]
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
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex">
<!-- Sidebar Navigation -->
<aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">account_balance</span>
</div>
<h1 class="text-xl font-bold tracking-tight">LoanSaaS</h1>
</div>
<nav class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-medium">Borrowers</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">description</span>
<span class="font-medium">Loans</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="font-medium">Payments</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">assessment</span>
<span class="font-medium">Reports</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<img class="size-9 rounded-full bg-slate-200" data-alt="Staff profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUe8-1F3B7y2xTfCk7vx2RR2IYE1AYgBrjr9dj4AXBH0BJbx9dKBgpZK6KLKn-KVEnZd6jrK6lQuS1BUeCiUg6x4IuMTC_73sYcBq5Pko2_WNivANbmMJaEDd2qE1qTfbakMPROPRbV0CI5gqUb6O4ozOJ4p3ffPBCR9KknJRMNpTRXfretKF1Dejv3Zm7aulu02Hr8LjuckttfcukI-49paJ_zJCWakw8UGHD7kB3F22_KQEypRmu5Gkig3li4biZ8RBWHrzIzxk"/>
<div class="flex-1 min-w-0">
<p class="text-sm font-semibold truncate">Alex Rivera</p>
<p class="text-xs text-slate-500 truncate">Tenant Admin</p>
</div>
<span class="material-symbols-outlined text-slate-400">settings</span>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col min-w-0">
<!-- Top Header -->
<header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search borrowers by name, ID, or phone..." type="text"/>
</div>
</div>
<div class="flex items-center gap-3">
<button class="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
<button class="flex items-center gap-2 px-3 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-sm shadow-primary/20">
<span class="material-symbols-outlined text-sm">add</span>
<span>Add Borrower</span>
</button>
</div>
</header>
<!-- Page Body -->
<div class="p-8 flex-1 overflow-auto">
<div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 class="text-2xl font-bold tracking-tight">Borrower Management</h2>
<p class="text-slate-500 dark:text-slate-400">Oversee all registered borrowers and their current financial status.</p>
</div>
<div class="flex items-center gap-2">
<button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-sm">filter_list</span>
<span>Filters</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-sm">file_download</span>
<span>Export</span>
</button>
</div>
</div>
<!-- Stats Bar (Contextual Info) -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Borrowers</p>
<p class="text-2xl font-bold mt-1">1,284</p>
</div>
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Loans</p>
<p class="text-2xl font-bold mt-1">856</p>
</div>
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overdue</p>
<p class="text-2xl font-bold mt-1 text-amber-600">42</p>
</div>
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blacklisted</p>
<p class="text-2xl font-bold mt-1 text-red-600">18</p>
</div>
</div>
<!-- Data Table Container -->
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Name</th>
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">ID Number</th>
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Phone</th>
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300 text-right">Outstanding Balance</th>
<th class="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300 text-center">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<!-- Row 1 -->
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="size-8 rounded-full" data-alt="Portrait of John Doe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetnhuXJFCxANNijpUr98W12wSXvW-ZS6eTSyL6e-kRwmCBm-sttMfbcxuhY90nN1OarGWD325aztl7e-G0ONHMjz0OO1jkHNCBNMXvAcSakXPQwJldXilV7v1GVOJR4QmoJGQ2qn1r9hbUdJg1SE4E_y12MmJWCDE6QxWB_IhhW7WnGDILHMv2rPILTwbu4oWKUKH8OD6zKQbTg7HwlYPRmxlAlvPUvvse4Bn7L-IygCqo22x9dp9LAjtVve-21m9ypjqt1P3D6g"/>
<span class="font-medium text-primary hover:underline cursor-pointer">Johnathan Doe</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ID-882910</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">+1 (555) 010-2345</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
</td>
<td class="px-6 py-4 text-sm text-right font-medium text-slate-900 dark:text-slate-100">$1,250.00</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="size-8 rounded-full" data-alt="Portrait of Sarah Miller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCj7eWq76HaDDXYPfCJOg9C5pDO2GXwGL1ndTFJvkzOyWpeCh07Qghypg-fS8pjjRS-tl_NpdQgrRKvYlHNtdwSHlDecjj5JgOmz2IRkUnwp-anyy3zsGhwAqWUdvgpfeXEHyUFuL2W4e45DGCrzaIxdiygDHelXmczRIf3KACDu5BFOHQ-0NKWzGfsrG6fKK_Ai2PkFmM5NLWS0bRaEALIPxIMJ2MkzFVSHGOOx0pL3MHGzO3eQlPPnjEaA25E5dOyWHm4GO7CSE"/>
<span class="font-medium text-primary hover:underline cursor-pointer">Sarah Miller</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ID-773204</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">+1 (555) 019-9876</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                        Overdue
                                    </span>
</td>
<td class="px-6 py-4 text-sm text-right font-medium text-slate-900 dark:text-slate-100">$4,820.00</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="size-8 rounded-full" data-alt="Portrait of Robert Brown" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxI_uXjezm1K8mM78jp9qRQgYIMpQk-xpXtoLIcBfvjZC1PvlmjiREsXX8QPfCIommE8TcrmolbnkgfyFMRgU6ghddvcZ9ZmR885UQmz3DJCAXCWc1CdB2rV9fKhNOk55JLfxVzgJ7ANx7J6MgK0vvGU4NnLKRdxY93J0oeOBzrkSa_Fe4RvkYISfsXL-1pD-wwDeAIo7xF_Q4XiHwQvtRHhk6s6kqx6-dEic73Va43H6RylzfPfmDX-6s_6iA9fjcySQ2E19y-jo"/>
<span class="font-medium text-primary hover:underline cursor-pointer">Robert Brown</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ID-441029</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">+1 (555) 023-4561</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                        Blacklisted
                                    </span>
</td>
<td class="px-6 py-4 text-sm text-right font-bold text-red-600">$12,450.50</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="size-8 rounded-full" data-alt="Portrait of Emily Davis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2kVCyDXrOGUlTxiJwKB__xV1O43W-ep5yEUuUl1InnLom_0EFb7Jefr2wUktXR33qwG4F3xtzxdLpYV9qsN2ZUsYVJKDdUSb2Ztm6da9jNOuoFtAThJwJ0zqi7yuxC5Gwyl4kgaJSUnqwojitXg1-cdRjNmoFpiJtTqP35AyDLRzzmb79gxtxCrB2jWNZRPpDGH4F8FTLV068PSTHwl-5IAJnTEhwriz6O_kJJYre1Z2BeFXK1hHu-4yhiQlh1F1H3ujr6DYBN9E"/>
<span class="font-medium text-primary hover:underline cursor-pointer">Emily Davis</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ID-229315</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">+1 (555) 045-6782</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                        Pending
                                    </span>
</td>
<td class="px-6 py-4 text-sm text-right font-medium text-slate-900 dark:text-slate-100">$0.00</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img class="size-8 rounded-full" data-alt="Portrait of Michael Wilson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0KeoF0F1jtIIH7tGcsUapAa_3mvATF9JmMgj-BhyfujXOLdPCdVtO7wEZx29PsdzxY3Yz-y5cifwWo4YVYGUudlAPQm02qnK0ORxYiT351W5N1F-fduJr94bzoDZuaHiyLbRv5iLnWLX32p2NPjaesmr8E0vBB5-m57nIOcUfbCNl-39Aa0Qvj9sI9eA6MrIyfsrhY5MTbvK_Ck-y4NDnzZCbnsypcAR-H5PfIa1ujKlKiLdbpfGXDUbGqdpxyLHCjC2vKjFGEAI"/>
<span class="font-medium text-primary hover:underline cursor-pointer">Michael Wilson</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ID-110293</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">+1 (555) 078-9012</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
</td>
<td class="px-6 py-4 text-sm text-right font-medium text-slate-900 dark:text-slate-100">$890.00</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer -->
<div class="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<p class="text-sm text-slate-500">
                        Showing <span class="font-semibold text-slate-900 dark:text-slate-100">1</span> to <span class="font-semibold text-slate-900 dark:text-slate-100">10</span> of <span class="font-semibold text-slate-900 dark:text-slate-100">1,284</span> results
                    </p>
<div class="flex items-center gap-1">
<button class="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg text-sm disabled:opacity-50" disabled="">
                            Previous
                        </button>
<button class="size-8 bg-primary text-white rounded-lg text-sm font-semibold">1</button>
<button class="size-8 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm">2</button>
<button class="size-8 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm">3</button>
<span class="px-2 text-slate-400">...</span>
<button class="size-8 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm">129</button>
<button class="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg text-sm">
                            Next
                        </button>
</div>
</div>
</div>
</div>
</main>
</body></html>