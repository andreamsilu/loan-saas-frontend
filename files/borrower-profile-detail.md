<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Borrower Profile Detail - LoanSaaS Pro</title>
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
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
<div class="relative flex min-h-screen w-full flex-col">
<!-- Top Navigation Bar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 md:px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-3xl">account_balance</span>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">LoanSaaS Pro</h2>
</div>
<div class="hidden lg:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Loans</a>
<a class="text-primary text-sm font-semibold border-b-2 border-primary pb-1" href="#">Borrowers</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Reports</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Settings</a>
</div>
</div>
<div class="flex items-center gap-4">
<div class="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary transition-all">
<span class="material-symbols-outlined text-slate-400 text-xl">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-48 text-slate-900 dark:text-white placeholder:text-slate-500" placeholder="Search borrowers..." type="text"/>
</div>
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
<img alt="User Profile" class="h-full w-full object-cover" data-alt="Corporate professional headshot for user profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL1rMLSn29lYaTTxsHps77oiCBykY9fVZhgh_fYKsa8ELvZN9HMDUgyvwcBxsOzNDt1wXpDZajZCzpARtTFxyGvz_5e2-knfPvcOr5qCGRf1D-oie-5NVl3QjUVllMZdQtfUidrTYj26sYrbmulZPH9rbAHOWhthJaO0V771lS74AHojRLYTA7uhSDrxxYyEwuTPlffDAix79CXzvj4v0lA0MCorsckWpbob7c-KyJFT-pt3E0eHzXQ74_basIiqTc-yHA0ko_uus"/>
</div>
</div>
</header>
<main class="flex-1 flex justify-center">
<div class="w-full max-w-7xl px-4 md:px-10 py-8 space-y-6">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 text-sm text-slate-500 mb-2">
<a class="hover:text-primary" href="#">All Borrowers</a>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="text-slate-900 dark:text-slate-300 font-medium tracking-tight">Borrower Profile - ID #88291</span>
</nav>
<!-- Profile Header Card -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex items-center gap-6">
<div class="relative">
<div class="size-24 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-md overflow-hidden">
<img alt="Johnathan Doe Profile" class="h-full w-full object-cover" data-alt="Professional portrait of a male borrower profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeuCc_T4UcqYyuEsO2JE66NbJJyFaAR-hWVwJGlCAOJJEOf5JTOnzliseRwAYSm_R6G_W7TVP7ZqKQ01oKBol4flodo7irN1jk3ZnE2u-maCcCSbgsYT6DPMbuNUpjwJgX3HKfx7z0D_it05pgpOlKEUz_LpCPfJXcI2pDXW30xUygwMwQiv9KXGpN8fIhyue2iSH9YQCHd69cy2zhNZMHwkWbb-0D7MwSQOBB9EtTVAUMH4uxhOqqJwCJ4mokyc4XOx-UM1A9r5s"/>
</div>
<span class="absolute bottom-1 right-1 size-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-3">
<h1 class="text-2xl font-bold text-slate-900 dark:text-white">Johnathan Doe</h1>
<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ACTIVE</span>
</div>
<p class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">badge</span> Individual Borrower • ID: BR-99281
                                </p>
<p class="text-slate-500 dark:text-slate-400 text-sm">Member since Oct 2022 • Main Branch (Downtown)</p>
</div>
</div>
<div class="flex items-center gap-3 flex-wrap">
<button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-lg">edit</span>
                                Edit Profile
                            </button>
<button class="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined text-lg">mail</span>
                                Message
                            </button>
<button class="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors dark:bg-red-900/20 dark:border-red-900/30 dark:text-red-400">
<span class="material-symbols-outlined text-lg">block</span>
                                Blacklist
                            </button>
</div>
</div>
<!-- Profile Tabs -->
<div class="flex border-b border-slate-200 dark:border-slate-800 mt-8 gap-8 overflow-x-auto">
<button class="flex items-center gap-2 border-b-2 border-primary text-primary pb-3 px-1 text-sm font-bold tracking-tight">
<span class="material-symbols-outlined text-lg">grid_view</span> Overview
                        </button>
<button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 px-1 text-sm font-medium tracking-tight transition-colors">
<span class="material-symbols-outlined text-lg">payments</span> Loans
                        </button>
<button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 px-1 text-sm font-medium tracking-tight transition-colors">
<span class="material-symbols-outlined text-lg">history</span> Payments
                        </button>
<button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 px-1 text-sm font-medium tracking-tight transition-colors">
<span class="material-symbols-outlined text-lg">description</span> Notes
                        </button>
<button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 px-1 text-sm font-medium tracking-tight transition-colors">
<span class="material-symbols-outlined text-lg">attachment</span> Documents
                        </button>
