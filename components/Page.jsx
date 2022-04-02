/** @jsx h */
import { h } from "https://cdn.skypack.dev/preact";

export default function ({ children, title }) {
  return (
    <html>
      <head>
        <title>Whatsupdog</title>
        <link rel="stylesheet" href="main.css" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <script src="//unpkg.com/alpinejs" defer></script>
        <script src="https://cdn.tailwindcss.com"></script>
        {
          /* <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        /> */
        }
      </head>
      <body>
        <header>
          <h1 className="text-3xl m-0 p-4 bg-lime-700">Whatsupdog</h1>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
