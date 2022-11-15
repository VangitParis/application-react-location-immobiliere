import Card from '../Card'
import accomodations from '../../datas/locationslist.json'
import '../../styles/sass/components/_cardsContainer.scss'

export function CardsContainer() {
  return (
    <section className="container ">
      <div className="container__background">
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
