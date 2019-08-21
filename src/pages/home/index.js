import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SNS } from '../../util/const'
import './index.css'

class Home extends Component {
  render() {
    return (
      <main>
        <header>
          <h1 className="site-name">LIGHTS</h1>
        </header>
        <section className="about-us shinya">
          <div className="selfie">
            <img
              src={require('./img/s.jpg')}
              alt="Shinya"
              className="selfie-image"/>
          </div>
          <div className="introduction">
            <h2 className="my-name-is">Shinya Kato</h2>
            <p className="comment">Born in 1989 and grew up in Ibaraki, Japan.<br/>
            Canon EOS 6D Mark II</p>
            <Link to="/works/shinya" className="move-to-works">Works</Link>
            <ul className="sns-links">
              <li className="sns-links-item">
                <a href={SNS.S_INSTAGRAM} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" aria-label="Instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="about-us chinatsu">
          <div className="selfie">
            <img
              src={require('./img/c.jpg')}
              alt="Chinatsu"
              className="selfie-image"/>
          </div>
          <div className="introduction">
            <h2 className="my-name-is">Chinatsu Kato</h2>
            <p className="comment">Born in 1989 and grew up in Chiba, Japan.<br/>
            OLYMPUS OM-D E-M5 MarkII</p>
            <Link to="/works/chinatsu" className="move-to-works">Works</Link>
            <ul className="sns-links">
              <li className="sns-links-item">
                <a href={SNS.C_INSTAGRAM} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" aria-label="Instagram"></i>
                </a>
              </li>
              <li className="sns-links-item">
                <a href={SNS.C_CODEPEN} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-codepen" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
              <li className="sns-links-item">
                <a href={SNS.C_GITHUB} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
