import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (
    cartItems,
    cartSubtotal,
    paymentMethod = "Paypal"
  ) => {
    const newOrder = {
      id:
        "#" +
        Math.random()
          .toString(36)
          .substring(2, 10)
          .toUpperCase(),

      items: cartItems,

      total: cartSubtotal,

      payment: paymentMethod,

      date: new Date().toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ),

      status: "Accepted",

      message:
        "Your order has been accepted",
    };

    setOrders((prev) => [
      newOrder,
      ...prev,
    ]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;