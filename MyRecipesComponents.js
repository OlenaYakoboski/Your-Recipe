import done from './done.png'

function MyRecipeComponents ({label, image, calories, ingredients}){
    return(<div>
        <div className="container">
           <h2>{label}</h2>
    </div>
        <div className="container">
           <img src={image}alt='img'width='250px'/>
    </div>
        <div className="container">
           <p>{calories.toFixed()} calories</p>
    </div>
       
        <ul className="container list">
            {ingredients.map((ingredient, index)=>(
           <li key={index}><img src={done}alt='pic'width='30px'/>{ingredient}</li>
                ))}
    </ul>
</div>
       )
}
export default MyRecipeComponents;