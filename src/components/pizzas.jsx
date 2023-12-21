import pizzaData from "../pizzaData"
import React from "react"

export default function Pizzas(props){
let quant = props.cart.reduce((i, ii) => i + ii.CartQuant, 0)


function openMenu(){
    let aside = document.querySelector("aside");
    aside.classList.add("show")
}

    return(
        <>
    <header>
        <div className="menu-openner" onClick={() => openMenu()}><span>{quant}</span>🛒</div>
    </header>
    
    <main>
            

        <h1>Pizzas</h1>
        <div className="pizza-area">
        {pizzaData.map(i => (
           <div className="pizza-item" data-key={i.id}>
           <a onClick={props.choose}>
               <div className="pizza-item--img">
                <img src={i.img} alt="" title={`Buy this ${i.name} pizza!`}/>
                </div>
               <div className="pizza-item--add" onClick={props.choose}>+</div>
           </a>
           <div className="pizza-item--price">R${i.price.toFixed(2)}</div>
           <div className="pizza-item--name">{i.name}</div>
           <div className="pizza-item--desc">{i.description}</div>
       </div>
        ))}
        </div>
    
    </main>
        </>
    )
}




































































