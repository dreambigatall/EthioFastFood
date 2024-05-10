 import { logo } from "../Utils/UniversalConstData";

export default function Logo({ size = ' w-[100px]' }) {
    return (
      <div className={` ${size}` }>
        <img
          // className={ `w-[${size}px]`}
          className=' w-full'
          src={logo}
          alt='cheffest the fast food and grill'
        />
      </div>
    );
  }