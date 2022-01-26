import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { cartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: cartItemType;
  addToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            icon={<MinusOutlined />}
            onClick={() => removeFromCart(item.id)}
          />
          <p>{item.amount}</p>
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => addToCart(item)}
          />
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
