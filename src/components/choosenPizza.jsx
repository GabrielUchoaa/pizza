import React from "react"
import PizzaData from "../pizzaData"


export default function ChosenPizza(props){
let Theprice = PizzaData[props.pizza].price * props.qt
function go(){
    props.load(false)
    props.faddCart()
    
}

 return(
        <div className={props.Buypizza ? "pizzaWindowArea yes" : "pizzaWindowArea none"}>
        <div className="pizzaWindowBody">
            <div className="pizzaInfo--cancelMobileButton" onClick={props.cancel}>Voltar</div>
            <div className="pizzaBig">
                <img src={PizzaData[props.pizza].img} alt="" />
            </div>
            <div className="pizzaInfo">
                <h1>{PizzaData[props.pizza].name}</h1>
                <div className="pizzaInfo--desc">{PizzaData[props.pizza].description}</div>
                <div className="pizzaInfo--sizearea">
                    <div className="pizzaInfo--sector">Tamanho</div>
                    <div className="pizzaInfo--sizes">
                        <div data-key="0" className="pizzaInfo--size">PEQUENA <span>320g</span></div>
                        <div data-key="1" className="pizzaInfo--size">MÉDIO <span>530g</span></div>
                        <div data-key="2" className="pizzaInfo--size selected">GRANDE <span>860g</span></div>
                    </div>
                </div>
                <div className="pizzaInfo--pricearea">
                    <div className="pizzaInfo--sector">Preço</div>
                    <div className="pizzaInfo--price">
                        <div className="pizzaInfo--actualPrice">R$ {Theprice.toFixed(2)}</div>
                        <div className="pizzaInfo--qtarea">
                            <button className="pizzaInfo--qtmenos" onClick={props.decrease}>-</button>
                            <div className="pizzaInfo--qt">{props.qt}</div>
                            <button className="pizzaInfo--qtmais" onClick={props.increase}>+</button>
                        </div>
                    </div>
                </div>
                <div className="pizzaInfo--addButton" onClick={()=> go()}>Adicionar ao carrinho</div>
                <div className="pizzaInfo--cancelButton" onClick={props.cancel}>Cancelar</div>
            </div>
        </div>
    </div>
    )
}