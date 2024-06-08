import Image from "next/image"

export default function ProfilePic() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[300px] h-[300px] xl:w-[690px] xl:h-[690px]">
        <Image
          src="/assets/profile_pic.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  )
}