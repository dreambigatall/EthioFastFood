import Banner from "../Fetures/Banner";
import Meals from "./MealPage/Meals";
export default function Home() {
    return (
      <main className=' flex flex-col justify-center items-center'>
       
        <Banner/>
        <Meals/>
      </main>
    );
  }