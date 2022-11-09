import { BiCategory } from "react-icons/bi";
import {
  FaCog,
  FaDownload,
  FaExchangeAlt,
  FaFileAlt,
  FaUpload,
  FaUser,
} from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { GiExpense } from "react-icons/gi";
import { MdGridView, MdOutlineSpaceDashboard } from "react-icons/md";
// import react-icons type definition
import { IconType } from "react-icons/lib";

export type Icon = IconType;

export const icons = {
  dashboard: <MdOutlineSpaceDashboard />,
  category: <BiCategory />,
  product: <MdGridView />,
  supplier: <FiTruck />,
  pengeluaran: <GiExpense />,
  pembelian: <FaDownload />,
  penjualan: <FaUpload />,
  transaksi_lama: <FaExchangeAlt />,
  transaksi_baru: <FaExchangeAlt />,
  laporan: <FaFileAlt />,
  user: <FaUser />,
  setting: <FaCog />,
};
