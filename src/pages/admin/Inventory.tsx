import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { inventoryItems } from "@/data/adminData";
import { Search, AlertCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = inventoryItems.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockColor = (status: string) => {
    switch (status) {
      case "in-stock": return "bg-green-500";
      case "low-stock": return "bg-yellow-500";
      case "out-of-stock": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const lowStockCount = inventoryItems.filter((item) => item.status === "low-stock" || item.status === "out-of-stock").length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-display font-bold">Inventory Management</h2>
        {lowStockCount > 0 && (
          <Badge variant="destructive" className="gap-1">
            <AlertCircle className="h-3 w-3" />
            {lowStockCount} Low Stock Alerts
          </Badge>
        )}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Threshold</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.productName}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className={item.stock <= item.lowStockThreshold ? "text-destructive font-semibold" : ""}>
                      {item.stock} units
                    </span>
                  </TableCell>
                  <TableCell>{item.lowStockThreshold} units</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge className={getStockColor(item.status)}>
                      {item.status.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Restock
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
