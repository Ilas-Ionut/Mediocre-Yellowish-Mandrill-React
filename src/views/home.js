import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mediocre Yellowish Mandrill</title>
        <meta property="og:title" content="Mediocre Yellowish Mandrill" />
      </Helmet>
      <button className="button">Button</button>
      <span>Text</span>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home-video"
      ></video>
      <h1>Heading</h1>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
    </div>
  )
}

export default Home
