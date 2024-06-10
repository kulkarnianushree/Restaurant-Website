
const MealsItem = (props) =>{
    return(
        <section>
            <div>
                <h4>{props.title}</h4>
                <h6>{props.description}</h6>
            </div>
            <div>{props.price}</div>
        
        </section>

    )
}
export default MealsItem
