import '../../../styles/Saas/components/_tags.scss'


export default function Tags({getTag}){
    return(
       
        <ul  className="tags">
           
                <p  className="tags__text">
                    {getTag}
                </p>
                    
           
        </ul>
    )
}
