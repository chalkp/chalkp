"use client"

import { useTranslation } from "react-i18next"
import Head from "next/head"
import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa"
import ProfilePic from "@/components/ProfilePic"
import i18n from "@/i18n"
import { useState } from "react"

export default function Home() {
  const { t } = useTranslation(['home', 'translation'])
  const language = i18n.language
  
  const [name, setName] = useState('name')

  const toggleName = () => {
    if (name === 'name') {
      setName('chalk')
      return
    }
    setName('name')
  }
  
  return (
    <>
      <Head>
        <title>chalkp.com: ~</title>
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
                  <div className={`text-bkk-bright-green font-bold xl:text-8xl ${(language == 'th')? 'text-7xl' : 'text-6xl'}`}> {/* div name */}
                    <button onClick={toggleName}>
                      <h1>{t(`home:${name}`)}</h1>
                    </button>
                    <h1>{t('home:surname')}</h1>
                  </div>
                  <div className="max-w-[420px] mb-9 font-normal">
                    <p className="font-ChulaCharasNew text-[20px]"> {/* university flex */}
                      {t('home:university')}
                    </p>
                    <p className="font-saochingcha font-medium text-[20px]">
                      {t('home:quote')}
                    </p>
                  </div>
                  {/* contacts and social */}
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Link
                      href="https://youtu.be/dQw4w9WgXcQ"
                      className="text-xl px-4 py-2 border-2 rounded-full text-bkk-dark-green border-bkk-bright-green
                      hover:bg-bkk-bright-green hover:text-bkk-background-white hover:duration-300"> {/* what the fuck */}
                      <span>{t('home:contact')}</span>
                    </Link>
                    <Social />
                  </div>

                </div>{/* /div intro */}

                {/* clown pic */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                  <ProfilePic />
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
      icon: <FaEnvelope />,
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
