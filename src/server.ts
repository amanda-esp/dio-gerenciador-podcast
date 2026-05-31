import * as http from 'http';
import { getFilterEspisodes, getListEpisodes } from "./controllers/podcasts-controller"


const port = process.env.PORT;
const server = http.createServer(
    async(request: http.IncomingMessage,response: http.ServerResponse) => {

        if(request.method === "GET" && request.url === "/api/list")
            await getListEpisodes(request, response);

        if(request.method === "GET" && request.url === "/api/filter/:name"){
            
            await getFilterEspisodes(request, response)
        }
    }
);

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
})