import React, { useState } from "react";
import MealsItem from "./MealsItem";
import MealsForm from "./MealsForm";
import Display from "../Display/Display";

const Meals = (props) => {
    const [selectedData, setSelectedData] = useState(null);

    const buttonClickHandler = (index) => {
        const item = props.data.find((item) => item.id === index);
        setSelectedData(item);
    };

    const closeModalHandler = () => {
        setSelectedData(null);
    };

    const confirmHandler = () => {
        console.log("Confirmed!");
        setSelectedData(null);
    };

    return (
        <div style={{ marginLeft: '5%' }}>
            {props.data.map((items) => {
                return (
                    <div className="content" key={items.id}>
                        <MealsItem
                            title={items.title}
                            description={items.description}
                            price={items.price}
                        />
                        <MealsForm onChoose={() => buttonClickHandler(items.id)} />
                    </div>
                );
            })}
            {selectedData && (
                <Display 
                    data={selectedData} 
                    onConfirm={closeModalHandler} 
                    onDone={confirmHandler} 
                />
            )}
        </div>
    );
};

export default Meals;
