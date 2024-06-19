import React from "react";
import MealsItem from "./MealsItem";
import MealsForm from "./MealsForm";

const Meals = (props) => {
  return (
    <div style={{ marginLeft: '5%' }}>
      {props.data.map((items) => (
        <div className="content" key={items.id}>
          <MealsItem
            title={items.title}
            description={items.description}
            price={items.price}
          />
          <MealsForm onChoose={(quantity) => props.onAddToCart(items, quantity)} />
        </div>
      ))}
    </div>
  );
};

export default Meals;
