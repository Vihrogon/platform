import { Router } from "https://deno.land/x/oak/mod.ts";
import render from "https://cdn.skypack.dev/preact-render-to-string@v5.1.12";
import Home from "./components/home.jsx";

const router = new Router();

router.get("/", (context) => {
  context.response.type = "html";
  context.response.body = "<!DOCTYPE html>\n" +
    render(Home(), { test: 123 }, { pretty: true });
});

export default router;
