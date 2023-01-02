import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react'
import { coffesType, Coffes } from '../Api'

interface ChildreanPropsType {
    children: ReactNode
}

interface orderInformationType {
    id: number
    name: string
    price: number
    quantity: number
}


const CoffeeOrdersContext = createContext({} as any)

export function OrdersProvider({ children }: ChildreanPropsType) {
  const [orderInformation, setOrderInformation] = useState<coffesType[]>([])
  const [totalOrderItems, setTotalOrderItems] = useState<number>(0)
  const [coffes, setCoffes] = useState(Coffes)
  const [coffesList, setCoffesList] = useState('')

  function addToOrder(order: coffesType){
    updateQuantity(order.id)
    setOrderInformation(state => {
      //console.log(state)
      return [...state, order]}
    )
    setTotalOrderItems(state => state + 1)
    // getOrders()
  }

  function removeToOrder(order: coffesType){
    
    //setOrderInformation(state => [...state, order])
  }

  function updateQuantity(id: number){
    let resp = orderInformation.filter(obj => obj.id !== id)
    setOrderInformation(resp)
  }

  function getOrders(){
    console.log(orderInformation)
  }

  return (
    <CoffeeOrdersContext.Provider
      value={{
        orderInformation,
        setOrderInformation,
        addToOrder,
        totalOrderItems,
        coffes
      }}
    >
      {children}
    </CoffeeOrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(CoffeeOrdersContext)
  return context
}