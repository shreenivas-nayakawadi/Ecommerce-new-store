import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import NoResults from "@/components/ui/no-result";

export const revalidate = 0;

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }

  return {
    title: `${product.name} | ${product.category.name}`,
    description: `Shop ${product.name} in ${product.category.name} - ${product.size.name} - ${product.color.name}`,
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="px-4 sm:px-6 pb-24 pt-16">
            <NoResults />
          </div>
        </Container>
      </div>
    );
  }

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            <div className="lg:sticky lg:top-24">
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-16 border-gray-200" />
          <ProductList title="You might also like" items={suggestedProducts.filter(item => item.id !== product.id)} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;