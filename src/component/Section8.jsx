import React from 'react'
import discordImg from "./images/discord.webp"
import discordIcon from "./images/asset 86.svg"
function Section8() {
  return (
    <>
    <div className='discord-card'>
        <div className="left">
            <h1>Learn & Grow with a community of learners just like you!</h1>
            <h5>Join our Supportive Discord Community for Regular Webinars from Industry Experts and grow together as a Community ❤️</h5>
        <button><img src={discordIcon} alt="" /><p> Join Our Discord</p></button>

        </div>
        <div className="right">
            <img src={discordImg} alt="" />
        </div>

    </div>
    </>
  )
}

export default Section8
