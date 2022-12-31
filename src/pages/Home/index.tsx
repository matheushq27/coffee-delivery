import { Intro } from "./sections/intro"
import { CoffeeList } from "./sections/coffeeList"


export function Home(){
    return(
        <>
          <Intro />
          <CoffeeList />
        </>
    )
}