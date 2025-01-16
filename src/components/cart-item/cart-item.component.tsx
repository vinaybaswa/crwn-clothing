import { FC, memo } from "react";

import { CartItem as TCartITem } from "../../store/cart/cart.types";

import { CartItemContainer, Img, ItemDetails } from "./cart-item.styles";

type CartItemProps = { cartItem: TCartITem };

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
