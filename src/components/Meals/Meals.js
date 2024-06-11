import MealsItem from "./MealsItem"
import './Meals.css'
const Meals = (props) => {
    return (
        <div style={{marginLeft:'5%'}}>
            {props.data.map((items) => {
                return (
                    <div className="content">
                        <MealsItem
                            key={items.id}
                            title={items.title}
                            description={items.description}
                            price={items.price}
                        />
                        <section className="content-extra">
                            <span className="content-special">
                                <h5>Amount</h5>
                                <h6> 0 </h6>
                            </span>
                            
                            <span>
                                <button>+Add</button>
                            </span>
                        </section>
                    
                    </div>
                
                );

            })}

        </div>
    );
}

export default Meals;
