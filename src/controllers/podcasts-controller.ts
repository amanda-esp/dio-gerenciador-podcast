import {IncomingMessage, ServerResponse} from 'http'
import { listarEpisodios } from '../services/listPodcast.service';
import { filterEpisodes } from '../services/filterEpisodes-service';
import { ContentType } from '../utils/content-types';
import type { PodcastDTO } from '../model/podcast-dto';

export const getListEpisodes = async (response: ServerResponse) => {
    
    const todosEps: PodcastDTO = await listarEpisodios();
    
    response.writeHead(todosEps.statusCode, {"content-type": "application/json"});
    response.write(JSON.stringify(todosEps.body))
    response.end();
}

export const getFilterEspisodes = async (request: IncomingMessage, response: ServerResponse) => {


    const epsFiltrados:PodcastDTO = await filterEpisodes(request.url);

    response.writeHead(epsFiltrados.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(epsFiltrados.body))
    response.end();

}