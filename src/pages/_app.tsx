import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import GlobalLayout from "@/components/layout/GlobalLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <GlobalLayout>
        <Component {...pageProps}/>
      </GlobalLayout>
  )
}
