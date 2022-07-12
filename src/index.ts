// index.ts
import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Hello World!");
});

app.get("/channel/:channel", (ctx) => {
  return ctx.sendText("Hello " + ctx.params.channel);
}
);

app.post("/post", async (ctx) => {
    const json = await ctx.req.json();
    return ctx.sendPrettyJson(json);
}
);

app.listen();