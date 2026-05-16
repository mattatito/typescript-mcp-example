import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export async function createTestClient() {
    // Client to communicate with the MCP server running in src/index.ts
    const transport = new StdioClientTransport({
        command: 'node',
        args: [
            '--experimental-strip-types',
            'src/index.ts'
        ]
    })

    const client = new Client({
        name: 'Test client',
        version: '1.0.0'
    }, {
        capabilities: {}
    })

    await client.connect(transport)
    return client
}