import axios from "axios"
import { useEffect, useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import "../sass/newsShowcase.scss"
import {datas} from "./../../src/news"

let myNews=datas[0].articles
const showNews=(news:any[], dispatch:any, dateSort:string, setDateSort:any)=>{
    return (
        <section className="newsShowcase ">
           <table className="">
               <thead>
           <tr className="mainTitle">
    <th>Company</th>
    <th>Source</th>
    <th className="authorMain">Author</th>
    <th className="title">Title</th>
    <th onClick={()=>{
        dispatch({payload:{news: news.reverse()}, type:"getNewsDetail"})
        if(dateSort==="inc")
        {
            
            setDateSort("dec")
        }
else
{
   
    setDateSort("inc")
}
    }}>Date 

    {dateSort==="inc" ?  <span className="material-icons">expand_more
</span> :  <span className="material-icons">
keyboard_arrow_up
</span>}
   
</th>
    <th className="url">Url</th>
  </tr>
  </thead>
  <tbody>
            { news.map((data:any, index:number)=>{
               
 return <tr>
                  <td className="image">
                      <img src={data.urlToImage} alt="" width="124px"/>
                  </td>
           <td  className="source">{data.source.name}</td>
           <td className="author">{data.author}</td>
           <td  className="title">{data.title}</td>
           <td   className="date">{data.publishedAt}</td>
           <td  className="url"><a href={data.url}>Full Details</a></td>

            </tr>
           
            })
            
           } </tbody>
         </table>

         <div className="smallView">
             <div onClick={()=>{
        dispatch({payload:{news: news.reverse()}, type:"getNewsDetail"})
        if(dateSort==="inc")
        {
            
            setDateSort("dec")
        }
else
{
   
    setDateSort("inc")
}
    }}>{dateSort==="inc" ?  <button className="waves-effect waves-light btn blue">sort by date</button> : <button className="waves-effect waves-light btn  blue">Unsort by date</button>  }</div>
            
         { news.map((data:any, id:number)=>{
          return <div className="detail card">
                 <div className="imgContainer">
<img src={data.urlToImage} alt="" width="224px"/>
<h5 className="blue white-color">Source: {data.source.name}</h5>
<h6>Author:{data.author}</h6>
                 </div>
                 <div className="others">
<h4>{data.title}</h4>
<p>Date:{data.publishedAt}</p>
<a href={data.url}>Full Details</a>
                 </div>
             </div>
           
            })}
         </div>
        </section>
        
    )
   
}
export default function NewsShowcase() {

    const dispatch = useDispatch()
    const [dateSort, setDateSort] = useState("inc")
 
    const newsData = useSelector((state: RootStateOrAny) => state.newsDetail)
   
   useEffect(() => {
    
         axios.get("https://newsapi.org/v2/everything?q=covid&pageSiz=100&apiKey=fabfc618385d4dc3a501709f13000d2d").then((res)=>{
             let data=res.data
             console.log(data.articles)
            
           
             dispatch({payload:{totalNews:data.articles, news: data.articles.slice(0,5), loading:false, page:1}, type:"getNewsDetail"})
         }).catch((err)=>console.log(err))
     
    
   }, [dispatch])

if(newsData.loading)
return <h1>loading</h1>
else
if(newsData.searchNews)
{
    if(newsData.searchNews.length)
   return  showNews(newsData.searchNews, dispatch, dateSort, setDateSort)
    else
    return <h3>No Result Found </h3>

}
else

 return showNews(newsData.news, dispatch, dateSort, setDateSort)


 
   
}
