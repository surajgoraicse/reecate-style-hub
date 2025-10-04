import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { products } from "@/data/products";
import heroMen from "@/assets/hero-men.jpg";
import heroKids from "@/assets/hero-kids.jpg";

const Home = () => {
  const menProducts = products.filter((p) => p.category === "men");
  const kidsProducts = products.filter((p) => p.category === "kids");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <img
            src={heroMen}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Luxury Comfort
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Everyday Wear for Men & Kids
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default" className="text-lg">
                <Link to="/shop/men">Shop Men</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/shop/kids">Shop Kids</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Featured Products - Men */}
        <section className="container mx-auto px-4">
          <ProductCarousel products={menProducts} title="Men's Collection" />
        </section>

        {/* Split Banner - Men & Kids */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Men Banner */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
              <img
                src={heroMen}
                alt="Men's Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-display font-bold mb-2">Men's Collection</h3>
                <p className="mb-4 text-lg">Sophisticated everyday style</p>
                <Button asChild variant="secondary" className="w-fit">
                  <Link to="/shop/men">Explore Men</Link>
                </Button>
              </div>
            </motion.div>

            {/* Kids Banner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
              <img
                src={heroKids}
                alt="Kids' Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-display font-bold mb-2">Kids' Collection</h3>
                <p className="mb-4 text-lg">Playful comfort for little ones</p>
                <Button asChild variant="secondary" className="w-fit">
                  <Link to="/shop/kids">Explore Kids</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products - Kids */}
        <section className="container mx-auto px-4">
          <ProductCarousel products={kidsProducts} title="Kids' Collection" />
        </section>

        {/* Brand Story */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Reecate was born from a simple belief: luxury and comfort shouldn't be
                mutually exclusive. We create premium everyday wear that feels as good as
                it looks, for men and kids who appreciate quality in every detail.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
