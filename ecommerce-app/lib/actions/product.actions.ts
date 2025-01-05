import { PrismaClient } from "@prisma/client";
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";

// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" } as const,
    take: LATEST_PRODUCTS_LIMIT,
  });

  return convertToPlainObject(data);
}
