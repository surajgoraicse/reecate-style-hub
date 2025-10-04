import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { salesData, dashboardMetrics } from "@/data/adminData";
import { BarChart3, TrendingUp, DollarSign } from "lucide-react";

const Analytics = () => {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenue = totalRevenue / salesData.length;
  const maxRevenue = Math.max(...salesData.map((item) => item.revenue));

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-display font-bold">Analytics & Reports</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue (9 months)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average: ${avgRevenue.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${maxRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {salesData.find((item) => item.revenue === maxRevenue)?.month}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Distribution</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Men's</span>
                <span className="font-semibold">
                  {((dashboardMetrics.menSales / dashboardMetrics.revenue) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Kids'</span>
                <span className="font-semibold">
                  {((dashboardMetrics.kidsSales / dashboardMetrics.revenue) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesData.map((item) => {
              const percentage = (item.revenue / maxRevenue) * 100;
              return (
                <div key={item.month} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.month}</span>
                    <span className="font-semibold">${item.revenue.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
