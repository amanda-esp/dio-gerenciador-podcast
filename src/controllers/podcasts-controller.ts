import {IncomingMessage, request, ServerResponse} from 'http'
import { listarEpisodios } from '../services/listPodcast.service';
import { filterEpisodes } from '../services/filterEpisodes-service';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const todosEps = await listarEpisodios();
    
    response.writeHead(200, {"content-type": "application/json"});
    response.end(
        JSON.stringify(todosEps),
    );
}

export const getFilterEspisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const epsFiltrados = await filterEpisodes("flow");

    response.writeHead(200, {"content-type": "application/json"});
    response.end(
        JSON.stringify(epsFiltrados),
    );

}