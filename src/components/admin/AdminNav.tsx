"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import {
  LayoutDashboard,
  Package,
  Newspaper,
  LogOut,
} from "lucide-react";
import { useRouter } from "@/i18n/routing";

export default function AdminNav() {
  const t = useTranslations("Admin");
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const navItems = [
    {
      href: "/admin",
      label: t("dashboard"),
      icon: LayoutDashboard,
      exact: true,
    },
    {
      href: "/admin/products",
      label: t("products"),
      icon: Package,
      exact: false,
    },
    {
      href: "/admin/news",
      label: t("news"),
      icon: Newspaper,
      exact: false,
    },
  ];

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#b84a14]">Admin Panel</h1>
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#b84a14] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full mt-8"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">{t("logout")}</span>
      </button>
    </nav>
  );
}
