// index.ts
//Nexit "Do you have what IT takes to pick the NEXT super star content creator lineup?"

import Bao from "baojs";


GAPI = process.env.GOOGLE_API_KEY;

const app = new Bao();

app.get( "/", ( ctx ) => {
  return ctx.sendText( "Hello World!" );
} );

app.get( "/channel/:channel", ( ctx ) => {
  return ctx.sendText( "Hello " + ctx.params.channel );
}
);

app.get( "/yt/:search", ( ctx ) => {
  const getData = fetch( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${ctx.params.search}&key=${GAPI}` )
    .then( res => res.json() )
    .then( data => {
      return ctx.sendText( data.items[0].snippet.title );
    }
    );
    return getData;
}
);



  app.get( "/pk/:pokemon", ( ctx ) => {
    const getData = fetch( `https://pokeapi.co/api/v2/pokemon/${ctx.params.pokemon}` )
      .then( ( res ) => res.json() )
      .then( ( data ) => {
        return ctx.sendText(
          `${data.name} is a ${data.height} units tall and ${data.weight} units heavy and is of type ${data.types[0].type.name}`
        );
      }
      );
    return getData;
  }
  );


  app.get( "/q/quote", ( ctx ) => {
    const getData = fetch( `https://api.quotable.io/random` )
      .then( ( res ) => res.json() )
      .then( ( data ) => {
        return ctx.sendText(
          `${data.content} - ${data.author}`
        );
      }
      );
    return getData;
  }
  );



  app.post( "/post", async ( ctx ) => {
    const json = await ctx.req.json();
    return ctx.sendPrettyJson( json );
  }
  );

  app.listen();