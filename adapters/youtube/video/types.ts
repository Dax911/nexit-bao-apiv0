
type PrimaryIdType = string;


export interface VideoData {
    id: PrimaryIdType;
    title: string;
    description: string;
    thumbnails: {
        default: {
            url: string;
            width: number;
            height: number;
        } 
        medium: {
            url: string;
            width: number;
            height: number;
        }
        high: {
            url: string;
            width: number;
            height: number;
        }
        standard: {
            url: string;
            width: number;
            height: number;
        }
        maxres: {
            url: string;
            width: number;
            height: number;
        }
    }
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
        title: string;
        description: string;
    }
    defaultAudioLanguage: string;
    contentDetails: {
        duration: string; //= "PT1M0S",
        dimension: string; //= "2d",
        definition: string; //= "hd",
        caption: string; //= "false",
        licensedContent: boolean; //= "false",
        regionRestriction: {
            allowed: string[]; //= ["US"],
            blocked: string[]; //= []
        }
        projection: string; //= "rectangular",
        hasCustomThumbnail: boolean; //= "false",
    }
    status: {
        uploadStatus: string; //= "processed",
        failureReason: string; //= "",
        rejectionReason: string; //= "",
        privacyStatus: string; //= "public",
    }
    
}


export interface Actions extends VideoData{

}

export interface GetVideoByIdAction {
    payload: id

export type VideoDataActions =
    | GetVideoByIdAction;


interface 