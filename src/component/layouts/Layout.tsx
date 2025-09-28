import { ReactNode } from "react"
import { Footer } from "@/component"
import { Header } from "@/component"

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