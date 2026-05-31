import type { PodcastDTO } from "../model/podcast-dto";
import { repoPodcast } from "../repository/podcast-repository";
import { StatusCode } from "../utils/server-status-response";

export const listarEpisodios = async () => {

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    }

    const data = await repoPodcast()
    
    responseFormat = {
        statusCode: (data.length !== 0 ? StatusCode.OK : StatusCode.NoContent),
        body: data
    }
    
    return responseFormat;
}