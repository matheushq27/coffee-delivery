import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { coffesType } from "../../../../../../Api";
import { ButtonIcon } from "../../styles";
import { BoxCounter } from "./styles";

type props = {
    click: (objCoffee: any, quantity: number) => void
    createOrderObject: (objCoffee: any) => void
    order: coffesType
}

export function ActionsFooter({ click, order, createOrderObject }: props){

    const [quantity, setQuantity] = useState<number>(0)

    function updateQuantity(operation: 'addition' | 'subtraction'){
        let qtd = 0
        switch(operation){
            case 'addition':
                setQuantity(state => {
                    qtd = state + 1
                    click(order, qtd) 
                    return qtd
                })
            break
            case 'subtraction':
                setQuantity(state => {
                if(state <= 0){
                    qtd =  0
                }else{
                    qtd = state - 1
                }
                 click(order, qtd) 
                 return qtd
                }) 
            break
        }
        
    }

    function addToCart(){
        createOrderObject(order)  
        setQuantity(0)
    }
    
    return(
        <>
        <BoxCounter className="p-2">
          <button onClick={()=>updateQuantity('subtraction')}><Minus size={20} weight="fill" /></button>
          <span className="ms-2 me-2">
            {quantity}
          </span>
          <button onClick={()=>updateQuantity('addition')}><Plus size={20} weight="fill" /></button>
        </BoxCounter>
        <ButtonIcon onClick={addToCart} className="p-2 text-white">
            <ShoppingCart size={20} weight="fill" />
        </ButtonIcon>
        </>
    )
}