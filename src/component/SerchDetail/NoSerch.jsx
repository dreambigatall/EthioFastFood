export default function NoSearchMessage(){
    return(
        <div className=" flex flex-col gap-2 justify-center items-center">
            <div className=" w-[200px]">
            <img
          src='https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/banners/noData.png'
          alt='no data'
            />
            </div>
            <p className=' text-sm text-MediumGrey'>
                 We’re sorry. We were not able to find a match :(
             </p>
        </div>
    )
}