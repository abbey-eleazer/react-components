export default function HeroImages() {

  return (
    <div className="card-1">

    {/*  arrow buttons  */}
    <div className="btn">
      <img className="left-btn" src="./images/icon-previous.svg" alt="left"/>
      <img className="right-btn" src="./images/icon-next.svg" alt="right"/>
    </div>

     <img src="./images/image-product-1.jpg" alt="" className="img-display" />

     <div className="select-img">
      <img className="thumbnail" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail" />
      <img className="thumbnail" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail" />
      <img className="thumbnail" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail" />
      <img className="thumbnail" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail" />
     </div>
    </div>
  )
}