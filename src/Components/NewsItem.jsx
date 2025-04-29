import image from '../assets/news.jpg'

const NewsItem = ({title, description, src, url}) => {
    return (
      <div className="card bg-dark text-light mb-3 my-3 mx-auto px-2 py-2" style={{maxWidth:"100%", width: "90%"}}>
      <img src={src ? src : image} style={{height: "200px", width: "100%", objectFit: "cover"}} className="card-img-top" alt="..." />
    
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default NewsItem