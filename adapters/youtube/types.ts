/* the Youtube adapter */

type YoutubeVideoData = {
    kind: string //= "youtube#video",
    etag: any // dont really care about this or know what it is
    id: string
    snippet: {
        publishedAt: string //= "2020-01-01T00:00:00.000Z",
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: {
                url: string
                width: number
                height: number
            }
            medium: {
                url: string
                width: number
                height: number
            }   
            high: {
                url: string
                width: number
                height: number
            }
            standard: {
                url: string
                width: number
                height: number
            }
            maxres: {
                url: string
                width: number
                height: number
            }
        }
        channelTitle: string
        tags: string[]
        categoryId: string
        liveBroadcastContent: string
        defaultLanguage: string
        localized: {
            title: string
            description: string
        }
        defaultAudioLanguage: string
    }

    contentDetails: {
        duration: string //= "PT1M0S",
        dimension: string //= "2d",
        definition: string //= "hd",
        caption: string //= "false",
        licensedContent: boolean //= "false",
        regionRestriction: {
            allowed: string[] //= ["US"],
            blocked: string[] //= []
        }
        projection: string //= "rectangular",
        hasCustomThumbnail: boolean //= "false",
    }
    status: {
        uploadStatus: string //= "processed",
        failureReason: string //= "",
        rejectionReason: string //= "",
        privacyStatus: string //= "public",
        publishAt: string //= "2020-01-01T00:00:00.000Z",
        license: string //= "youtube",
        embeddable: boolean //= "true",
        publicStatsViewable: boolean //= "true",
        madeforKids: boolean //= "false",
        selfDeclaredMadeForKids: boolean //= "false",
    }

    statistics: {
        viewCount: number //= 0,
        likeCount: number //= 0,
        dislikeCount: number //= 0,
        favoriteCount: number //= 0,
        commentCount: number //= 0,
    }   
    

        
}

type FetchYoutubeChannelDatabyId = {
    getChannelNameById: (id: string) => Promise<string>
    getChannelSubscriberCountById: (id: string) => Promise<number>
    getChannelVideoCountById: (id: string) => Promise<number>
    getChannelDescriptionById: (id: string) => Promise<string>
    getChannelThumbnailById: (id: string) => Promise<string>
    getChannelIdByVideoId: (id: string) => Promise<string>
    getChannelbyPlaylistId: (id: string) => Promise<string>
}

type FetchYoutubeVideoDatabyId = {
    getVideoTitleById: (id: string) => Promise<string>
    getVideoDescriptionById: (id: string) => Promise<string>
    getVideoThumbnailById: (id: string) => Promise<string>
    getVideoDurationById: (id: string) => Promise<string>
    getVideoDimensionById: (id: string) => Promise<string>
    getVideoDefinitionById: (id: string) => Promise<string>
    getVideoCaptionById: (id: string) => Promise<string>
    getVideoLicensedContentById: (id: string) => Promise<string>
    getVideoRegionRestrictionsById: (id: string) => Promise<string>
    getVideoProjectionById: (id: string) => Promise<string>
    getVideoHasCustomThumbnailById: (id: string) => Promise<string>
    getVideoPublishAtById: (id: string) => Promise<string>
    getVideoLicenseById: (id: string) => Promise<string>
    getVideoEmbeddableById: (id: string) => Promise<string>
    getVideoPublicStatsViewableById: (id: string) => Promise<string>
    getVideoMadeforKidsById: (id: string) => Promise<string>
    getVideoSelfDeclaredMadeForKidsById: (id: string) => Promise<string>

}

type FetchYoutubeDatabyId = {
    getVideo: (id: string) => Promise<Response>;
    getVideoComments: (id: string) => Promise<Response>;
    getVideoStatistics: (id: string) => Promise<Response>;
    getVideoRelated: (id: string) => Promise<Response>;
    getVideoLikes: (id: string) => Promise<Response>;
    getVideoDislikes: (id: string) => Promise<Response>;
    getVideoViews: (id: string) => Promise<Response>;
    getVideoSubscribers: (id: string) => Promise<Response>;
    getVideoDescription: (id: string) => Promise<Response>;
    getVideoTitle: (id: string) => Promise<Response>;
    getVideoThumbnail: (id: string) => Promise<Response>;
    getVideoChannel: (id: string) => Promise<Response>;
    getVideoChannelStatistics: (id: string) => Promise<Response>;
    getVideoChannelSubscribers: (id: string) => Promise<Response>;
    getVideoChannelViews: (id: string) => Promise<Response>;
    getVideoChannelDescription: (id: string) => Promise<Response>;
    getVideoChannelTitle: (id: string) => Promise<Response>;
    getVideoChannelThumbnail: (id: string) => Promise<Response>;
    getVideoChannelBanner: (id: string) => Promise<Response>;
    getVideoChannelCountry: (id: string) => Promise<Response>;
    getVideoChannelLanguage: (id: string) => Promise<Response>;
    getVideoChannelCreatedAt: (id: string) => Promise<Response>;
    getVideoChannelUpdatedAt: (id: string) => Promise<Response>;
    getVideoChannelVideos: (id: string) => Promise<Response>;
    getVideoChannelPlaylists: (id: string) => Promise<Response>;
    getVideoChannelSubscriptions: (id: string) => Promise<Response>;
    getVideoChannelFavorites: (id: string) => Promise<Response>;
    getVideoChannelUploads: (id: string) => Promise<Response>;
    getVideoChannelLikes: (id: string) => Promise<Response>;
    getVideoChannelDislikes: (id: string) => Promise<Response>;
    getVideoChannelComments: (id: string) => Promise<Response>;
    getVideoChannelRelated: (id: string) => Promise<Response>;
    getVideoChannelVideosStatistics: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsViews: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsLikes: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsDislikes: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsComments: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsFavorites: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsLikesPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsDislikesPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsViewsPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsCommentsPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsSubscribers: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsSubscribersPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsSubscriptions: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsSubscriptionsPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsVideos: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsPlaylists: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsUploads: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsUploadsPerMillion: (id: string) => Promise<Response>;
    getVideoChannelVideosStatisticsVideosPerMillion: (id: string) => Promise<Response>;
}
