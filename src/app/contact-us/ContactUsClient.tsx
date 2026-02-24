"use client";
import { motion } from 'motion/react';
import Image from "next/image";
import ContactUsImage from '../../../public/images/contact-us-image.png';
import { FaTelegram, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MotionImage = motion(Image);

function ContactUsClient() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
         <Image src="/images/background-1.png" alt="کافی شاپ آرشام" fill priority className="object-cover -z-10" />
            
        <div className="absolute inset-0 z-0 pointer-events-none">
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
        </div>

        <main className='flex items-center justify-center gap-20 w-full'>
            <div className='flex flex-col items-start justify-center gap-3 w-1/2'>
                <motion.h1 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='hamrah text-[#4B2E2B] text-[64px]'>ارتباط با مجموعه کافه پرشین آسیا</motion.h1>
                <motion.h2 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='hamrah text-[#4B2E2B] text-[32px] mt-2'>آدرس مجموعه :  کرج - چهاراه مصباح - جنب بانک کشاورزی</motion.h2>
                <motion.h3 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='hamrah text-[#4B2E2B] text-[32px] mt-4'>شماره تماس 1 :  8877-0651-026</motion.h3>
                <motion.h3 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }} className='hamrah text-[#4B2E2B] text-[32px]'>شماره تماس 2 :  656-7696-0930</motion.h3>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}  className='flex gap-8 items-center justify-center flex-row-reverse'>
                    <button className='bg-[#4B2E2B] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:opacity-80 hover:translate-y-2 hover:scale-105 duration-300 cursor-pointer'>
                        <FaTelegram className='text-[#EFE0D1] w-8 h-8'/>
                    </button>
                    <button className='bg-[#4B2E2B] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:opacity-80 hover:translate-y-2 hover:scale-105 duration-300 cursor-pointer'>
                        <FaWhatsapp className='text-[#EFE0D1] w-8 h-8'/>
                    </button>
                    <button className='bg-[#4B2E2B] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:opacity-80 hover:translate-y-2 hover:scale-105 duration-300 cursor-pointer'>
                        <FaInstagram className='text-[#EFE0D1] w-8 h-8'/>
                    </button>
                    <button className='bg-[#4B2E2B] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:opacity-80 hover:translate-y-2 hover:scale-105 duration-300 cursor-pointer'>
                        <MdEmail className='text-[#EFE0D1] w-8 h-8'/>
                    </button>
                </motion.div>
            </div>
            <div className=' ml-[10vh]'>
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} alt='آدرس و تماس کافه پرشین آسیا' src={ContactUsImage} className='w-[614px] h-[614px] contact-image-shadow'/>
            </div>
        </main>
    </section>
  )
}

export default ContactUsClient