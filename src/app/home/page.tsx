import ButtonLevel1 from "@/ui/button/ButtonLevel1";
import ImageHome from "@/ui/home/ImageHome";
import ImageDonCoffe1 from "../../../public/images/coffe-done-1.png";
import ImageDonCoffe2 from "../../../public/images/coffe-done-2.png";
import ImageDonCoffe3 from "../../../public/images/coffe-done-3.png";
import Image from "next/image";


function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background */}
      <Image src="/images/background-1.png" alt="کافی شاپ آرشام" fill priority className="object-cover -z-10"/>

      {/* Decorative Leaves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
        <Image alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
        <Image alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
        <Image alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image alt="" src={ImageDonCoffe1} className="w-[118px] h-[103px] mr-[38vh] mt-[20vh] shadow-done-coffe absolute"/>
        <Image alt="" src={ImageDonCoffe3} className="w-[120px] h-[104px] rotate-[5deg] mr-[50vh] mt-[68vh] shadow-done-coffe absolute"/>
        <Image alt="" src={ImageDonCoffe2} className="w-[97px] h-[90px] mt-[24vh] shadow-done-coffe absolute mr-[155vh]"/>
        <Image alt="" src={ImageDonCoffe2} className="w-[90px] h-20 mt-[75vh] rotate-[-70deg] shadow-done-coffe absolute mr-[164vh]"/>
      </div>

      <ImageHome />

        <div className="ml-[110vh] absolute">
          <h1 className="hamrah text-[48px] text-[#4B2E2B] w-[542px] tracking-[0.06em]">قهوه پرشین آسیا  بزرگ ترین و با تجربه ترین کافه  تخصصی در ایران</h1>
          <h2 className="hamrah text-[32px] text-[#78866B] tracking-[0.06em]">دارای 34 شعبه در تهران و کرج! </h2>
          <ButtonLevel1 background="bg-[#4B2E2B]" color='text-[#EFE0D1] hover:text-white' value="شعبه های پرشین آسیا"/>
        </div>

        <div className="mr-[127vh] mt-[10vh] absolute">
          <h1 className="hamrah text-[48px] text-[#EFE0D1] w-[530px] tracking-[0.06em]">هوا گرمه ؟! نوشیدنی سرد بخور هوا سرده؟! نوشیدنی گرم بخور</h1>
          <h2 className="hamrah text-[32px] text-[#F5D5CB] tracking-[0.06em]">فضای عالی با بهترین نوشیدنی ها!</h2>
          <ButtonLevel1 background="bg-[#EFE0D1]" color='text-[#4B2E2B] hover:text-[#4E4E4E]' value="منو قهوه پرشین آسیا"/>
        </div>

      </div>
  )
}

export default Home