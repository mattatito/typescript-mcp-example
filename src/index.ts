import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import {server} from "./mcp.ts";

async function main() {
    // STDIO: transport is a simple transport that uses standard input and output to communicate with the client.
    // HTTP: transport is a transport that uses HTTP to communicate with the client. It can be used in serverless environments like AWS Lambda or Cloudflare Workers.
    // SSE: transport is a transport that uses Server-Sent Events to communicate with the client. It can be used in environments that support SSE, like modern browsers.
    const transport = new StdioServerTransport()
    await server.connect(transport)
    console.error('Encrypt MCP Server running on stdio')
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
