import Image from 'next/image';
import ArrowLeft from '../../../public/images/arrow-left-black-1.png';

function ButtonLevel3() {
  return (
    <button className='mt-[2vh] mr-[18.5vh] flex gap-1 order-button-shadow bg-white w-[139px] h-[37px] rounded-[10px] items-center justify-center hover:opacity-90 cursor-pointer duration-200  hover:scale-95'>
        <span className='text-black peyda-extrabold text-[16px]'>مشاهده</span>
        <Image alt='' src={ArrowLeft} className='w-[15px] h-[15px] mt-0.5'/>
    </button>
  )
}

export default ButtonLevel3