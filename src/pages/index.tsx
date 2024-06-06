"use client"
import { useTranslation } from "react-i18next"
import Image from "next/image"

export default function Home() {

  const { t } = useTranslation(['home', 'translation'])

  return (
    <main>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="pb-4 border-b-4 border-b-bkk-bright-green">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
              <div className="text-center xl:text-left order-2 xl:order-none">
                <h1 className="text-bkk-bright-green font-bold text-9xl">
                  {t('home:name')}
                </h1>
                <h1 className="text-bkk-bright-green font-bold text-8xl">
                  {t('home:surname')}
                </h1>
                <div className="max-w-[420px] mb-9 font-normal">
                  <p className="font-ChulaCharasNew text-[20px]">
                    Computer Engineering Chulalongkorn University
                  </p>
                  <p className="font-saochingcha text-[20px]">
                    "Clowns together powerful." -chalk
                  </p>
                </div>
              </div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <div className="w-full h-full relative">
                  <div className="w-[420px] h-[420px] xl:w-[690px] xl:h-[690px]">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
