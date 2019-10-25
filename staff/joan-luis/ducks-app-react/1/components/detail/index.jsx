function Detail ({item: {title, image, description, priece, link}, onBanck}){
   return <section className="view detail_hide">
      <h2 className="detail_title">{title}</h2>
      <img className="detail_image" src={image}/>
      <p className="detail_description">{description}</p>
      <a className="detail_store" href={link}>Go to store</a>
      <span className="detail_price">{priece}</span>
      <a className="detail_back" href="" onClick={event=> {
         event.preventDefault()

         onBanck()
      }}>Go back</a>
   </section>
}