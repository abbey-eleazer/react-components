import CartInput from "./CartInput"

export default function HeroText() {
  return(
    <div className="card-2">
    <div className="description">
       <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand
            everything the weather can offer.
          </p>
          <h2>$125.00 <span>50%</span></h2>
          <small> $250.00</small>
    </div>
    
     <CartInput />
  </div>
  )
}