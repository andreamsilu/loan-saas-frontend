<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tenant Settings and Branding - LoanSaaS</title>
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
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .sidebar-active { background-color: rgba(19, 127, 236, 0.1); color: #137fec; }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- Top Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 text-primary">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">account_balance</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">LoanSaaS Admin</h2>
</div>
<label class="flex flex-col min-w-40 h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
<div class="text-slate-500 flex items-center justify-center pl-4">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 placeholder:text-slate-500 px-4 text-base font-normal" placeholder="Search settings..."/>
</div>
</label>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Loans</a>
<a class="text-primary text-sm font-bold border-b-2 border-primary py-4" href="#">Settings</a>
</nav>
<div class="flex gap-2">
<button class="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined text-[20px]">help</span>
</button>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeXlWQev3WquT4xB1qJ4wA6O5o5dJfgVTQDEdzYbjrXwlxfE5Zfd6zecOu3XNZ1Xd47gTzpqC1yUTd44rjWF7s-Uc7jLmhcHzi8L8R1AA1hzFGCbxANxl_qThqQjXv1jJrQuIuMNjaoNsd6Tql4F_Cu3YWeuBfuF--IkTDYSGJQOxyYnozBT6j8dBDpAztwvrZjrIxYc6GM-SdpX8geNxgYT9LUCBt8AveTuj-A5xVi78foCQBPGTNFSaP4KHouns4l3kIMf8yzc8");'></div>
</div>
</header>
<div class="flex flex-1">
<!-- Left Sidebar -->
<aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col gap-2">
<div class="mb-4">
<h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider px-3">Configurations</h3>
</div>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">General</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg sidebar-active transition-all" href="#">
<span class="material-symbols-outlined">palette</span>
<span class="text-sm font-bold">Branding</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span class="material-symbols-outlined">mail</span>
<span class="text-sm font-medium">Notifications</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span class="material-symbols-outlined">key</span>
<span class="text-sm font-medium">API Keys</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">User Access</span>
</a>
<div class="mt-8 mb-4 border-t border-slate-100 dark:border-slate-800 pt-8">
<h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider px-3">Support</h3>
</div>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span class="material-symbols-outlined">contact_support</span>
<span class="text-sm font-medium">Contact Info</span>
</a>
</aside>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-10">
<div class="max-w-[960px] mx-auto">
<div class="mb-8">
<h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Tenant Branding &amp; Settings</h1>
<p class="text-slate-600 dark:text-slate-400 mt-2">Manage your platform's visual identity, contact details, and global notification systems.</p>
</div>
<!-- Visual Identity Section -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
<h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">brush</span>
                                Logo &amp; Visual Identity
                            </h2>
</div>
<div class="p-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white mb-4">Main Platform Logo</p>
<div class="flex items-start gap-6">
<div class="size-32 rounded-lg bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-contain" data-alt="Company main logo preview" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt3J9HZpCxgzJl6pKg_pImUmOgTHnCOwLnc1snG1khNEo1WgqD50UIneSGugoEeQPv_RLadeCMnWxZ_cQ24PfywwAwn4i11lyBauXzuEa8_ow2pkkLu82PcjNm1vX_noPeH7BiHa4ot7yjX8l1w65s_8igTddLLmAS0AIUkyJ7VO2TyKfG4MqJ4pXq2GEvpPNJWsCWyTS7JpolOXy4po7fZr69a5RVP4YP0rblrOU32Bq-fur2Ch-k9xpWK-FzGHhHvHDKyXmbaMo");'></div>
</div>
<div class="flex-1">
<p class="text-xs text-slate-500 mb-3">Recommended size: 512x512px. SVG or PNG preferred. Max size 2MB.</p>
<div class="flex gap-2">
<button class="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all">Upload New</button>
<button class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition-all">Remove</button>
</div>
</div>
</div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white mb-4">Primary Brand Color</p>
<div class="flex items-center gap-4">
<div class="size-14 rounded-lg bg-primary shadow-lg border-2 border-white dark:border-slate-700"></div>
<div class="flex-1">
<label class="block text-xs font-medium text-slate-500 mb-1">Hex Code</label>
<div class="flex items-center gap-2">
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 font-mono" type="text" value="#137fec"/>
<button class="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]">colorize</span>
</button>
</div>
</div>
</div>
<p class="text-xs text-slate-500 mt-4 italic">This color will be used for buttons, links, and active states across the tenant dashboard.</p>
</div>
</div>
</div>
</section>
<!-- Support Contact Info -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
<h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">support_agent</span>
                                Support Contact Information
                            </h2>
</div>
<div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-1">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Support Email</label>
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="support@yourcompany.com" type="email"/>
</div>
<div class="space-y-1">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Support Phone</label>
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div class="md:col-span-2 space-y-1">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Help Center / FAQ URL</label>
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-2.5" placeholder="https://help.yourcompany.com" type="url"/>
</div>
</div>
</section>
<!-- Notification Credentials -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-20">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
<h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">notifications_active</span>
                                Notification Settings (SMS/Email)
                            </h2>
<span class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">System Ready</span>
</div>
<div class="p-8 space-y-8">
<!-- Email Credentials -->
<div>
<h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400">alternate_email</span>
                                    SMTP Email Configuration
                                </h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="space-y-1">
<label class="text-xs font-semibold text-slate-500">SMTP Server</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" type="text" value="smtp.sendgrid.net"/>
</div>
<div class="space-y-1">
<label class="text-xs font-semibold text-slate-500">Port</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" type="text" value="587"/>
</div>
<div class="space-y-1">
<label class="text-xs font-semibold text-slate-500">Security</label>
<select class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
<option>TLS</option>
<option>SSL</option>
<option>None</option>
</select>
</div>
</div>
<div class="mt-4 flex items-end gap-4">
<div class="flex-1 space-y-1">
<label class="text-xs font-semibold text-slate-500">API Key / Password</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" type="password" value="••••••••••••••••"/>
</div>
<button class="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-4 py-2 rounded-lg text-xs font-bold h-[38px] transition-all">Test Connection</button>
</div>
</div>
<hr class="border-slate-100 dark:border-slate-800"/>
<!-- SMS Credentials -->
<div>
<h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400">sms</span>
                                    SMS Gateway (Twilio/Vonage)
                                </h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="space-y-1">
<label class="text-xs font-semibold text-slate-500">Account SID</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="ACxxxxxxxxxxxxxxxx" type="text"/>
</div>
<div class="space-y-1">
<label class="text-xs font-semibold text-slate-500">Auth Token</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="••••••••••••••••" type="password"/>
</div>
</div>
<div class="mt-4 flex items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">info</span>
<p class="text-xs text-slate-600 dark:text-slate-400">SMS rates may vary based on your gateway provider's plan.</p>
</div>
<button class="text-primary text-xs font-bold hover:underline">View pricing info</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
<!-- Sticky Footer Save Bar -->
<div class="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-10 py-4 z-50 flex justify-end gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<button class="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Discard Changes</button>
<button class="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">save</span>
                Save All Settings
            </button>
</div>
</div>
</div>
</body></html>    