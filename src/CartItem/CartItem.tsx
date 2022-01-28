import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { cartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux";
import { addToCart, removeFromCart } from "../redux/toolkit/cartSlice";

type Props = {
  item: cartItemType;
};
const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  // const { addToCart, removeFromCart } = bindActionCreators(
  //   cartAction,
  //   dispatch
  // );
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
            onClick={() => dispatch(removeFromCart(item.id))}
          />
          <p>{item.amount}</p>
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => dispatch(addToCart(item))}
          />
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
