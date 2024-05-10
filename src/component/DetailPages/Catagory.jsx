import { cuisine } from "../../Utils/UniversalConstData"

export default function Catagaroy({category}){
    return (
        <div className=' flex items-center gap-2'>
            <div className='w-[30px] h-[30px] p-1 bg-LightGrey flex justify-center items-center rounded-full'>
            <img className=' mb-[4px]' src={cuisine} alt={category} />
        </div>
         <span className=' text-sm font-medium text-Grey capitalize'>
            {category}
         </span>
           
        </div>
    )
}