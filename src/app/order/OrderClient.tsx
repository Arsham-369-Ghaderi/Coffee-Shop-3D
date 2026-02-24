"use client";
import ButtonLevel2 from "@/ui/button/ButtonLevel2"
import ButtonLevel3 from "@/ui/button/ButtonLevel3"
import { CategoryData } from "@/ui/data/CategoryData"
import { OrderData } from "@/ui/data/OrderData"
import Image from "next/image"
import { motion } from "motion/react";


const MotionImage = motion(Image);

function OrderClient() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col gap-20 pt-36 items-center justify-center">
        <Image src="/images/background-1.png" alt="کافی شاپ آرشام" fill priority className="object-cover -z-10"/>
        <div className="absolute inset-0 z-0 pointer-events-none">
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
                <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
        </div>

        <div className="flex items-center justify-center gap-14">
            {
                OrderData.map((order) => (
                    <div key={order.id} style={{ boxShadow: `1px 1px 50px ${order.shadow}` }} className={`w-[285px] h-[308px] flex flex-col items-center justify-center rounded-[50px] ${order.background}`}>
                        <Image alt={order.name} src={order.image} className="w-[130px] h-[178px] order-image-shadow mt-[-10vh]"/>
                        <h1 className="hamrah text-[28px] text-white" style={{ textShadow: order.shadow2 }}>{order.name}</h1>
                        <h2 className="text-[#e6e6e6e3] peyda-bold text-[14px] text-center w-[180px] order-text-shadow" >{order.caption}</h2>
                        <h3 className="peyda-black text-[18px] text-white mt-3" style={{ textShadow: order.shadow2 }}>{order.price}</h3>
                        <ButtonLevel2/>
                    </div>
                ))
            }
        </div>
        <div className="flex flex-row-reverse items-center justify-center gap-16">
            {
                CategoryData.map((category) => (
                    <div key={category.id} className="w-[361px] h-[260px] rounded-[50px] bg-[#7A5230]">
                        <div className="flex">
                           <Image alt={category.name} src={category.image} className={`catgory-image-shadow absolute  ${category.width}`}/>
                           <h1 className="text-white hamrah text-[26px] mr-[20vh] mt-[4vh]">{category.name}</h1>
                        </div>
                        <p className="text-[15px] w-[300px] peyda-semibold mt-[4vh] mr-[4vh] tracking-[3%] leading-7 text-[#ebebebea]">{category.description.length > 90 ? category.description.slice(0, 90) + "..." : category.description}</p>
                        <ButtonLevel3/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OrderClient