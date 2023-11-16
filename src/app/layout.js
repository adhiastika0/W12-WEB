import '@/components/navbar/navbar.js'
import '@/styles/global.css'
import Navbar from '@/components/navbar/navbar.js'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
