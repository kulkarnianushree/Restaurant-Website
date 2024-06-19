import React from "react";
import ReactDOM from "react-dom";
import './Display.css';

const Display = (props) => {
  const BackDrop = () => {
    return (
      <div className="backdrop" onClick={props.onConfirm}></div>
    );
  };

  const ModalOverlay = () => {
    return (
      <div className="modal">
        <header>
          <h2>Your Cart</h2>
        </header>
        <div className="modal-content">
          {(!props.cart || props.cart.length === 0) && <p>No items in cart.</p>}
          {props.cart && props.cart.length > 0 && (
            <ul>
              {props.cart.map(item => (
                <div key={item.id}>
                  <li>
                    {item.title} - {item.quantity} x {item.price}
                  </li>
                  <button type="button" onClick={() => props.onIncrement(item.id)}> + </button>
                  <button type="button" onClick={() => props.onDecrement(item.id)}> - </button>
                </div>
              ))}
            </ul>
          )}
          <div>Total Amount: ${props.cart ? props.cart.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0).toFixed(2) : '0.00'}</div>
        </div>
        <footer>
          <button type="button" onClick={props.onConfirm}>Cancel</button>
          <button type="button" onClick={props.onDone}>Okay</button>
        </footer>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default Display;
