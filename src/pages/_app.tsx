import NavBar from "@/components/NavBar"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
