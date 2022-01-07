import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://tofpu.me',
                    site_name: 'A portfolio site for Tofpu',
                    images: [{
                        url: 'https://tofpu.me/preview.png',
                        alt: 'preview of the site',
                        type: 'image/png'
                    }]
                }}

                twitter={{
                    handle: '@Tofpu',
                    site: 'https://tofpu.me'
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
