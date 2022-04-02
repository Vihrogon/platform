import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.js";

const app = new Application();

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
