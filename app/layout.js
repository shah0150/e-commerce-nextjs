
// import './global.css'

export default function Layout({children}) {
  return (
    <html>
      <head>
        <title>E-Commerce App</title>
      </head>
      <body>
        <header>
          <h1>
            Welcome to the site
          </h1>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}