</div>
</div>
<!-- Overview Tab Content -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Main Content Area (2 cols) -->
<div class="lg:col-span-2 space-y-6">
<!-- Financial KPIs -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Borrowed</p>
<div class="flex items-baseline gap-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">$45,200</h3>
<span class="text-green-500 text-xs font-medium">+12%</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Remaining Balance</p>
<div class="flex items-baseline gap-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">$12,450</h3>
<span class="text-red-500 text-xs font-medium">1 overdue</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Next Payment</p>
<div class="flex items-baseline gap-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Nov 15</h3>
<span class="text-slate-400 text-xs font-medium">6 days</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Credit Score</p>
<div class="flex items-baseline gap-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">742</h3>
<span class="text-primary text-xs font-medium">Good</span>
</div>
</div>
</div>
<!-- Payment History Visual Area -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
<div class="flex items-center justify-between mb-6">
<h4 class="text-lg font-bold text-slate-900 dark:text-white">Payment Performance</h4>
<select class="text-xs font-semibold border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
<option>Last 12 Months</option>
<option>Year to Date</option>
</select>
</div>
<div class="h-64 w-full flex items-end gap-2 px-2">
<!-- Mockup Chart Bars -->
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[40%] rounded-t-sm relative group">
<div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Jan: $1.2k</div>
</div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[60%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[55%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[80%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[70%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-sm"></div>
<div class="flex-1 bg-primary h-[95%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[65%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[40%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[50%] rounded-t-sm"></div>
<div class="flex-1 bg-slate-200 dark:bg-slate-700 h-[10%] rounded-t-sm"></div>
</div>
<div class="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
</div>
<!-- Personal Information Grid -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h4 class="font-bold text-slate-900 dark:text-white">Borrower Details</h4>
<button class="text-primary text-sm font-medium hover:underline">Show Sensitive Data</button>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div class="space-y-1">
<p class="text-xs text-slate-500 font-medium">Email Address</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">j.doe@example.com</p>
</div>
<div class="space-y-1">
<p class="text-xs text-slate-500 font-medium">Phone Number</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">+1 (555) 012-3456</p>
</div>
<div class="space-y-1">
<p class="text-xs text-slate-500 font-medium">Social Security Number</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">XXX-XX-9921</p>
</div>
<div class="space-y-1">
<p class="text-xs text-slate-500 font-medium">Current Address</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">123 Business Way, Austin, TX 78701</p>
</div>
<div class="space-y-1 border-t border-slate-100 dark:border-slate-800 pt-4">
<p class="text-xs text-slate-500 font-medium">Employer</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">TechSolutions Inc.</p>
</div>
<div class="space-y-1 border-t border-slate-100 dark:border-slate-800 pt-4">
<p class="text-xs text-slate-500 font-medium">Monthly Income (Gross)</p>
<p class="text-sm font-semibold text-slate-900 dark:text-slate-200">$8,500.00</p>
</div>
</div>
</div>
</div>
<!-- Sidebar Content Area (1 col) -->
<div class="space-y-6">
<!-- Identity Verification -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
<h4 class="font-bold text-slate-900 dark:text-white mb-4">Verification Status</h4>
<div class="space-y-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-green-500">check_circle</span>
<div>
<p class="text-sm font-semibold">Identity Verified</p>
<p class="text-xs text-slate-500">Validated via Persona (ID-992)</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-green-500">check_circle</span>
<div>
<p class="text-sm font-semibold">Employment Verified</p>
<p class="text-xs text-slate-500">Confirmed via Plaid (Oct 2023)</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-300">radio_button_unchecked</span>
<div>
<p class="text-sm font-semibold text-slate-400">Home Appraisal</p>
<p class="text-xs text-slate-500">Required for Home Equity Loan</p>
</div>
</div>
</div>
<button class="w-full mt-6 py-2 px-4 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                                RE-RUN ALL VERIFICATIONS
                            </button>
</div>
<!-- Recent Activity -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
<h4 class="font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h4>
<div class="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
<div class="relative pl-8">
<div class="absolute left-0 top-1 size-[24px] rounded-full bg-white dark:bg-slate-900 border-2 border-primary flex items-center justify-center">
<div class="size-2 bg-primary rounded-full"></div>
</div>
<p class="text-sm font-semibold">Payment Received</p>
<p class="text-xs text-slate-500 mb-1">$1,200.00 processed for Loan #44921</p>
<span class="text-[10px] text-slate-400 font-medium">Today at 10:45 AM</span>
</div>
<div class="relative pl-8">
<div class="absolute left-0 top-1 size-[24px] rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
<div class="size-2 bg-slate-300 rounded-full"></div>
</div>
<p class="text-sm font-semibold">Address Updated</p>
<p class="text-xs text-slate-500 mb-1">Borrower updated mailing address via Portal</p>
<span class="text-[10px] text-slate-400 font-medium">Nov 02, 2023</span>
</div>
<div class="relative pl-8">
<div class="absolute left-0 top-1 size-[24px] rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
<div class="size-2 bg-slate-300 rounded-full"></div>
</div>
<p class="text-sm font-semibold">New Loan Application</p>
<p class="text-xs text-slate-500 mb-1">Applied for Personal Loan ($10,000)</p>
<span class="text-[10px] text-slate-400 font-medium">Oct 28, 2023</span>
</div>
</div>
<button class="w-full mt-6 text-slate-500 text-xs font-semibold flex items-center justify-center gap-1 hover:text-primary transition-colors">
                                View Full Audit Log
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<!-- Loan Officer Notes Preview -->
<div class="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-5">
<h4 class="font-bold text-slate-900 dark:text-white mb-3">Quick Note</h4>
<div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/10 text-sm text-slate-600 dark:text-slate-300 italic mb-4 shadow-sm">
                                "Borrower is looking to consolidate high-interest credit card debt. Very responsive during the initial screening."
                                <p class="text-[10px] mt-2 font-bold text-primary not-italic">— Sarah Mitchell, Senior Officer</p>
</div>
<button class="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-lg shadow-primary/20">
                                ADD NEW NOTE
                            </button>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center">
<p class="text-slate-500 text-sm">© 2023 LoanSaaS Pro Platform. All Rights Reserved. Confidential B2B Environment.</p>
</footer>
</div>
</body></html>