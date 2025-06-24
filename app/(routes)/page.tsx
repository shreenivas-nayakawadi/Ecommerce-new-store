import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards(process.env.BILLBOARD_ID!);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="space-y-16 pb-16">
          <Billboard data={billboard} />
          
          <div className="px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
          
          {/* Additional sections for better homepage */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Stay updated with our latest products, exclusive offers, and style tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;