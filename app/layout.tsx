import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Golden Asesores',
    description: 'Asesores Tributarios y Contables',
    icons: {
        icon: '/golden-logo-11.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <body className={`${inter.className} font-montserrat`}>{children}</body>
        </html>
    )
}
