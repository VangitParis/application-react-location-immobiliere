import '../../../styles/sass/components/_tags.scss'

export default function Tags({ Tag }) {
  /*récupérer la props Tag*/
  //console.log(Tag);
  return (
    <ul className="tag">
      <p className="tag__text">{Tag}</p>
    </ul>
  )
}
