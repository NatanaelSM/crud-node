import { randomUUID } from "node:crypto";

export class DatabaseMemory{

    #videos = new Map();

    list(){
        return Array.from(this.#videos.entries()).map((video)=>{
            const id = video[0]
            const data = video[1]
            return {
                id,
                ...data
            }
        })
    } 

    add(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video)
    }

    update(videoId, video){

        this.#videos.set(videoId, video)

    }

    delete(videoId){
        this.#videos.delete(videoId);
    }

}