"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { CoffeeSupplies } from '../../ui/data/CoffeeSuppliesData';

const MotionImage = motion(Image);

function CoffeeSuppliesClient() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <Image src="/images/background-3.png" alt="کافی شاپ آرشام" fill priority className="object-cover -z-10" />
        
        <div className="absolute inset-0 z-0 pointer-events-none">
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-up.png" width={314} height={310} className="absolute top-0 right-0 w-[280px] h-[290px]"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-up.png" width={350} height={309} className="absolute top-0 left-0 w-[290px] h-80"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-right-bottom.png" width={233} height={256} className="absolute bottom-0 right-0"/>
            <MotionImage initial={{ opacity: 0, scale: 0.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} alt="leaf" src="/images/green-left-bottom.png" width={189} height={216} className="absolute bottom-0 left-0"/>
        </div>

        <main className='grid grid-cols-3 items-center justify-center gap-x-48 gap-y-10 pr-12 pt-12'>
          {
            CoffeeSupplies.map((sup) => (
              <motion.article initial={{ opacity: 0, x: Number(sup.x), y: Number(sup.y) }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} key={sup.id} className='flex flex-col items-center justify-center gap-2'>

                <Image alt='خرید تجهیزات کافه حرفه ای ارزان اقتصادی' src={sup.image} className={`${sup.size}`}/>
                <h1 className={`text-[30px] hamrah ${sup.color}`}>{sup.title}</h1>
                <h2 className={`${sup.color2} peyda-extrabold`}>{sup.subTitle}</h2>

                {sup.button.map((btn) => (
                  <button key={btn.id} style={{ boxShadow: `1px 1px 10px ${btn.shadow}` }} className={`flex gap-1.5 w-[193px] h-[41px] rounded-[10px] items-center justify-center border ${btn.stroke} cursor-pointer hover:opacity-70 hover:-translate-x-1 hover:translate-y-1.5 duration-300 hover:scale-95`}>
                  <span className={`peyda-black ${btn.color} mt-1.5`}>مشاهده همه</span>
                  <Image alt='ابزار آلات باریستا پرشین آسیا' src={btn.icon} className='w-[17px] h-[17px]'/>
                </button>
                ))}

              </motion.article>
            ))
          }
        </main>
    </section>
  )
}

export default CoffeeSuppliesClient