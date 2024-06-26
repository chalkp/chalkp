import NavBar from "@/components/NavBar"
import "@/styles/globals.css"
import "@/i18n"
import type { AppProps } from "next/app"
import Footer from "@/components/Footer"

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
