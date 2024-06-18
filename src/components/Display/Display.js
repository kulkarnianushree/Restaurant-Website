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
          {props.cart.length === 0 && <p>No items in cart.</p>}
          {props.cart.length > 0 && (
            <ul>
              {props.cart.map(item => (
                <li key={item.id}>
                  {item.title} - {item.quantity} x {item.price}
                </li>
              ))}
            </ul>
          )}
          <div>Total Amount: ${props.cart.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0)}</div>
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
      {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} onDone={props.onDone} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default Display;
