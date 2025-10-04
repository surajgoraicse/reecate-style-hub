import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardMetrics, recentOrders } from "@/data/adminData";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: `$${dashboardMetrics.revenue.toLocaleString()}`,
      icon: DollarSign,
      description: "Men's: $" + dashboardMetrics.menSales.toLocaleString() + " | Kids': $" + dashboardMetrics.kidsSales.toLocaleString(),
    },
    {
      title: "Total Orders",
      value: dashboardMetrics.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      description: "+12% from last month",
    },
    {
      title: "Total Customers",
      value: dashboardMetrics.totalCustomers.toLocaleString(),
      icon: Users,
      description: "+8% from last month",
    },
    {
      title: "Total Sales",
      value: dashboardMetrics.totalSales.toLocaleString(),
      icon: TrendingUp,
      description: "+15% from last month",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "shipped": return "bg-blue-500";
      case "processing": return "bg-yellow-500";
      case "pending": return "bg-orange-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-display font-bold">Dashboard Overview</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="font-semibold">{order.orderNumber}</p>
                  <p className="text-sm text-muted-foreground">{order.customer} - {order.email}</p>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-bold">${order.total.toFixed(2)}</p>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
