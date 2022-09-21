import { useParams } from "react-router-dom";
import PageNotFound from "./NotFound";
import articles from "./article-content";


const Article = () => {
    
    const params = useParams();
    const articleId = params.articleId;

    //finding the article with artical name matches with articleId
    const article = articles.find(article => article.name === articleId)

    if(!article) {
        return <PageNotFound />
    }
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map( (paragraph,i) => (
                <p key={i}>{paragraph}</p>
                
            ))}
        </>
    );
}


export default Article;