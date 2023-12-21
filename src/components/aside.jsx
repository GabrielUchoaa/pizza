import React from "react"

export default function Aside(props){
const [price, setPrice] = React.useState();


React.useEffect(()=>{
   setPrice(props.chosenPizza.reduce((i, ii) => i + ii.Cartprice, 0) ) 
}, [props.chosenPizza])


function Increase(e){
    e.CartQuant = e.CartQuant + 1
    e.Cartprice = e.Preço * e.CartQuant
    setPrice(props.chosenPizza.reduce((i, ii) => i + ii.Cartprice, 0) ) 
    props.load(true)
    setTimeout( ()=> {
    props.load(false) 
}, 100 )


}

let aside = document.querySelector("aside");
let main = document.querySelector("main");

function Decrease(e){
    e.CartQuant = e.CartQuant - 1
    e.Cartprice = e.Preço * e.CartQuant
    setPrice(props.chosenPizza.reduce((i, ii) => i + ii.Cartprice, 0) ) 
    props.load(true)
    setTimeout( ()=> {
    props.load(false) 
}, 100 )

let index = props.chosenPizza.indexOf(e)

if(props.chosenPizza[index].CartQuant === 0){
    props.chosenPizza.splice(index, 1)
}

if(props.chosenPizza.length < 1){
    aside.classList.remove("show")
    main.style.width = "100%"

}

}
function closeMenu(){
    aside.classList.remove("show")
    main.style.width = "100%"
}

    return (
  
<aside>
<div className="cart--area">
<div className="menu-closer" onClick={()=> closeMenu()}>❌</div>
    <h1>Suas Pizzas</h1>
    
    
    {props.chosenPizza.map(i => 
     

    (  
           <div className="cart"> 
           <div className="models">
        <div className="cart--item">
            <img src={i.CartImg} alt=""/>
            <div className="cart--item-nome">{i.CartName}  {i.CartSize} </div>
            <div className="cart--item--qtarea">
                <button className="cart--item-qtmenos" onClick={() => Decrease(i)}>-</button>
                <div className="cart--item--qt">{i.CartQuant}</div>
                <button className="cart--item-qtmais" onClick={() => Increase(i)}>+</button>
            </div>
        </div>
    </div>  
           </div>
        )
    )
   
}


    <div className="cart--details">
        <div className="cart--totalitem subtotal">
            <span>Subtotal</span>
            <span>R$ {price && price.toFixed(2)}</span>
        </div>
        <div className="cart--totalitem desconto">
            <span>Desconto (-10%)</span>
            <span>R$ {(price * 0.10).toFixed(2)}</span>
        </div>
        <div className="cart--totalitem total big">
            <span>Total</span>
            <span>R$ {(price - (price * 0.10)).toFixed(2)}</span>
        </div>
        <div className="cart--finalizar">Finalizar a compra</div>
    </div>
</div>
</aside>
    )
}