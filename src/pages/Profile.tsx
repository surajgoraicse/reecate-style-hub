import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-display font-bold mb-8">My Profile</h1>

        <div className="text-center py-20">
          <User className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-2xl font-display font-bold mb-4">
            Authentication Coming Soon
          </h2>
          <p className="text-muted-foreground mb-8">
            Sign in to view your profile and order history
          </p>
          <Button asChild size="lg">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
