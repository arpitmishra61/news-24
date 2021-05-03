const initialState = {
  news: [],
  page: 1,
  loading:true,
  searchNews:false
};

const newsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "getNewsDetail":
      return { ...state,  ...action.payload };

      

   

    default:
      return state;
  }
};

export default newsReducer;
