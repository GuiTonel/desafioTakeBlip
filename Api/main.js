const app = require( './src/app' )

const PORT =  process.env.PORT || 3333

app.listen( PORT, (err)=> {
    if ( err ) console.log( err )
    else console.log( `Server online on PORT: ${PORT}.` )
} )