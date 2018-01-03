import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Home extends Component {
  render() {
    return (
      <main>
        <header>
          <h1 className="site-name">LIGHTS</h1>
        </header>
        <section className="about-us shinya">
          <div className="selfie">
            <img src="https://placehold.jp/3000x4000.png" alt=""/>
          </div>
          <div className="introduction">
            <h2 className="my-name-is">Shinya Kato</h2>
            <p className="comment">Born in 1989 and grew up in Ibaraki, Japan.<br/>
            Canon EOS 6D Mark II</p>
            <Link to="/works/shinya" className="move-to-works">Works</Link>
            <ul className="sns-links">
              <li>
                <a href="https://www.instagram.com/shnykt_46" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" aria-label="Instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="about-us chinatsu">
          <div className="selfie">
            <img src="https://placehold.jp/3000x4000.png" alt=""/>
          </div>
          <div className="introduction">
            <h2 className="my-name-is">Chinatsu Kato</h2>
            <p className="comment">Born in 1989 and grew up in Chiba, Japan.<br/>
            OLYMPUS OM-D E-M5 MarkII</p>
            <Link to="/works/chinatsu" className="move-to-works">Works</Link>
            <ul className="sns-links">
              <li>
                <a href="https://www.instagram.com/cnt_kt" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" aria-label="Instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cnt_kt" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://cntkt.hatenablog.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-pencil" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/cnt0705" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/cnt_kt" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-codepen" aria-hidden="true" aria-label="Twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
