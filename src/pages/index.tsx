"use client"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import Head from "next/head"

export default function Home() {

  const { t } = useTranslation(['home', 'translation'])

  return (
    <>
      <Head>
        <title>Sorrawit Poomseetong</title>
        <meta name="title" content="chalkp" />
        <meta name="description" content="Sorrawit Poomseetong" />
      </Head>
      <main>
        <section className="h-full">
          <div className="container mx-auto h-full">
            <div className="pb-4 border-b-4 border-b-bkk-bright-green">
              <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
                <div className="text-center xl:text-left order-2 xl:order-none">
                  <div className="text-bkk-bright-green font-bold xl:text-8xl text-6xl">
                    <h1>{t('home:name')}</h1>
                    <h1>{t('home:surname')}</h1>
                  </div>
                  <div className="max-w-[420px] mb-9 font-normal">
                    <p className="font-ChulaCharasNew text-[20px]">
                      Computer Engineering Chulalongkorn University
                    </p>
                    <p className="font-saochingcha text-[20px]">
                      &quot;Clowns together powerful.&quot; -chalk
                    </p>
                  </div>
                </div>
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
