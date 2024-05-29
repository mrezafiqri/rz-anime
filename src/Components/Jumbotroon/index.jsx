import slides from "@/libs/slides"
import Image from "next/image"

const Jumbotroon = () => {

  return (
    <article className="relative rounded-3xl overflow-hidden ">
      <Image src={slides[3].image} alt="" className="h-[80vh] w-full object-cover object-center " />
      <div className="absolute top-0 left-0 right-0 z-[1] bg-gradient-to-r from-color-accent  to-color-dark/0 to-60% w-full h-full"></div>
    </article>
  )
}

export default Jumbotroon