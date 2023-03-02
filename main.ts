import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

const serverPort = parseInt(Deno.env.get("DENO_SERVER_PORT") || "3003");
console.log("http server started on:", serverPort);
await app.listen({ port: serverPort });
