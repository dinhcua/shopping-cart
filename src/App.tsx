import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Drawer, Progress, Badge, Button } from "antd";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./App.css";
import { Grid, StyledButton } from "./App.styles";
import Item from "./Item/Item";
import { Dispatch, useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import { StateType, productsAction } from "./redux";
import { getProducts } from "./redux/toolkit/productsSlice";
import { RootState } from "./redux/toolkit/store";

export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

// const getProducts = async (): Promise<cartItemType[]> =>
//   await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const dispatch = useDispatch();

  // const { fetchAllProducts } = bindActionCreators(productsAction, dispatch);

  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    const fetchAllProducts = (dispatch: Dispatch<any>) => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          const products = response.data;
          dispatch(getProducts(products));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllProducts(dispatch);
  }, []);

  // const { loading, error, products } = useSelector(
  //   (state: StateType) => state.products
  // );
  // console.log(products);

  const products = useSelector((state: RootState) => state.products.value);
  console.log(products);

  // console.log(test);

  // const cartItems = useSelector((state: StateType) => state.cart);
  const cartItems = useSelector((state: RootState) => state.cart.value);
  console.log(cartItems);

  const getTotalItems = (items: cartItemType[] | undefined) =>
    items?.reduce((ack: number, item) => ack + item.amount, 0);

  // if (loading) return <Progress />;
  // if (error) return <div>error</div>;
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
          // addToCart={handleAddToCart}
          // removeFromCart={handleRemoveFromCart}
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
        {products?.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Grid>
    </>
  );
}

export default App;
