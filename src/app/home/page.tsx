import Image from "next/image"


function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/images/background-1.png"
        alt="کافی شاپ آرشام"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Decorative Leaves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          alt="leaf"
          src="/images/green-right-up.png"
          width={314}
          height={310}
          className="absolute top-0 right-0 w-[280px] h-[290px]"
        />
        <Image
          alt="leaf"
          src="/images/green-left-up.png"
          width={350}
          height={309}
          className="absolute top-0 left-0 w-[290px] h-[320px]" 
        />
        <Image
          alt="leaf"
          src="/images/green-right-bottom.png"
          width={233}
          height={256}
          className="absolute bottom-0 right-0"
        />
        <Image
          alt="leaf"
          src="/images/green-left-bottom.png"
          width={189}
          height={216}
          className="absolute bottom-0 left-0"
        />
      </div>
      </div>
  )
}

export default Home