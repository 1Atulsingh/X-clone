import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <GoogleOAuthProvider clientId='460974944684-kk1ip32botrujn04be1a8714nvgrhg4k.apps.googleusercontent.com'>
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  <Toaster />
  </div>
}
