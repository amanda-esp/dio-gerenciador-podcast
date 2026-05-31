import type { PodcastInterface } from "../repository/podcast-interface";
import { repoPodcast } from "../repository/podcast-repository";

export const listarEpisodios = async ():Promise<PodcastInterface[]> => {
    const data = await repoPodcast()
    return data;
}