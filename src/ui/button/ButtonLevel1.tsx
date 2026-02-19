import Image from "next/image"
import IconButoonHome from '../../../public/images/icon-button-home.png';

function ButtonLevel1( { background, color, value } : { background : string, color : string, value : string } ) {
  return (
    <button className={`w-[236px] h-[55px] ${background} ${color} rounded-lg hamrah text-[20px] mt-2.5 flex items-center justify-center gap-1.5  hover:opacity-90 duration-300 hover:scale-95 cursor-pointer`}>
        <span>{value}</span>
        <Image alt="کافه پرشین آسیا" src={IconButoonHome} className="w-[25px] h-[25px]"/>
    </button>
  )
}

export default ButtonLevel1