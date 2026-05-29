import {IncomingMessage, ServerResponse} from 'http'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {"content-type": "application/json"});
    response.end(
        JSON.stringify(
            {
                "podcastName": "flow",
                "epsodeName": "CBUM - Flow #319",
                "cover": "https://www.blip.ai/blog/wp-content/uploads/2018/11/1-1024x310.png",
                "link": "https://www.blip.ai/blog/wp-content/uploads/2018/11/1-1024x310.png",
                "categories" : ["Saude", "Fisiculturismo"]
            },
        )
    );
}