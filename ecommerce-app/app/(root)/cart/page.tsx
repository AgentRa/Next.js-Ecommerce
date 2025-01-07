import CartTable from "./cart-table";
import { getMyCart } from "@/lib/actions/cart.actions";

export const metadata = {
  title: "Shopping Cart",
};

type Props = {};
export default async function CartPage({}: Props) {
    const cart = await getMyCart();

  return (
    <>
      <CartTable cart={cart}/>
    </>
  );
}
