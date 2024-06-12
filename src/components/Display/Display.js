import React from "react";
import ReactDOM from "react-dom";
import './Display.css';

const Display = (props) => {
    const BackDrop = () => {
        return (
            <div className="backdrop" onClick={props.onConfirm}></div>
        );
    };

    const ModalOverlay = (props) => {
        return (
            <div className="modal">
                <header>
                    <h2>{props.data.title}</h2>
                </header>
                <div className="modal-content">
                    <div>Total Amount</div>
                    <div>0</div>
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
            {ReactDOM.createPortal(<ModalOverlay data={props.data} onConfirm={props.onConfirm} onDone={props.onDone} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    );
};

export default Display;
