"use client";

import { icons } from "@/components/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationItem = {
  label: string;
  href: string;
  icon: any;
};

const masterNavigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: icons.dashboard,
  },
  {
    label: "Category",
    href: "/category",
    icon: icons.category,
  },
  {
    label: "Product",
    href: "/product",
    icon: icons.product,
  },
  {
    label: "Member",
    href: "/member",
    icon: icons.member,
  },
  {
    label: "Supplier",
    href: "/supplier",
    icon: icons.supplier,
  },
];

const transactionNavigationItems: NavigationItem[] = [
  {
    label: "Pengeluaran",
    href: "/pengeluaran",
    icon: icons.pengeluaran,
  },
  {
    label: "Pembelian",
    href: "/pembelian",
    icon: icons.pembelian,
  },
  {
    label: "Penjualan",
    href: "/penjualan",
    icon: icons.penjualan,
  },
  {
    label: "Transaksi Baru",
    href: "/transaksi_baru",
    icon: icons.transaksi_baru,
  },
];

const reportNavigationItems: NavigationItem[] = [
  {
    label: "Laporan",
    href: "/laporan",
    icon: icons.laporan,
  },
];

const settingNavigationItems: NavigationItem[] = [
  {
    label: "User",
    href: "/user",
    icon: icons.user,
  },
  {
    label: "Setting",
    href: "/setting",
    icon: icons.setting,
  },
];

interface NavItemCategories {
  label: string;
  navigationItems: NavigationItem[];
}

export const navItemCategories: NavItemCategories[] = [
  {
    label: "MASTER",
    navigationItems: masterNavigationItems,
  },
  {
    label: "TRANSACTION",
    navigationItems: transactionNavigationItems,
  },
  {
    label: "REPORT",
    navigationItems: reportNavigationItems,
  },
  {
    label: "SETTINGS",
    navigationItems: settingNavigationItems,
  },
];

export default function DashboardNav() {
  const path = usePathname();
  const active = (href: string) => path === href;

  return (
    <nav>
      {navItemCategories.map((category) => (
        <div key={category.label}>
          <h1 className="text-sm font-semibold text-gray-400 mb-2">
            {category.label}
          </h1>
          {category.navigationItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mb-3 px-3 py-2 rounded  ${
                  active(item.href)
                    ? "bg-[#16161a] text-white"
                    : "text-gray-500 hover:bg-[#ebeff2] hover:text-black"
                }`}
              >
                <span className="flex gap-3 items-center">
                  {item.icon}
                  <span className="text-base">{item.label}</span>
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
