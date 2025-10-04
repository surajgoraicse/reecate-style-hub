// Dummy data for admin dashboard

export interface DashboardMetrics {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  revenue: number;
  menSales: number;
  kidsSales: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  email: string;
  date: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: Array<{
    productName: string;
    quantity: number;
    price: number;
  }>;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  joinedDate: string;
  status: "active" | "inactive";
}

export interface InventoryItem {
  id: string;
  productName: string;
  category: string;
  stock: number;
  lowStockThreshold: number;
  price: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

export const dashboardMetrics: DashboardMetrics = {
  totalSales: 1247,
  totalOrders: 856,
  totalCustomers: 432,
  revenue: 124750,
  menSales: 74850,
  kidsSales: 49900,
};

export const recentOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2025-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2025-10-03",
    total: 149.99,
    status: "processing",
    items: [
      { productName: "Premium Cotton Tee", quantity: 2, price: 49.99 },
      { productName: "Kids Playwear Set", quantity: 1, price: 50.01 },
    ],
  },
  {
    id: "2",
    orderNumber: "ORD-2025-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2025-10-02",
    total: 89.99,
    status: "shipped",
    items: [{ productName: "Casual Button Down", quantity: 1, price: 89.99 }],
  },
  {
    id: "3",
    orderNumber: "ORD-2025-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "2025-10-02",
    total: 199.99,
    status: "delivered",
    items: [{ productName: "Premium Chinos", quantity: 2, price: 99.99 }],
  },
];

export const customers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    totalOrders: 12,
    totalSpent: 1299.99,
    joinedDate: "2025-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    totalOrders: 8,
    totalSpent: 899.99,
    joinedDate: "2025-02-20",
    status: "active",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    totalOrders: 15,
    totalSpent: 1799.99,
    joinedDate: "2024-12-10",
    status: "active",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    totalOrders: 3,
    totalSpent: 299.99,
    joinedDate: "2025-03-05",
    status: "inactive",
  },
];

export const inventoryItems: InventoryItem[] = [
  {
    id: "1",
    productName: "Premium Cotton Tee",
    category: "Men",
    stock: 45,
    lowStockThreshold: 20,
    price: 49.99,
    status: "in-stock",
  },
  {
    id: "2",
    productName: "Casual Button Down",
    category: "Men",
    stock: 12,
    lowStockThreshold: 15,
    price: 89.99,
    status: "low-stock",
  },
  {
    id: "3",
    productName: "Premium Chinos",
    category: "Men",
    stock: 0,
    lowStockThreshold: 10,
    price: 99.99,
    status: "out-of-stock",
  },
  {
    id: "4",
    productName: "Kids Playwear Set",
    category: "Kids",
    stock: 67,
    lowStockThreshold: 25,
    price: 50.01,
    status: "in-stock",
  },
  {
    id: "5",
    productName: "Kids Casual Tee",
    category: "Kids",
    stock: 18,
    lowStockThreshold: 20,
    price: 29.99,
    status: "low-stock",
  },
];

export const salesData = [
  { month: "Jan", revenue: 12400 },
  { month: "Feb", revenue: 15600 },
  { month: "Mar", revenue: 18200 },
  { month: "Apr", revenue: 14800 },
  { month: "May", revenue: 19500 },
  { month: "Jun", revenue: 22100 },
  { month: "Jul", revenue: 20800 },
  { month: "Aug", revenue: 24200 },
  { month: "Sep", revenue: 21500 },
];
