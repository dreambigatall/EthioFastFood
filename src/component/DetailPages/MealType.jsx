

export default function MealStickers({
   
    gap = 'gap-2',
    width = 'w-[30px]',
    height = 'h-[30px]',
    padding = 'p-1',
    image,
    alt,
    type,
    title,
  }) {
    return (
     
        <div className={`flex ${gap} items-center`}>
        <div
            className={`${width} ${height} ${padding} bg-LightGrey flex justify-center items-center rounded-full`}
        >
            <img src={image} alt={alt} />
        </div>
        
        <span
            className={`${
               
                type === 'non-veg' ? 'text-Red' :
                type === 'veg' ? 'text-Green' : ''
                
            } text-sm mt-1 font-semibold capitalize text-Grey`}
        >
            {title}
        </span>
    </div>
    );
  }