
export const getSearchResults = (query : string) => (dispatch : any) => {

    return dispatch({
      type:"getSearchResult",
        payload: query
    })
}


