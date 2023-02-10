import './App.css';
import Axios from "axios";
import {useState} from "react";
import RecipeTile from './RecipeTile';
function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);


  const YOUR_APP_ID = `ce2d2862`;
  const YOUR_APP_KEY = "cf7785fe0ebb15be2c1444dd10b79240";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  //fun to get data from api
  async function getRecipes() {
   var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1>Delicious Recipes Search 🍔🍟🥤</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input 
         type ="text" className='app_input'
         placeholder="type in an ingredient"         value={query} 
         onChange={(e) => setquery(e.target.value)}/>
         <input className="app_submit" type="submit" value="Search"/>
      </form>

      <div className='app_recipes'>
       {recipes.map((recipe) => {
        return <RecipeTile recipe={recipe}/>
       })}
      </div>
    </div>
    
  );
}

export default App;
