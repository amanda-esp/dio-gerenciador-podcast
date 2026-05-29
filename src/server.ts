import * as http from 'http';
import { getListEpisodes } from "./controllers/podcasts-controller"


const port = process.env.PORT;
const server = http.createServer(
    async(request: http.IncomingMessage,response: http.ServerResponse) => {

        if(request.method === "GET")
            await getListEpisodes(request, response);
    }
);

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
})