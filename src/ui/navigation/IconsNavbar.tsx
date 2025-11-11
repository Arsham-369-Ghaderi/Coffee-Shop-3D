import Image from "next/image"
import SearchIconNavbar from '../../../public/images/Search.png';
import UserIconNavbar from '../../../public/images/User.png';
import CartIconNavbar from '../../../public/images/Shopping Cart.png';

function IconsNavbar() {
  return (
    <div className="flex gap-1 items-center justify-center">
        <Image alt="" src={UserIconNavbar} className="w-[70px] h-[70px] hover:opacity-50 cursor-pointer hover:scale-105 duration-300"/>
        <Image alt="" src={SearchIconNavbar} className="w-[65px] h-[65px] hover:opacity-50 cursor-pointer hover:scale-105 duration-300"/>
        <Image alt="" src={CartIconNavbar} className="w-[70px] h-[70px] hover:opacity-50 cursor-pointer hover:scale-105 duration-300"/>
    </div>
  )
}

export default IconsNavbar