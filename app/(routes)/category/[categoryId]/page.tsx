import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import ProductList from "./components/ProductList";

import { Metadata } from "next";

export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    colorId?: string;
    sizeId?: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = await getCategory(categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found",
    };
  }

  return {
    title: `${category.name} Collection`,
    description: `Browse our ${category.name} products`,
  };
}

const CategoryPage = async ({
  params,
  searchParams,
}: CategoryPageProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const [category, allProducts, sizes, colors] = await Promise.all([
    getCategory(categoryId),
    getProducts({
      categoryId,
      ...(colorId && { colorId }),
      ...(sizeId && { sizeId }),
    }),
    getSizes(),
    getColors(),
  ]);

  if (!category) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 pb-24">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              {category.name} Collection
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </div>
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <ProductList 
              initialProducts={allProducts}
              sizes={sizes}
              colors={colors}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;