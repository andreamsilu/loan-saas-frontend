"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";

type PermissionDefinition = {
  id: string;
  label: string;
  description: string;
};

type RoleDefinition = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
};

const AVAILABLE_PERMISSIONS: PermissionDefinition[] = [
  {
    id: "manage_loans",
    label: "Manage loans",
    description: "Create, approve, and modify loans for assigned portfolios or branches.",
  },
  {
    id: "view_reports",
    label: "View reports",
    description: "Access portfolio performance, risk dashboards, and branch summaries.",
  },
  {
    id: "manage_staff",
    label: "Manage staff",
    description: "Add staff, assign roles, and manage account status.",
  },
  {
    id: "configure_settings",
    label: "Configure settings",
    description: "Change tenant-level configuration, billing, and integration settings.",
  },
];

const INITIAL_ROLES: RoleDefinition[] = [
  {
    id: "tenant_admin",
    name: "Tenant Admin",
    description: "Full access to loans, borrowers, reports, configuration and staff management.",
    permissions: ["manage_loans", "view_reports", "manage_staff", "configure_settings"],
  },
  {
    id: "branch_manager",
    name: "Branch Manager",
    description:
      "Manages loans, collections, and staff activity for specific branches without tenant-wide configuration access.",
    permissions: ["manage_loans", "view_reports", "manage_staff"],
  },
  {
    id: "loan_officer",
    name: "Loan Officer",
    description: "Create and manage loans and borrowers; limited access to configuration.",
    permissions: ["manage_loans"],
  },
  {
    id: "viewer",
    name: "Viewer",
    description: "Read-only access to portfolios and reports without editing rights.",
    permissions: ["view_reports"],
  },
];

export default function StaffRolesAndPermissionsPage() {
  const [roles, setRoles] = useState<RoleDefinition[]>(INITIAL_ROLES);
  const [selectedRoleId, setSelectedRoleId] = useState<string>(INITIAL_ROLES[0]?.id ?? "");
  const [newRoleName, setNewRoleName] = useState("");
  const [newRoleDescription, setNewRoleDescription] = useState("");

  const selectedRole = useMemo(
    () => roles.find((role) => role.id === selectedRoleId) ?? roles[0],
    [roles, selectedRoleId],
  );

  const handleAddRole = () => {
    const trimmedName = newRoleName.trim();
    if (!trimmedName) {
      return;
    }
    const id = `custom_${Date.now().toString(36)}`;
    const description =
      newRoleDescription.trim() ||
      "Custom role created in this demo. In a real system, this would be stored and enforced on the backend.";
    const nextRole: RoleDefinition = {
      id,
      name: trimmedName,
      description,
      permissions: [],
    };
    setRoles((prev) => [...prev, nextRole]);
    setSelectedRoleId(id);
    setNewRoleName("");
    setNewRoleDescription("");
  };

  const handleTogglePermission = (permissionId: string) => {
    if (!selectedRole) {
      return;
    }
    setRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role.id !== selectedRole.id) {
          return role;
        }
        const hasPermission = role.permissions.includes(permissionId);
        return {
          ...role,
          permissions: hasPermission
            ? role.permissions.filter((id) => id !== permissionId)
            : [...role.permissions, permissionId],
        };
      }),
    );
  };

  return (
    <AppShell
      activePath="/staff/roles"
      brandTitle="LoanSaaS Pro"
      brandSubtitle="Tenant Admin Panel"
      userName="Apex Capital"
      userEmail="Tenant Admin"
      role="tenant"
    >
      <main className="flex min-w-0 flex-1 flex-col bg-background-light dark:bg-background-dark">
        <div className="border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Roles &amp; Permissions
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Define reusable roles and control what different staff members can see and do in the
            platform.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Roles
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Create reusable roles and choose which permissions they have. Changes are stored in this
                demo only, but mirror how a real system would behave.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1.15fr,0.85fr]">
                <div className="space-y-4">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                    Select a role to edit its permissions. In a full platform, these roles would be
                    enforced when staff sign in.
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {roles.map((role) => {
                      const isActive = selectedRole?.id === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setSelectedRoleId(role.id)}
                          className={
                            isActive
                              ? "flex flex-col items-start rounded-lg border border-primary bg-primary/5 px-4 py-3 text-left text-xs shadow-sm"
                              : "flex flex-col items-start rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-xs hover:border-primary/50 hover:bg-primary/5 dark:border-slate-700 dark:bg-slate-900"
                          }
                        >
                          <span
                            className={
                              isActive
                                ? "text-[11px] font-semibold uppercase tracking-wide text-primary"
                                : "text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                            }
                          >
                            {role.name}
                          </span>
                          <span className="mt-1 line-clamp-3 text-[11px] text-slate-600 dark:text-slate-300">
                            {role.description}
                          </span>
                          <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {role.permissions.length} permissions
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-xs dark:border-slate-700 dark:bg-slate-900/40">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Create new role
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Add a custom role for a specific team, branch, or function.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Role name
                      </label>
                      <input
                        type="text"
                        value={newRoleName}
                        onChange={(event) => setNewRoleName(event.target.value)}
                        placeholder="e.g. Collections Supervisor"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={newRoleDescription}
                        onChange={(event) => setNewRoleDescription(event.target.value)}
                        placeholder="Short summary of what this role can do."
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleAddRole}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-primary/30 hover:bg-primary/90"
                    >
                      Add role
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Permissions for selected role
              </h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Turn permissions on or off for{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  {selectedRole?.name ?? "the selected role"}
                </span>
                . In a full system, these would control what staff can see and do after they sign in.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {AVAILABLE_PERMISSIONS.map((permission) => {
                  const enabled = selectedRole?.permissions.includes(permission.id);
                  return (
                    <button
                      key={permission.id}
                      type="button"
                      onClick={() => handleTogglePermission(permission.id)}
                      className={
                        enabled
                          ? "flex items-center justify-between rounded-lg border border-primary bg-primary/5 px-4 py-3 text-xs"
                          : "flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs hover:border-primary/40 hover:bg-primary/5 dark:border-slate-700 dark:bg-slate-800/60"
                      }
                    >
                      <div className="pr-4">
                        <p className="font-semibold text-slate-800 dark:text-slate-100">
                          {permission.label}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {permission.description}
                        </p>
                      </div>
                      <div
                        className={
                          enabled
                            ? "relative h-4 w-8 rounded-full bg-primary"
                            : "relative h-4 w-8 rounded-full bg-slate-300 dark:bg-slate-600"
                        }
                      >
                        <div
                          className={
                            enabled
                              ? "absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white"
                              : "absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white"
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
