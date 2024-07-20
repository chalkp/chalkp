"use client"

import Head from "next/head"
import { useState } from "react"

enum ContactType {
  SELECT,
  CHULA,
  PERSONAL
}

export default function Contact() {

  const [contactType, setContactType] = useState(ContactType.SELECT);
  const [title, setTitle] = useState("chalkp.com: ~/contact");

  const setChula = () => {
    setContactType(ContactType.CHULA);
    setTitle("chalkp.com: ~/contact/chula");
  }

  const setPersonal = () => {
    setContactType(ContactType.PERSONAL);
    setTitle("chalkp.com: ~/contact/personal");
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="chalkp" />
        <meta name="description" content="contact Chalk Poomseetong" />
      </Head>
      <main>
        <section className="">
          <h1 className="font-bold font-saochingcha text-8xl">coming soon</h1>
        </section>
      </main>
    </>
  )
}

const _contact = () => {
  
}
