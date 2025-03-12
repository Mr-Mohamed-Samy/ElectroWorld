import './App.css'
import Navbar from './navbar.jsx'
import CategoryCard from './CategoryCard.jsx'
import Phone from './assets/phone.jpeg'
import Laptop from './assets/laptop.png'
import desktop from './assets/desktopComputer.jpeg'
import monitors from './assets/monitors.jpg'
import accessories from './assets/accessories.jpeg'
import tablets from './assets/tablets.jpg'
import Footer from './Footer.jsx'
function App() {
  

  return (
    <>
      <Navbar/>
      <h1>Categories</h1>
      <div className="categories">
        <CategoryCard category = "Cell phones" logo = {Phone}/>
        <CategoryCard category = "Laptops" logo = {Laptop}/>
        <CategoryCard category = "Desktop computers" logo = {desktop}/>
        <CategoryCard category = "Monitors" logo = {monitors}/>
        <CategoryCard category = "Accessories" logo = {accessories}/>
        <CategoryCard category = "Tablets" logo = {tablets}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
