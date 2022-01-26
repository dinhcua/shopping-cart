import { Button } from "antd";

import { cartItemType } from "../App";

import { Wapper } from "../App.styles";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
};
const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart </Button>
    </Wapper>
  );
};

export default Item;
