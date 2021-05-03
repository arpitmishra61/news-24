
import {
  RootStateOrAny,
  useDispatch,
  useSelector,

} from "react-redux";
import "./../sass/pagination.scss";

export default function Pagination() {
  const newsDetail = useSelector((state: RootStateOrAny) => state.newsDetail);
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <div
        className="paginationContainer"
        onClick={(e: any) => {
          let page =Number( e.target.innerHTML);
          console.log(page)
          dispatch({
            type: "getNewsDetail",
            payload: {
              ...newsDetail,
              news: newsDetail.totalNews.slice((page-1)*5, page*5),
              page
            },
          });
        }}
      >
        <div className="seprator">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          
        </div>
        
      </div>
    </div>
  );
}
