import { ReactNode } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

interface Props{
  children : ReactNode;
}

export function Layout({children} : Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}