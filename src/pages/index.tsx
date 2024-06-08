"use client"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import { SiProtonmail } from "react-icons/si"

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
          <div className="container mx-auto h-full"> {/* div 1 */}
            <div className="pb-4 border-b-4 border-b-bkk-bright-green"> {/* div 2 */}
              <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8"> {/* div 3 */}

                {/* introduction */}
                <div className="text-center xl:text-left order-2 xl:order-none"> {/* div intro */}
                  <div className="text-bkk-bright-green font-bold xl:text-8xl text-6xl"> {/* div name */}
                    <h1>{t('home:name')}</h1>
                    <h1>{t('home:surname')}</h1>
                  </div>
                  <div className="max-w-[420px] mb-9 font-normal">
                    <p className="font-ChulaCharasNew text-[20px]"> {/* university flex */}
                      Computer Engineering Chulalongkorn University
                    </p>
                    <p className="font-saochingcha font-medium text-[20px]">
                      {t('home:quote')}
                    </p>
                  </div>
                  {/* contacts and social */}
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Link
                      href="/contact"
                      className="text-xl px-4 py-2 border-2 rounded-full text-bkk-dark-green border-bkk-bright-green
                      hover:bg-bkk-bright-green hover:text-bkk-background-white hover:duration-300"> {/* what the fuck */}
                      <span>contact me</span>
                    </Link>
                    <Social />
                  </div>

                </div>{/* /div intro */}

                {/* clown pic */}
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

              </div> {/* /div 3 */}
            </div> {/* /div 2 */}
          </div> {/* /div 1 */}
        </section>
      </main>
    </>
  )
}

function Social() {
  const socials = [
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/chalkp/"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/chalkp/"
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/chalk.cpp/"
    },
    {
      icon: <SiProtonmail />,
      href: "mailto:contact@chalkp.com"
    },
  ]

  return (
    <div className="xl-mb-0 flex gap-6">
      { socials.map(({icon, href}, index) => (
        <Link key={index} href={href} className="w-10 h-10 justify-center flex items-center border-2 rounded-full text-bkk-dark-green border-bkk-bright-green
        hover:bg-bkk-bright-green hover:text-bkk-background-white hover:duration-300">
          {icon}
        </Link>
      ))
    }
    </div>
  )
}
