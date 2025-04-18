import { Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-blog/style.css';
import React from 'react';
import { Metadata } from 'next';
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: {
        default: 'Anthony Berg\'s Portfolio',
        template: '%s | Anthony Berg',
    },
    description: 'My own personal portfolio including for my own projects related to computer science',
    openGraph: {
        url: 'https://anthonyberg.io',
        siteName: 'Anthony Berg\'s Website',
        locale: 'en_GB',
        type: 'website',
        images: [{
            url: '/images/kgxtunnel.jpg',
        }]
    }
}

const YEAR = new Date().getFullYear()

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head backgroundColor={{dark: '#0f172a', light: '#fefce8'}} />
        <body>
        <Layout>
            <Navbar pageMap={await getPageMap()}>
                {/*<Search placeholder={"Search..."}/>*/}
                <ThemeSwitch />
            </Navbar>

            {children}

            <Footer />
        </Layout>
        </body>
        </html>
    );
}