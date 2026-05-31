import type { PodcastInterface } from "./podcast-interface";

export interface PodcastDTO{
    statusCode: number,
    body: PodcastInterface[]
}