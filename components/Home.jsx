/** @jsx h */
import { h } from "https://cdn.skypack.dev/preact";
import Page from "./Page.jsx";
import Login from "./Login.jsx";

export default function () {
  return (
    <Page>
      <Alpine>
        Useless content
      </Alpine>
      <Login />
    </Page>
  );
}

function Alpine({ children }) {
  return (
    <div>
      <div x-data="dropdown">
        <button
          className="border bg-indigo-600 text-white px-2 py-1 rounded m-2"
          x-on:click="toggle"
        >
          Expand
        </button>

        <span x-show="open">
          {children}
        </span>
      </div>
      <script>
        Alpine.data("dropdown", () => ({
          open: false,

          toggle() {
            this.open = !this.open;
          },
        }))
      </script>
    </div>
  );
}
