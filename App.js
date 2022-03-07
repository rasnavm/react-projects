import { YOUR_APP_ID,YOUR_APP_KEY} from './key';
import './App.css';
import Axios from "axios";
import {useState} from "react";
import RecipieTile from './recipietile';


function App() {
  const [query,setQuery]=useState("")
  const [recipes,setrecipes]=useState([])
  const[healthlabel,sethealthlabel]=useState('vegan')
  var url=`https://api.edamam.com/search?q=${query}&app_id=${ YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &health=${healthlabel}`;
  
  async function getReceipie()
  {
    var result=await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const submit=(e)=>{
    e.preventDefault();
    getReceipie();
  }
  return (
    <div className="app">
      
      <h1 >Food Receipie Plaza </h1>
      <form className='search_app' onSubmit={submit}>
        <input type="text" 
        className='input_class'
        placeholder='enter ingredient' 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}></input>
        <input type="submit"
        className='input_submit'
         value="search"/>

         <select className='app_healthLabels'>
           <option onClick={()=>sethealthlabel("soy-free")}>soy-free</option>
           <option onClick={()=>sethealthlabel("vegetarian")}>vegetarian</option>
           <option onClick={()=>sethealthlabel("pork-free")}>pork-free</option>
           <option onClick={()=>sethealthlabel("peanut-free")}>peanut-free</option>
           <option onClick={()=>sethealthlabel("shellfish-free")}>shellfish-free</option>
           <option onClick={()=>sethealthlabel("gluten-free")}>gluten-free</option>
           <option onClick={()=>sethealthlabel("dairy-free")}>dairy-free</option>
           <option onClick={()=>sethealthlabel("keto-friendly")}>keto-friendly</option>
           <option onClick={()=>sethealthlabel("low-sugar")}>low-sugar</option>
    </select>
      </form>
      <div className='app__recipes'>
       {recipes.map((recipe)=>
        {
         return <RecipieTile recipe={recipe}></RecipieTile>
        })}
      </div>
    </div>
  );
}

export default App;
