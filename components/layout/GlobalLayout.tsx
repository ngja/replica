import { ReactNode } from "react"
import GlobalHead from "../head/GlobalHead"

interface GlobalLayoutProps {
  children: ReactNode
}

export default function GlobalLayout({children}: GlobalLayoutProps) {
  return (
    <>
      <GlobalHead/>
      <main>{children}</main>
    </>
  )
}