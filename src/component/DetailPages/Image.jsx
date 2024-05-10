export default function Image({ image, name, size = 'w-[100px]' }) {
    return (
      <div className={` ${size} h-full w-full rounded-lg overflow-hidden relative flex justify-center items-center`}>
        
      
        <img
          className='  h-full w-auto object-cover lg:object-contain'
          src={image}
          alt={name}
        />
        <img
          className=' h-full w-full object-cover absolute z-[-1] blur-[6px] brightness-[0.6] scale-105 top-0'
          src={image}
          alt={name}
        />
      </div>
    );
  }