import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import render from "https://cdn.skypack.dev/preact-render-to-string@v5.1.12";
import { Home } from "./home.jsx";

const app = new Application();
const router = new Router();

router
  .get("/", (context) => {
    context.response.type = "html";
    context.response.body = "<!DOCTYPE html>\n" +
      render(Home(), { test: 123 }, { pretty: true });
  });

app.use(async (context, next) => {
  try {
    await context.send({
      root: Deno.cwd() + "/static",
      index: true,
    });
  } catch {
    next();
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({
  port: 3000,
  secure: true,
  certFile: "./tls/cert.pem",
  keyFile: "./tls/key.pem",
});
