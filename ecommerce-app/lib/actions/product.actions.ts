import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" } as const,
    take: LATEST_PRODUCTS_LIMIT,
  });

  return convertToPlainObject(data);
}
