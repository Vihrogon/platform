import { Application, helpers, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/account", (ctx) => {
  ctx.response.body = "Received a GET HTTP method";
});

router.post("/account", async ({ request, response }) => {
  let body, success = false, data = {};
  try {
    body = await request.body({ type: "json" }).value;
    success = true;
    data = await body;
  } catch (error) {
    data = error;
  }

  response.body = { success, data };
});

app.use(router.allowedMethods());
app.use(router.routes());

await app.listen({
  port: 3000,
  secure: true,
  certFile: "./tls/cert.pem",
  keyFile: "./tls/server.key",
});
