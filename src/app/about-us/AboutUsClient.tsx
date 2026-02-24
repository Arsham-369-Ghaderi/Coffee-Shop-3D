"use client"
import Image from "next/image"
import { motion } from 'motion/react';
import VactorImage from '../../../public/images/Vector-about.png';
import AboutImage from '../../../public/images/about-us.png';
import { ProfileData } from '../../ui/data/ProfileData';
import Star from '../../../public/images/icon-Star.png';

const MotionImage = motion(Image);

function AboutUsClient() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <Image src="/images/background-2.png" alt="همه چیز درباره کافه پرشین آسیا" fill priority className="object-cover -z-10" />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
          <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
        </div>

        <main className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-start justify-center mt-[-16vh] pr-[3vh]">
                <motion.h1 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hamrah text-[62px] text-[#78866B]">همه چیز درباره کافی شاپ پرشین آسیا</motion.h1>
                <motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="peyda-semibold text-[34px] text-[#78866B] leading-16 w-[600px] pr-3 mt-9">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </motion.h2>
                <div className="flex items-center justify-center gap-8 absolute mt-[65vh]">
                    {
                        ProfileData.map((pro) => (
                            <motion.div initial={{ opacity: 0, x: Number(pro.x), y: Number(pro.y) }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8 }} key={pro.id} className={`w-[226px] h-[235px] rounded-[10px] ${pro.background} profile-shadow ${pro.margin} flex flex-col items-center justify-center gap-2`}>
                                <Image alt="نظرات کافه پرشین آسیا" src={pro.image} className="w-[75px] h-[75px] rounded-full object-cover"/>
                                <h4 className={`text-[18px] ${pro.color} peyda-extrabold`}>{pro.name}</h4>
                                <h5 className="peyda-bold text-[14px] text-black w-[150px] text-center">{pro.comment}</h5>
                                <div className="flex items-center justify-center gap-2">
                                    {Array.from({ length: pro.stars }).map((_, i) => (
                                        <Image
                                            key={i}
                                            src={Star}
                                            alt="star"
                                            width={16}
                                            height={16}
                                            className="star-shadow"
                                        />
                                     ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div className="pr-[14vh]">
                <MotionImage  alt="وکتور کافه | کافه پینترستی | کافه پ3 بعدی | پرشین آسیا" src={VactorImage} className="w-[870px] h-[760px] mt-[7vh]"/>
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} alt="قهوه لاته | همه چیز درباره کلفه پرشین آسیا | خرید قهوه" src={AboutImage} className="w-[776px] h-[583px] mt-[-65vh] mr-[7vh]"/>
            </div>
        </main>
    </section>
  )
}

export default AboutUsClient