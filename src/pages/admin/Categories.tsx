import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const categories = [
  { id: "1", name: "Men", productCount: 12, occasions: ["Casual", "Everyday"] },
  { id: "2", name: "Kids", productCount: 8, occasions: ["Playwear", "Outing", "Everyday"] },
];

const occasions = [
  { id: "1", name: "Casual", category: "Men", productCount: 8 },
  { id: "2", name: "Everyday", category: "Both", productCount: 15 },
  { id: "3", name: "Playwear", category: "Kids", productCount: 5 },
  { id: "4", name: "Outing", category: "Both", productCount: 7 },
];

const Categories = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-display font-bold">Categories & Filters</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Categories</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Occasions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.productCount} products</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {category.occasions.map((occasion) => (
                        <Badge key={occasion} variant="secondary">
                          {occasion}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Occasion Filters</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Occasion
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Occasion</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {occasions.map((occasion) => (
                <TableRow key={occasion.id}>
                  <TableCell className="font-medium">{occasion.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{occasion.category}</Badge>
                  </TableCell>
                  <TableCell>{occasion.productCount} products</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default Categories;
