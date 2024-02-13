import Cart from "./Cart"

export default function Navbar() {
  return (
    
    <nav className="nav">
      <img src="./images/logo.svg" alt="logo" className="logo" />
      
      <ul className="ul">
      <li className="li"><a className="li a:hover" href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="user">
       <Cart />
        <img className="user-photo" src="./images/image-avatar.png" alt="avatar"  />
      </div>
    </nav>
    
  )
}