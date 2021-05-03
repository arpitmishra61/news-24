import { useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import "./../sass/search.scss"
const filterNews=(searchQuery: string, news: any[])=>{

return news.filter((data)=> String(data.title).toLowerCase().includes(searchQuery.toLowerCase())
)

}
export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch()
    const newsDetail = useSelector((state:RootStateOrAny) => state.newsDetail)
 
    
    
    return (
        <div className="search container ">
            <input type="text" placeholder="Search News"value={searchQuery} onChange={(e)=>{
                console.log(e.target.value)
let searchQueryValue=e.target.value
                setSearchQuery( searchQueryValue)
                let filteredNews=null
                if(searchQuery.length)
                filteredNews= filterNews(searchQueryValue, newsDetail.news)
              
console.log(searchQuery.length)
              
                dispatch({type:"getNewsDetail", payload:{...newsDetail,searchNews:filteredNews}})

            }} />
        </div>
    )
}
