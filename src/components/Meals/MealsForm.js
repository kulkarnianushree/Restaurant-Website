import React, { useState } from "react";
import './MealsForm.css';

const MealsForm = (props) => {
  const [quantity, setQuantity] = useState('');

  const numberChangeHandler = (event) => {
    setQuantity(Number(event.target.value));
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    props.onChoose(quantity);
  };

  return (
    <div className="content">
      <form onSubmit={FormSubmitHandler} className="content-extra">
        <div className="content-special">
          <div>Amount</div>
          <div>
            <input
              type="number"
              min="1"
              max="25"
              onChange={numberChangeHandler}
              value={quantity}
            />
          </div>
        </div>
        <button type="submit" className="button">Add</button>
      </form>
    </div>
  );
};

export default MealsForm;
