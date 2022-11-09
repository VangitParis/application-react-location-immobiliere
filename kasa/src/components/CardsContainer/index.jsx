import Card from '../Card'

import accomodations from '../../datas/locationslist.json'
import '../../styles/sass/layouts/_cardsContainer.scss'

export function CardsContainer() {
  return (
    <section className="gallery ">
      <div className="gallery__background">
        {accomodations.map((datas, index) => (
          <Card
            key={`${datas.name}-${index}`}
            id={datas.id}
            cover={datas.cover}
            title={datas.title}
          />
        ))}
      </div>
    </section>
  )
}
