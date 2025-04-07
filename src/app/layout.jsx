import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Femi Ayesoro',
    default:
      'Femi Ayesoro - Software Engineer, Problem-Solver, and Content Creator',
  },
  description:
    "I'm Femi Ayesoro, a Software Engineer, Problem-Solver, and Content Creator passionate about building scalable web applications and sharing knowledge. With expertise in full-stack development, I specialize in Golang and React. I enjoy creating innovative solutions, mentoring developers, and contributing to the tech ecosystem.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
