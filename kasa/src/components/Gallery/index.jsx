import Card from "../Card"

import accomodations from '../../datas/locationslist.json'
import '../../styles/Saas/layouts/_gallery.scss'


export function Gallery(){
    return(
        <section  className='gallery '>
           <div  className="gallery__background" >
        {accomodations.map((datas, index) => (
            <Card
                key={`${datas.name}-${index}`}
                id= {datas.id}
                cover= {datas.cover}
                title={datas.title}
            />
          ))}
          
          </div>
        </section>
       
    )
}