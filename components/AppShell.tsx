"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type NavChildItem = {
  href: string;
  label: string;
  icon: string;
};

type NavItem = {
  href: string;
  label: string;
  icon: string;
  children?: NavChildItem[];
};

export type UserRole = "owner" | "tenant" | "borrower";

const TENANT_BRANCH_OPTIONS = [
  { id: "MAIN", name: "Main branch" },
  { id: "BR-001", name: "Downtown HQ" },
  { id: "BR-002", name: "Arusha Branch" },
  { id: "BR-003", name: "Mwanza Branch" },
];

const TENANT_SIDEBAR_ITEMS: NavItem[] = [
  { href: "/tenant", label: "Dashboard", icon: "dashboard" },
  { href: "/loans", label: "Loans", icon: "payments" },
  { href: "/borrowers", label: "Borrowers", icon: "group" },
  { href: "/branches", label: "Branches", icon: "storefront" },
  { href: "/loans/schedule", label: "Payments", icon: "schedule" },
  {
    href: "/staff",
    label: "Staff",
    icon: "group",
  },
  {
    href: "/staff/roles",
    label: "Roles & Security",
    icon: "admin_panel_settings",
    children: [
      { href: "/staff/roles", label: "Roles & Permissions", icon: "admin_panel_settings" },
      { href: "/staff/security", label: "Security", icon: "shield_lock" },
    ],
  },
  { href: "/staff/billing", label: "Subscription & Billing", icon: "credit_card" },
  { href: "/tenant/settings", label: "Settings", icon: "settings" },
  { href: "/developer", label: "Developer", icon: "monitoring" },
];

const OWNER_SIDEBAR_ITEMS: NavItem[] = [
  { href: "/owner", label: "Owner Dashboard", icon: "dashboard" },
  { href: "/owner/tenants", label: "Tenants", icon: "store" },
  { href: "/owner/billing", label: "Subscriptions & Billing", icon: "credit_score" },
  { href: "/owner/status", label: "System Status", icon: "health_and_safety" },
  { href: "/owner/settings", label: "Platform Settings", icon: "settings" },
];

const BORROWER_SIDEBAR_ITEMS: NavItem[] = [
  { href: "/borrowers/profile", label: "My Profile", icon: "account_circle" },
];

export const APP_SIDEBAR_ITEMS = TENANT_SIDEBAR_ITEMS;

type AppShellProps = {
  children: ReactNode;
  sidebarItems?: NavItem[];
  activePath: string;
  brandTitle: string;
  brandSubtitle: string;
  userName: string;
  userEmail: string;
  role: UserRole;
};

type SidebarProps = {
  items: NavItem[];
  activePath: string;
  brandTitle: string;
  brandSubtitle: string;
  userName: string;
  userEmail: string;
  onLogoutClick?: () => void;
};

