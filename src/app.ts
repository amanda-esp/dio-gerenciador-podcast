import http from 'http'
import { urlPaths } from './url-paths';
import { HttpMethods } from './utils/http-methods';

export const app = async(request: http.IncomingMessage,response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0] || "";
    const reqMethod = request.method || HttpMethods.GET;

    await urlPaths(reqMethod,baseUrl,request,response)
    
}