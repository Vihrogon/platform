/** @jsx h */
import { h } from "https://cdn.skypack.dev/preact";

export const Home = function () {
  return (
    <Page title="Whatsupdog">
      <h1 className="text-3xl m-2">Hello world</h1>
      <Button>
        Useless button
      </Button>
      {test}
      <div x-data="{ open: false }">
        <button x-on:click="open = open ? false : true">Expand</button>

        <span x-show="open">
          Content...
        </span>
      </div>
    </Page>
  );
};

function Button({ children }) {
  return (
    <button className="border bg-indigo-600 text-white px-2 py-1 rounded m-2">
      {children}
    </button>
  );
}

function Page({ children, title }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="main.css" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
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
        {children}
      </body>
    </html>
  );
}
