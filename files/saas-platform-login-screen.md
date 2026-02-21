<!DOCTYPE html>

<html class="h-full" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sign In | Loan SaaS Platform</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
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
}</head>
<body class="bg-background-light h-full font-display">
<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
<!-- Top Branding / Logo Area -->
<div class="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-3xl" data-icon="account_balance">account_balance</span>
</div>
<h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
            Loan SaaS Platform
        </h2>
<p class="mt-2 text-center text-sm text-slate-600">
            Unified lending management for modern enterprises
        </p>
</div>
<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-[440px]">
<div class="bg-white px-8 py-10 shadow-xl shadow-slate-200/50 border border-slate-200 sm:rounded-xl">
<div class="mb-8">
<h3 class="text-xl font-semibold text-slate-900">Welcome back</h3>
<p class="text-sm text-slate-500 mt-1">Enter your credentials to access your dashboard.</p>
</div>
<form action="#" class="space-y-6" method="POST">
<!-- Email/Phone Input -->
<div>
<label class="block text-sm font-medium leading-6 text-slate-900" for="email">
                        Email or Phone Number
                    </label>
<div class="mt-2 relative">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
<input autocomplete="email" class="block w-full rounded-lg border-0 py-3 pl-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-transparent" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<!-- Password Input -->
<div>
<div class="flex items-center justify-between">
<label class="block text-sm font-medium leading-6 text-slate-900" for="password">
                            Password
                        </label>
</div>
<div class="mt-2 relative">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span class="material-symbols-outlined text-[20px]">lock</span>
</div>
<input autocomplete="current-password" class="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-transparent" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<div class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600">
<span class="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</div>
</div>
</div>
<!-- Remember & Forgot Password -->
<div class="flex items-center justify-between">
<div class="flex items-center">
<input class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" id="remember-me" name="remember-me" type="checkbox"/>
<label class="ml-3 block text-sm leading-6 text-slate-700" for="remember-me">
                            Remember this device
                        </label>
</div>
<div class="text-sm leading-6">
<a class="font-medium text-primary hover:text-primary/80" href="#">
                            Forgot password?
                        </a>
</div>
</div>
<!-- Primary Submit Button -->
<div>
<button class="flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors" type="submit">
                        Sign In
                    </button>
</div>
</form>
<!-- Secondary Action / Subdomain Switcher -->
<div class="mt-10">
<div class="relative">
<div aria-hidden="true" class="absolute inset-0 flex items-center">
<div class="w-full border-t border-slate-200"></div>
</div>
<div class="relative flex justify-center text-sm font-medium leading-6 uppercase tracking-wider">
<span class="bg-white px-4 text-slate-400">Organization</span>
</div>
</div>
<div class="mt-6 flex justify-center">
<button class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors" type="button">
<span class="material-symbols-outlined text-[18px]">domain</span>
                        Switch Tenant Subdomain
                    </button>
</div>
</div>
</div>
<!-- Footer Help -->
<p class="mt-8 text-center text-xs text-slate-500">
            Need help? Contact your administrator or 
            <a class="font-semibold text-slate-600 hover:underline" href="#">Platform Support</a>
</p>
</div>
</div>
<!-- Background Decorative Element (Subtle Gradient) -->
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
<div class="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl"></div>
</div>
</body></html>
