import type { IncomingMessage, ServerResponse } from "http";
import { getFilterEspisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const urlPaths = async(reqMethod: string, baseUrl: string, request:IncomingMessage,response: ServerResponse) => {
    
    if(reqMethod === HttpMethods.GET && baseUrl === Routes.LIST)
        await getListEpisodes(response);
    
    if(reqMethod === HttpMethods.GET && baseUrl === Routes.EPISODE)    
        await getFilterEspisodes(request, response);
}