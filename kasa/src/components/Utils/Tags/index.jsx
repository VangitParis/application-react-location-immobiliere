import { useParams } from "react-router-dom"
import accomodations from '../../../datas/locationslist.json'
import '../../../styles/Saas/components/_tags.scss'
import PropTypes from 'prop-types';

export default function Tags({getTag}){
    return(
       
        <ul  className="tags">
           
                <p  className="tags__text">
                    {getTag}
                </p>
                    
           
        </ul>
    )
}
