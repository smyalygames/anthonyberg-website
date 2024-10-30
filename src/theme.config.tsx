import Link from "next/link";

const YEAR = new Date().getFullYear()

const websiteMeta = {
  title: 'Anthony Berg\'s Portfolio',
  description: 'My own personal portfolio including for my own projects related to computer science',
  image: '/images/kgxtunnel.jpg',
}

export default {
  footer: (
    <footer>
      <small>
          <Link href={"https://github.com/smyalygames/anthonyberg-website/blob/main/LICENSE"}><time>{YEAR}</time> © Anthony Berg.</Link>
          <a href={"https://github.com/smyalygames/anthonyberg-website/"}>GitHub Repository</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  head: ({ title, meta } : { title: string; meta: any }) => (
    <>
      <link
        rel="preload"
        href="/fonts/Inter-roman.latin.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {meta.description && (
        <meta name="description" content={meta.description}/>
      )}
      {meta.tag && <meta name="keywords" content={meta.tag}/>}
      {meta.author && <meta name="author" content={meta.author}/>}

      {/*og meta*/}
      <meta name="robots" content="follow, index"/>
      <meta name="description" content={websiteMeta.description}/>
      <meta property="og:site_name" content={websiteMeta.title}/>
      <meta property="og:description" content={websiteMeta.description}/>
      <meta property="og:title" content={websiteMeta.title}/>
      <meta property="og:image" content={websiteMeta.image}/>
      <meta name="twitter:card" content="summary_large_image"/>
      {/*<meta name="twitter:site" content="@yourname" />*/}
      <meta name="twitter:title" content={websiteMeta.title}/>
      <meta name="twitter:description" content={websiteMeta.description}/>
      <meta name="twitter:image" content={websiteMeta.image}/>
    </>
  )
}
