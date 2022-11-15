import React from 'react'
import Dropdowns from '../../components/Collapse/Dropdowns'
import Banner from '../../components/Banner'
import aproposTextes from '../../datas/aproposlist.json'

function About() {
  return (
    <main className="main-about">
      <Banner />
      <section className="dropdownsAbout">
        {aproposTextes.map((datas, index) => (
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

export default About
