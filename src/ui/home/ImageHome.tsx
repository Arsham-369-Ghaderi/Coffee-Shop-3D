import Image from "next/image"
import ImageHomePhoto from '../../../public/images/coffe-livan-orginal.webp';

function ImageHome() {
  return (
    <div>
        <Image alt="" src={ImageHomePhoto} className="w-[370px] h-[550px] image-home-box"/>
    </div>
  )
}

export default ImageHome