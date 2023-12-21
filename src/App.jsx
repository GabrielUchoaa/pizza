import './App.css';
import React from 'react';
import Pizzas from "./components/pizzas.jsx";
import ChosenPizza from './components/choosenPizza.jsx';
import Aside from "./components/aside.jsx";
import PizzaData from "./pizzaData";



let selectedpizza;
let selected;

function App() {
  const [buypizza, setBuypizza] = React.useState();
  const [load, setLoad] = React.useState(false);
  const [counter, setCounter] = React.useState(1);
  const [cartInfo, setCartInfo] = React.useState([]);





  function choose(e){
    setBuypizza(true)
    let pizzaArea = document.querySelector('.pizzaWindowArea')
    pizzaArea.style.opacity= "0.5";
    setTimeout( ()=> {
        pizzaArea.style.opacity= "1"}, 50 )
        if(!document.querySelector('[data-key="0"]').classList.contains('selected') &&
          !document.querySelector('[data-key="1"]').classList.contains('selected')
        ){document.querySelector('[data-key="2"]').classList.add('selected')}
      
      selectedpizza = e.target.closest(".pizza-item"); 
      selected = selectedpizza.getAttribute("data-key")
      document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) =>{
        if(sizeIndex === 2){
           size.classList.add('selected')}
      })
      setLoad(true)
      console.log(selectedpizza, buypizza)
      
    }




    function cancelar(){
      let pizzaArea = document.querySelector('.pizzaWindowArea')
      pizzaArea.style.opacity= "0.5";
      setTimeout( ()=> {
       setBuypizza(prev => !prev)
         setCounter(1)
         
         document.querySelector(".pizzaInfo--size.selected").classList.remove('selected')
         
   
       }, 200 )
      
       
   
   }
    
   function increase(){
    setCounter(prev => prev + 1)
 } function decrease(){
   if(counter > 1)
   { setCounter(prev => prev - 1) }
 }
   
   
   document.querySelectorAll('.pizzaInfo--size').forEach((size) => {
     size.addEventListener('click', (e)=>{
        let selected = document.querySelector(".pizzaInfo--size.selected")
        selected.classList.remove("selected")
        size.classList.add("selected")
        
       }
       )})



let pizzasCart;   
function addCart(){
  cancelar()
  let aside = document.querySelector("aside")
  let main = document.querySelector("main")
  setTimeout(()=> {
    aside.classList.add("show")
    main.style.width = "65%"
  }, 100)
             
  let Selected = document.querySelector(".pizzaInfo--size.selected")
  let SSelected = Selected.getAttribute('data-key')
             
function updateCart(){  
let Size;       
switch(SSelected){
  case "0":
    Size = "P";
  break;
  case "1":
    Size = "M";
  break;
  case "2":
    Size = "G";
  break;
         
}
                   
       
       
  let identifier = `${PizzaData[selected - 1 || 0].name}@${Size}`
  let key = cartInfo.findIndex((item)=>item.Identifier === identifier)    
  if(key > -1){
    cartInfo[key].CartQuant += parseInt(counter);
    cartInfo[key].Cartprice = cartInfo[key].CartQuant * cartInfo[key].Preço
    setCartInfo(prev => [...prev, ])
  }else{
           
       
if(load){    
pizzasCart =  {
    Preço: parseInt(PizzaData[selected - 1 || 0].price.toFixed(2)),
    CartQuant: counter,
    CartImg: PizzaData[selected - 1 || 0].img,
    CartName: PizzaData[selected - 1 || 0].name,
    CartSize: Size,
    Identifier: identifier
           
}
        
pizzasCart.Cartprice = PizzaData[selected - 1 || 0].price.toFixed(2) * pizzasCart.CartQuant
        
       
setCartInfo(prev => [...prev, pizzasCart])
      
}
       
}  }
       
updateCart()
}     

React.useEffect(()=>{
  console.log(cartInfo) 
  }, [cartInfo])

  return (
    <>
      <Pizzas choose={choose} cart={cartInfo}/>
      <Aside pizza={selected - 1 || 0} chosenPizza={cartInfo}
       load={setLoad}/>
      <ChosenPizza Buypizza={buypizza} pizza={selected -1 || 0}
      cancel={cancelar} qt={counter} increase={increase} 
      decrease={decrease} 
      faddCart={addCart} load={setLoad}/>
      
    </>
  )
}

export default App
