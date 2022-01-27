import { Button } from "antd";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartItemType } from "../App";

import { Wapper } from "../App.styles";
import { cartAction } from "../redux";

type Props = {
  item: cartItemType;
};
const Item: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(cartAction, dispatch);

  return (
    <Wapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => addToCart(item)}>Add to cart </Button>
    </Wapper>
  );
};

export default Item;
