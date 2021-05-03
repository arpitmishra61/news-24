export const getNews = (newsDetail: object) => (dispatch:  any) => {
  return dispatch({
    type: "getNewsDetail",
    payload: newsDetail,
  });
};

export const getNewsByDate = (dateOrder: boolean) => (dispatch : any) => {
  return dispatch({
    type: " getNewsByDate",
    payload: dateOrder,
  });
};
