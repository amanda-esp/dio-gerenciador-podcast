import { repoPodcast } from "../repository/podcast-repository"


export const filterEpisodes = async(podcastName: string) =>{
    const data = await repoPodcast(podcastName)
    return data
}