import { useQuery } from "react-query";
import { Drawer, Progress, Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./App.css";
import { Wapper, Grid, StyledButton } from "./App.styles";
import Item from "./Item/Item";
import { useState } from "react";
import Cart from "./Cart/Cart";
export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);
  const { data, isLoading, error } = useQuery<cartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: cartItemType[] | undefined) =>
    items?.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: cartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as cartItemType[])
    );
  };

  if (isLoading) return <Progress />;
  if (error) return <div>error</div>;
  return (
    <>
      <Drawer
        placement="right"
        visible={cartOpen}
        width={600}
        onClose={() => setCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton
        icon={
          <Badge count={getTotalItems(cartItems)}>
            <ShoppingCartOutlined />
          </Badge>
        }
        onClick={() => setCartOpen(true)}
      />

      <Grid col={5}>
        {data?.map((item) => (
          <Item item={item} handleAddToCart={handleAddToCart} />
        ))}
      </Grid>
    </>
  );
}

export default App;
