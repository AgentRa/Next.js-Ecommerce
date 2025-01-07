"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { CartItem } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";
type Props = { item: CartItem };
export default function AddToCart({ item }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res?.success) {
      toast({
        variant: "destructive",
        description: res?.message,
      });
      return;
    }

    // Handle success add to cart
    toast({
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Cart"
          onClick={() => router.push("/cart")}
        > Go To Cart</ToastAction>
      ),
      description: res.message,
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
     <Plus /> Add to Cart
    </Button>
  );
}