function Sidebar({
  items,
  activePath,
  brandTitle,
  brandSubtitle,
  userName,
  userEmail,
  onLogoutClick,
}: SidebarProps) {
  const [openGroupHref, setOpenGroupHref] = useState<string | null>(() => {
    const groupWithActiveChild = items.find((item) =>
      item.children?.some((child) => child.href === activePath),
    );
    return groupWithActiveChild?.href ?? null;
  });

  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
          <span className="material-symbols-outlined" aria-hidden="true">
            account_balance
          </span>
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold tracking-tight">{brandTitle}</h1>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{brandSubtitle}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isChildActive = hasChildren
            ? item.children?.some((child) => child.href === activePath)
            : false;
          const isActive = item.href === activePath || Boolean(isChildActive);

          if (!hasChildren) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-white shadow-sm shadow-primary/30 transition-colors"
                    : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary dark:text-slate-400"
                }
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          }

          const isOpen = openGroupHref === item.href;

          return (
            <div key={item.href} className="space-y-1">
              <button
                type="button"
                onClick={() => setOpenGroupHref(isOpen ? null : item.href)}
                className={
                  isActive
                    ? "flex w-full items-center justify-between gap-3 rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-white shadow-sm shadow-primary/30 transition-colors"
                    : "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary dark:text-slate-400"
                }
              >
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {isOpen ? "expand_less" : "expand_more"}
                </span>
              </button>
              {isOpen && item.children && (
                <div className="space-y-1 pl-9">
                  {item.children.map((child) => {
                    const childActive = child.href === activePath;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={
                          childActive
                            ? "flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                            : "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-primary/5 hover:text-primary dark:text-slate-400"
                        }
                      >
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {child.icon}
                        </span>
                        <span>{child.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-800">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/80">
          <div className="size-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{userName}</p>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">{userEmail}</p>
          </div>
          <button
            type="button"
            onClick={onLogoutClick}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-700"
            aria-label="Sign out"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

function getSidebarItemsForRole(role: UserRole): NavItem[] {
  if (role === "owner") {
    return OWNER_SIDEBAR_ITEMS;
  }
  if (role === "borrower") {
    return BORROWER_SIDEBAR_ITEMS;
  }
  return TENANT_SIDEBAR_ITEMS;
}

export function AppShell({
  children,
  sidebarItems,
  activePath,
  brandTitle,
  brandSubtitle,
  userName,
  userEmail,
  role,
}: AppShellProps) {
  const router = useRouter();
  const items = sidebarItems ?? getSidebarItemsForRole(role);
  useEffect(() => {
    try {
      const storedRole = window.localStorage.getItem("loansaas_role");
      if (storedRole !== "owner" && storedRole !== "tenant" && storedRole !== "borrower") {
        router.push("/");
        return;
      }
      if (storedRole !== role) {
        const targetPath =
          storedRole === "owner"
            ? "/owner"
            : storedRole === "tenant"
              ? "/tenant"
              : "/borrowers/profile";
        router.push(targetPath);
      }
    } catch {}
  }, [router, role]);
  const handleLogout = () => {
    try {
      window.localStorage.removeItem("loansaas_role");
    } catch {}
    router.push("/");
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBranchId, setCurrentBranchId] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "MAIN";
    }
    try {
      const stored = window.localStorage.getItem("loansaas_branch_id");
      return stored || "MAIN";
    } catch {
      return "MAIN";
    }
  });
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem("loansaas_branch_id", currentBranchId);
    } catch {}
  }, [currentBranchId]);

  return (
    <div className="relative flex h-screen overflow-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="hidden lg:flex lg:w-72 lg:flex-col">
        <Sidebar
          items={items}
          activePath={activePath}
          brandTitle={brandTitle}
          brandSubtitle={brandSubtitle}
          userName={userName}
          userEmail={userEmail}
          onLogoutClick={handleLogout}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur lg:h-16 lg:px-6 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 shadow-sm shadow-slate-200/50 transition-colors hover:bg-slate-50 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:shadow-none"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                menu
              </span>
            </button>
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  account_balance
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">{brandTitle}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {brandSubtitle}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {role === "tenant" && (
              <div className="hidden items-center gap-2 md:flex">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Branch
                </span>
                <select
                  value={currentBranchId}
                  onChange={(event) => setCurrentBranchId(event.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {TENANT_BRANCH_OPTIONS.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                notifications
              </span>
            </button>
            <div className="hidden items-center gap-3 lg:flex">
              <div className="size-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium leading-tight">{userName}</p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{userEmail}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
          {children}
        </main>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <button
            type="button"
            className="h-full flex-1 bg-slate-950/40"
            aria-label="Close navigation"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative h-full w-[280px] shadow-2xl shadow-slate-900/40">
            <Sidebar
              items={items}
              activePath={activePath}
              brandTitle={brandTitle}
              brandSubtitle={brandSubtitle}
              userName={userName}
              userEmail={userEmail}
              onLogoutClick={() => {
                setIsSidebarOpen(false);
                handleLogout();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
