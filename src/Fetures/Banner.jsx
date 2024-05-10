import { banner1 } from "../Utils/UniversalConstData";
export default function Banner(){

    return(
        <>

        <div className=" h-[60px] sm:h-[80px] md:h-[100px] "></div>
        <div className=" relative flex justify-center items-center">
            <div className=" max-w-[576px]">
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/2c5e435bd406fcf7e753a2eb513aced2_screen.jpg?ts=1715369035'/>
            </div>
            <div className="w-screen max-w-7xl absolute blur-sm brightness-[0.75] z-[-100] hidden sm:block">
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/2c5e435bd406fcf7e753a2eb513aced2_screen.jpg?ts=1715369035' alt="banner" className="w-full scale-[1.03]"/>
            </div>
        </div>
        
         </>
    )
  


}