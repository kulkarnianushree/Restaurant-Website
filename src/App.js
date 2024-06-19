import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Summary/Summary";
import MealsItem from "./components/Meals/MealsItem";
import Meals from "./components/Meals/Meals";
import Display from './components/Display/Display';

const App = () => {
  const [cartShown, setCartShown] = useState(false);
  const [cart, setCart] = useState([]);
  const[count,setCount] = useState(0)

  const MealsList = [
    { id: 1, title: 'Pizza', description: 'EveryDay Special', price: '$20' },
    { id: 2, title: 'Burger', description: 'Evening Special', price: '$10' },
    { id: 3, title: 'Gobi', description: 'Hot Fav Recipe', price: '$15' },
    { id: 4, title: 'Panipuri', description: 'Girls Special', price: '$5' }
  ];

  const addToCartHandler = (meal, quantity) => {
    setCount(count+1)
    setCart((prevCart) => {
      const existingMeal = prevCart.find(item => item.id === meal.id);

      if (existingMeal) {
        return prevCart.map(item =>
          item.id === meal.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...meal, quantity }];
      }
    });

  };
  const IncrementButtonHandler = (meal)=>{
    meal.quantity = meal.quantity + 1
  }
  const DecrementButtonHandler = (meal) =>{
    meal.quantity = meal.quantity - 1
  }


  const buttonClickHandler = () => {
    setCartShown(true);
  };

  const cancelButtonHandler = () => {
    setCartShown(false);
  };

  const okayButtonHandler = () => {
    console.log('ordering...', cart);
    setCartShown(false);
    setCart([]);
  };

  

  return (
    <React.Fragment>
      <Header onShow={buttonClickHandler} TotalCount={count}/> {/* Responsible for Heading */}
      <Summary /> {/* Responsible for content of hotel */}
      <MealsItem Meals={MealsList} /> {/* it is meals data available in hotel */}
      <Meals data={MealsList} onAddToCart={addToCartHandler} /> {/* it displays all meals data */}
      {cartShown && 
        <Display 
          cart={cart} 
          onConfirm={cancelButtonHandler} 
          onDone={okayButtonHandler}
          onIncrement = {IncrementButtonHandler}
          onDecrement = {DecrementButtonHandler}
        />
      }
    </React.Fragment>
  );
};

export default App;
