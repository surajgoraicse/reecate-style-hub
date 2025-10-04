import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h2 className="text-3xl font-display font-bold">Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>Site Configuration</CardTitle>
          <CardDescription>Manage your store's basic settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input id="site-name" defaultValue="Reecate" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-email">Contact Email</Label>
            <Input id="site-email" type="email" defaultValue="contact@reecate.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-phone">Contact Phone</Label>
            <Input id="site-phone" defaultValue="+1 (555) 123-4567" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Gateway</CardTitle>
          <CardDescription>Configure Razorpay integration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="razorpay-key">Razorpay API Key</Label>
            <Input id="razorpay-key" type="password" placeholder="rzp_test_..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="razorpay-secret">Razorpay Secret Key</Label>
            <Input id="razorpay-secret" type="password" placeholder="••••••••" />
          </div>
          <Button>Update Payment Settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shipping Settings</CardTitle>
          <CardDescription>Configure shipping options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shipping-fee">Standard Shipping Fee</Label>
            <Input id="shipping-fee" type="number" defaultValue="9.99" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="free-shipping">Free Shipping Threshold</Label>
            <Input id="free-shipping" type="number" defaultValue="100" />
          </div>
          <Button>Update Shipping Settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Store Features</CardTitle>
          <CardDescription>Enable or disable store features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="guest-checkout">Guest Checkout</Label>
              <p className="text-sm text-muted-foreground">
                Allow customers to checkout without an account
              </p>
            </div>
            <Switch id="guest-checkout" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send order updates to customers via email
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="low-stock-alerts">Low Stock Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Receive alerts when products are low in stock
              </p>
            </div>
            <Switch id="low-stock-alerts" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
