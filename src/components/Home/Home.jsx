import React from 'react'
import logo from "../assets/imgs/logo.jpg"
import "./Home.css"
import Carousel from "../Carousel/Slideshow"
import DirMsg from '../DirMsg/DirMsg'

function Home() { 
  return (
    <div className='home'>
      <div className="slide-show">
        <Carousel/>
        <div className='desc'>
          Products Description 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus iusto fuga distinctio nostrum odio, quo unde quisquam fugit neque numquam voluptates voluptatem error incidunt omnis, placeat tempore ipsa nulla mollitia! Vero ipsum dolore iure sunt necessitatibus blanditiis neque, corporis illum explicabo velit nesciunt nisi cupiditate, molestias perferendis accusamus at. Numquam voluptas quibusdam adipisci est perferendis. Molestias, porro. Laborum, sit quo in illo obcaecati aliquam dicta asperiores saepe voluptas mollitia vitae consequatur aperiam autem tenetur animi est excepturi dolor eligendi possimus! Error nulla assumenda eos dolorum ut? Quod dolore suscipit mollitia, ratione debitis laudantium odio distinctio explicabo, quis quidem voluptate?
        </div>
      </div>
      <div className='dir-msg'>
        <DirMsg/>
      </div>
      
    </div>
  )
}

export default Home