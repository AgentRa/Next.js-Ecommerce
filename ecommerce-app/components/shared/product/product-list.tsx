import ProductCard from "@/components/shared/product/product-card";
import {Product} from "@/types"

type Props = { data: Product[]; title?: string; limit?: number };
export default function ProductList({ data, title, limit }: Props) {
    const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="mb-4 h2-bold">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}
