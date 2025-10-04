import { Link } from "react-router-dom";
import { ShoppingBag, Menu, User, Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Signed out successfully!",
      });
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
              Reecate
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop/men"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Men
            </Link>
            <Link
              to="/shop/kids"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Kids
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {isAdmin && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">Admin</span>
                </Link>
              </Button>
            )}
            {user ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/profile">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/shop/men"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/shop/kids"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
