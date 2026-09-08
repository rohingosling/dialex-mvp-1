// ---------------------------------------------------------------------------------------------------------------------
// Project: Dialex customer prototype
// Version: 1.0
// Date: 2026-09-09
// Author: Rohin Gosling
// Description: Serve only the prototype assets on the local loopback interface.
// ---------------------------------------------------------------------------------------------------------------------

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIRECTORY     = path.dirname ( fileURLToPath ( import.meta.url ) );
const PORT          = Number ( process.env.DIALEX_PORT ?? "4173" );
const ALLOWED_FILES = new Map ( [ [ "/", "index.html" ], [ "/index.html", "index.html" ], [ "/styles.css", "styles.css" ], [ "/app.js", "app.js" ] ] );
const CONTENT_TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };

const server = createServer ( async function ( request, response )
{
    const pathname = new URL ( request.url, "http://127.0.0.1" ).pathname;
    const filename = ALLOWED_FILES.get ( pathname );
    if ( !filename || ![ "GET", "HEAD" ].includes ( request.method ) )
    {
        response.writeHead ( 404 );
        response.end ( "Not found" );
        return;
    }
    try
    {
        const content = await readFile ( path.join ( DIRECTORY, filename ) );
        response.writeHead ( 200, { "Content-Type": CONTENT_TYPES [ path.extname ( filename ) ], "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } );
        response.end ( request.method === "HEAD" ? undefined : content );
    }
    catch
    {
        response.writeHead ( 500 );
        response.end ( "Could not load prototype asset" );
    }
} );

server.on ( "error", function ( error )
{
    console.error ( error.code === "EADDRINUSE" ? `Port ${PORT} is in use. Open index.html directly or stop the earlier Dialex server.` : error.message );
    process.exitCode = 1;
} );

server.listen ( PORT, "127.0.0.1", function ()
{
    console.log ( `Dialex prototype: http://127.0.0.1:${server.address ().port}` );
} );
