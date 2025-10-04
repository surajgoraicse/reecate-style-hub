import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center">
              About Reecate
            </h1>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                Reecate was founded on the belief that luxury and comfort should coexist
                harmoniously in everyday wear. We're not just another clothing brand –
                we're a celebration of quality, style, and the simple joy of feeling good
                in what you wear.
              </p>

              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Mission</h2>
              <p>
                To create premium, comfortable clothing that empowers men and kids to look
                and feel their best in every moment. We believe that true luxury lies in
                the details – from the softness of our fabrics to the precision of our
                stitching.
              </p>

              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Promise</h2>
              <p>
                Every Reecate piece is crafted with meticulous attention to quality. We
                source the finest materials, work with skilled artisans, and never
                compromise on comfort. Whether it's a casual tee or an outfit for a
                special occasion, we ensure that every item meets our high standards.
              </p>

              <h2 className="text-3xl font-display font-bold mt-12 mb-6">
                Sustainability
              </h2>
              <p>
                We're committed to responsible fashion. Our production processes prioritize
                sustainability, and we continuously work to reduce our environmental
                footprint while maintaining the premium quality our customers expect.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
