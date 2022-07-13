
export interface ISearchAction {
    type: string;
    payload: any;
}

interface SearchVideosByKeywordActions extends ISearchAction {
    type: "SEARCH_VIDEOS_BY_KEYWORD";
    payload: {
        keyword: string;
    };
}

const stuffs = () => {
    return (
        "Hello"
        )
    };
const stuff = stuffs();

export function searchVideosByKeyword(keyword: ISearchAction): SearchVideosByKeywordActions {
    return {
        type: 'SEARCH_VIDEOS_BY_KEYWORD',
        payload: {
            keyword: stuff
        }

    };
}
