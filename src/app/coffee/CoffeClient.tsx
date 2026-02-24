"use client";
import Image from 'next/image';
import MillDoneeCoffe from '../../../public/images/mill-Done.png';
import CoffeDone1 from '../../../public/images/Coffee/Coffee-Done-1.png';
import CoffeDone2 from '../../../public/images/Coffee/Coffee-Done-2.png';
import CoffeDone3 from '../../../public/images/Coffee/Coffee-Done-3.png';
import CoffeDone4 from '../../../public/images/Coffee/Coffee-Done-4.png';
import { motion } from 'motion/react';


const MotionImage = motion(Image);



function CoffeeClient() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <Image src="/images/background-2.png" alt="کافی شاپ آرشام" fill priority className="object-cover -z-10" />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
        </div>

        <main className='flex items-center justify-center'>

          <div>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='flex flex-col items-center justify-center mt-[10vh] mr-[-8vh]'>
              <Image alt='خرید قهوه عربیکا' src={CoffeDone2} className='w-[200px] h-[230px]'/>
              <h2 className='text-[27px] text-[#4B2E2B] hamrah'>قهوه عربیکا</h2>
              <h4 className='text-[19px] text-[#475575] hamrah'>1 کیلوگرم: 580,000 تومان</h4>
              <button className='text-[16px] text-[#EFE0D1] hamrah bg-[#616D92] w-[136px] h-9 rounded-[5px] flex items-center justify-center pt-0.5 hover:opacity-60 cursor-pointer duration-300 hover:scale-105'>سفارش</button>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='flex flex-col items-center justify-center mt-[-10vh] mr-[-65vh]'>
              <Image alt='خرید قهوه کلمبیا' src={CoffeDone4} className='w-[200px] h-[230px]'/>
                <h2 className='text-[27px] text-[#4B2E2B] hamrah'>قهوه کلمبیا</h2>
                <h4 className='text-[19px] text-[#657D54] hamrah'>1 کیلوگرم: 1,325,000 تومان</h4>
                <button className='text-[16px] text-[#EFE0D1] hamrah bg-[#617851] w-[136px] h-9 rounded-[5px] flex items-center justify-center pt-0.5 hover:opacity-60 cursor-pointer duration-300 hover:scale-105'>سفارش</button>
            </motion.article>
          </div>

          <div className='mt-[14vh] pl-[-4vh]'>
            <MotionImage initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} alt='آسیاب قهوه در جه یک ' src={MillDoneeCoffe} className='w-[460px] h-[650px] mr-14'/>
            <div className='flex flex-col items-center justify-center mt-[-5vh]'>
              <h1 className='hamrah text-[34px] text-[#EFE0D1] bg-[#7A5230] w-[450px] px-5 rounded-[10px]'><span className='text-[#C6DFBF]'>بهترین</span> قهوه های آسیاب شده ایران با </h1>
              <h4 className='hamrah text-[34px] text-[#EFE0D1] bg-[#7A5230] w-[390px] px-4 mt-1 rounded-[10px]'><span className='text-[#C6DFBF]'>عالی ترین</span> کیفیت و قیمت مناسب</h4>
            </div>
          </div>

          <div>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='flex flex-col items-center justify-center mt-[10vh] ml-[-8vh]'>
              <Image alt='خرید قهوه روبوستا' src={CoffeDone1} className='w-[200px] h-[230px]'/>
              <h2 className='text-[27px] text-[#EFE0D1] hamrah'>قهوه روبوستا</h2>
              <h4 className='text-[19px] text-[#EBC491] hamrah'>1 کیلوگرم: 430,000 تومان</h4>
              <button className='text-[16px] text-[#4B2E2B] hamrah bg-[#DEAA6E] w-[136px] h-9 rounded-[5px] flex items-center justify-center pt-0.5 hover:opacity-60 cursor-pointer duration-300 hover:scale-105'>سفارش</button>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='flex flex-col items-center justify-center mt-[-10vh] ml-[-65vh]'>
              <Image alt='خرید قهوه اتیوپی' src={CoffeDone3} className='w-[200px] h-[230px]'/>
                <h2 className='text-[27px] text-[#EFE0D1] hamrah'>قهوه اتیوپی</h2>
                <h4 className='text-[19px] text-[#C9BEC3] hamrah'>1 کیلوگرم: 750,000 تومان</h4>
                <button className='text-[16px] text-[#4B2E2B] hamrah bg-[#A98F9D] w-[136px] h-9 rounded-[5px] flex items-center justify-center pt-0.5 hover:opacity-60 cursor-pointer duration-300 hover:scale-105'>سفارش</button>
            </motion.article>
          </div>

        </main>
    </section>
  )
}

export default CoffeeClient