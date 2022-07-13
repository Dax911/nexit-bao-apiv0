// index.ts
//Nexit "Do you have what IT takes to pick the NEXT super star content creator lineup?"


import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Hello World!");
});

app.get("/channel/:channel", (ctx) => {
  return ctx.sendText("Hello " + ctx.params.channel);
}
);

app.get("/pk/:pokemon", (ctx) => {
  const getData = fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.params.pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      return ctx.sendText(
        `${data.name} is a ${data.height} units tall and ${data.weight} units heavy and is of type ${data.types[0].type.name}`
      );
    }
    );
  return getData;
}
);



app.post("/post", async (ctx) => {
    const json = await ctx.req.json();
    return ctx.sendPrettyJson(json);
}
);

app.listen();