import fs from "fs" //biblioteca com funções para manipulação de arquivos
import path from "path"
import type { PodcastInterface } from "./podcast-interface";

const pathData = path.join(__dirname, "../repository/podcasts.json")

export const repoPodcast = async(podcastName?: string) =>{
    
    const data = fs.readFileSync(pathData, "utf-8"); //readFileSync: só executa a próxima linha após terminar de ler o arquivo
    let json =  JSON.parse(data);
    
    if(podcastName){
        json = json.filter((podcast: PodcastInterface) => podcast.podcastName === podcastName)
    }
    
    return json
}   