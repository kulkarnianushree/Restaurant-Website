import MealsItem from "./MealsItem"
const Meals = (props)=>{
    return(
        <div>
            {props.data.map((items)=>{
                <MealsItem
                    key ={items.id}
                    title={items.title}
                    description = {items.description}
                    price={items.price}
                />
            })}
        </div>
    )
}
export default Meals