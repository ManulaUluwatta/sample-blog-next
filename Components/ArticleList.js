import articlesStyles from '../styles/Articles.module.css'
import ArticlesItem from './ArticlesItem'

const ArticleList = ({ articles }) => {
    return (
        <div className={articlesStyles.grid}>

            {articles.map((article) => (
                <ArticlesItem article={article}/>
            ))}
        </div>
    )
}

export default ArticleList
