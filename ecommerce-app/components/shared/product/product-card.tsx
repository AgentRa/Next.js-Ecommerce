import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import ProductPrice from "@/components/shared/product/product-price";
import {Product} from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center p-0">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
        <CardContent className="grid gap-4 p-4">
            <p>{product.brand}</p>
            <Link href={`/products/${product.slug}`}>
                <h2 className="text-xl font-medium">{product.name}</h2>
            </Link>
            <div className="gap-4 flex-between">
                <p>{product.rating} Stars</p>
                {product.stock > 0 ? (<ProductPrice value={Number(product.price)} className="text-green-600"/>) : (<p className="text-destructive">Out of Stock</p>)}
            </div>
        </CardContent>
    </Card>
  );
}
