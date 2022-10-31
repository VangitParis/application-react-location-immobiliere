import '../../../styles/Saas/components/_tags.scss'


export default function Tags({getTag}){
    return(
       
        <ul  className="tag">
           
                <p  className="tag__text">
                    {getTag}
                </p>
                    
           
        </ul>
    )
}
