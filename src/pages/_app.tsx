import { Layout } from "@/components";
import "@/styles/globals.css";
import "@/styles/icons.css";

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import type { AppProps } from "next/app";
import { Lato, Quicksand } from 'next/font/google'
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastContainer , Bounce } from 'react-toastify';

import { useState } from "react";
import { ModalContextProvider } from "@/store/ModalContext";


const quicksand = Quicksand({
  subsets: ['latin']
});

const lato = Lato({
  weight: ['100' , '300' , '400'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: 0,
        staleTime: 60 * 1000,
      }
    }
  }));

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily}, sans-serif;
          --font-lato: ${lato.style.fontFamily}, sans-serif;
        }
      `}</style>

      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ModalContextProvider>
            <div id={"portal"}></div>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
            </Layout>
          </ModalContextProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
