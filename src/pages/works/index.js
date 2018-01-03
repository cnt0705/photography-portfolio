import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import imgSny01 from './img/shinya/01.jpg'
import imgSny02 from './img/shinya/02.jpg'
import imgSny03 from './img/shinya/03.jpg'
import imgSny04 from './img/shinya/04.jpg'
import imgSny05 from './img/shinya/05.jpg'
import imgSny06 from './img/shinya/06.jpg'
import imgSny07 from './img/shinya/07.jpg'
import imgSny08 from './img/shinya/08.jpg'
import imgSny09 from './img/shinya/09.jpg'
import imgSny10 from './img/shinya/10.jpg'
import imgSny11 from './img/shinya/11.jpg'
import imgSny12 from './img/shinya/12.jpg'
import imgCnt01 from './img/chinatsu/01.jpg'
import imgCnt02 from './img/chinatsu/02.jpg'
import imgCnt03 from './img/chinatsu/03.jpg'
import imgCnt04 from './img/chinatsu/04.jpg'
import imgCnt05 from './img/chinatsu/05.jpg'
import imgCnt06 from './img/chinatsu/06.jpg'
import imgCnt07 from './img/chinatsu/07.jpg'
import imgCnt08 from './img/chinatsu/08.jpg'
import imgCnt09 from './img/chinatsu/09.jpg'
import imgCnt10 from './img/chinatsu/10.jpg'
import imgCnt11 from './img/chinatsu/11.jpg'
import imgCnt12 from './img/chinatsu/12.jpg'

import './index.css';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      galleryItems: [],
      lightBox: {
        open: false,
        src: null
      }
    };
  }

  componentWillMount() {
    const author = this.props.match.params.author;

    const items = new Map();
    items.set('shinya', [
      imgSny01,
      imgSny02,
      imgSny03,
      imgSny04,
      imgSny05,
      imgSny06,
      imgSny07,
      imgSny08,
      imgSny09,
      imgSny10,
      imgSny11,
      imgSny12,
    ]);
    items.set('chinatsu', [
      imgCnt01,
      imgCnt02,
      imgCnt03,
      imgCnt04,
      imgCnt05,
      imgCnt06,
      imgCnt07,
      imgCnt08,
      imgCnt09,
      imgCnt10,
      imgCnt11,
      imgCnt12
    ]);

    const insta = new Map();
    insta.set('shinya', 'https://www.instagram.com/shnykt_46');
    insta.set('chinatsu', 'https://www.instagram.com/cnt_kt');

    if (!items.get(author) || !insta.get(author)) return;
    this.setState({ author: author });
    this.setState({ galleryItems: items.get(author) });
    this.setState({ instagram: insta.get(author) });
  }

  render() {
    const galleryItems = this.state.galleryItems.map((item, index) => {
      return (
        <li key={index} className="gallery-item">
          <img
            src={item}
            alt=""
            className="piece"
            onClick={e => { this.openLightBox(e, index)}}
            onContextMenu={e => { this.contextMenu(e) }}/>
        </li>
      );
    });

    const lightBox = () => {
      return this.state.lightBox.open
        ? <div className="light-box">
          <div className="light-box-content">
            <img
              src={this.state.lightBox.src}
              alt=""
              onContextMenu={e => { this.contextMenu(e) }}/>
            <ul className="light-box-control">
              <li>
                <button
                  type="button"
                  onClick={e => { this.slideImage(-1)}}>Prev</button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={e => { this.slideImage(1)}}>Next</button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="light-box-close"
            onClick={this.closeLightBox.bind(this)}>close</button>
        </div>
        : null
    }

    return (
      <main className="works">
        <header className="page-title">
          <h1>WORKS</h1>
          <p>by {this.state.author} kato / <a href={this.state.instagram} target="_blank" rel="noopener noreferrer">instagram</a></p>
        </header>
        <Link to="/" className="move-to-home">
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </Link>
        <ul className="gallery">{ galleryItems }</ul>
        <CSSTransitionGroup
          component="div"
          transitionName="light-box"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {lightBox()}
        </CSSTransitionGroup>
      </main>
    );
  }

  openLightBox(e, index) {
    const idx = index;
    const src = e.currentTarget.getAttribute('src');
    this.setState({
      lightBox: {
        open: true,
        index: idx,
        src: src
      }
    });
  }

  closeLightBox() {
    this.setState({
      lightBox: {
        open: false,
        index: null,
        src: null
      }
    });
  }

  slideImage(direction) {
    const idx = this.state.lightBox.index + direction;
    const src = this.state.galleryItems[idx];
    if (!src) return;
    this.setState({
      lightBox: {
        open: true,
        index: idx,
        src: src
      }
    });
  }

  contextMenu(e) {
    e.preventDefault();
  }
}

export default Works;
