import React from 'react';
import aproposImg from '../../assets/aproposImg.png'
import '../../styles/Saas/layouts/_banner.scss'
import Dropdowns from '../../components/Collapse';
import aproposTextes from '../../datas/aproposlist.json'


function About() {
   
return(
   
    <main className='main-about'>
        <section  className='bannerAbout'>{/*Section2*/}
            <h1>A propos de nos services</h1>
            <img src= {aproposImg} alt ='paysages alpins'/>
        </section>
        <section>
        {aproposTextes.map((datas, index)=>(
        <Dropdowns 
            key={`${datas.title}-${index}`}
            title={datas.title}
            description={datas.description}
        />

        ))}
        </section>
    </main>
    
)
}

export default About;