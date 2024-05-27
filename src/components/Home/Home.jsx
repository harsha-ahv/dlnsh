import React from 'react'
import logo from "../imgs/logo.jpg"
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <div className="dir-msg">
        <h2>DIRECTOR'S MESSAGE</h2>
        <div className="msg">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, cumque aperiam quasi quas consectetur atque velit dolorem aut autem iste beatae culpa commodi ad earum alias? Omnis aspernatur minus delectus ab dolor, quam saepe totam consequuntur tempore dolorum nesciunt, sequi itaque, numquam quisquam eos reiciendis? Iure inventore ex atque ea, asperiores saepe quidem ut quia reiciendis esse, fugiat enim in? Eaque tenetur quibusdam hic consequuntur tempora dolorem quaerat, esse architecto voluptatem fugiat dignissimos nemo asperiores velit nulla est quae saepe error facere repellendus fugit voluptas? Consequuntur incidunt officia nam explicabo iusto quisquam aperiam aliquid vitae facere, quas nobis et illo magni ullam distinctio temporibus, ducimus accusantium fugiat id. Voluptatibus, ipsum.</p>
          <img src={logo} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Home