import type { PodcastDTO } from "../model/podcast-dto";
import { repoPodcast } from "../repository/podcast-repository"
import { StatusCode } from "../utils/server-status-response";


export const filterEpisodes = async(podcastName: string | undefined):Promise<PodcastDTO> =>{

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString)

    responseFormat = {
        statusCode: (data.length !== 0 ? StatusCode.OK : StatusCode.NoContent),
        body: data
    }
    
    return responseFormat
}