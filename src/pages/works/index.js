import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { SNS } from '../../util/const'
import GalleryItems from './components/galleryItems'
import './index.css'

class Works extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: null,
      galleryItems: [],
      lightBox: {
        open: false,
        src: null
      }
    }
  }

  componentWillMount() {
    const author = this.props.match.params.author
    const insta = new Map()
    insta.set('shinya', SNS.S_INSTAGRAM)
    insta.set('chinatsu', SNS.C_INSTAGRAM)
    if (!insta.get(author)) return
    this.setState({ author: author })
    this.setState({ instagram: insta.get(author) })
  }

  render() {
    const lightBox = () => {
      return this.state.lightBox.open
        ? <div className="light-box">
          <div className="light-box-content">
            <img
              src={this.state.lightBox.src}
              alt=""
              className="light-box-image"
              onContextMenu={e => { this.contextMenu(e) }}/>
            <ul className="light-box-control">
              <li className="light-box-control-item">
                <button
                  type="button"
                  className="light-box-control-button"
                  onClick={e => { this.slideImage(-1)}}>Prev</button>
              </li>
              <li className="light-box-control-item">
                <button
                  type="button"
                  className="light-box-control-button"
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
          <h1 className="page-title-text">WORKS</h1>
          <p>by {this.state.author} kato</p>
        </header>
        <ul className="move-to-other-pages">
          <li className="move-to-other-pages-link">&larr; <Link to="/">Back to main page</Link></li>
          <li className="move-to-other-pages-link"><a href={this.state.instagram} target="_blank" rel="noopener noreferrer">Want to see more ?</a> &rarr;</li>
        </ul>
        <ul className="gallery">
          <GalleryItems author={this.state.author} openLightBox={this.openLightBox.bind(this)} />
        </ul>
        <CSSTransitionGroup
          component="div"
          transitionName="light-box"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {lightBox()}
        </CSSTransitionGroup>
      </main>
    )
  }

  openLightBox(index, src) {
    this.setState({
      lightBox: {
        open: true,
        index: index,
        src: src
      }
    })
  }

  closeLightBox() {
    this.setState({
      lightBox: {
        open: false,
        index: null,
        src: null
      }
    })
  }

  slideImage(direction) {
    const index = this.state.lightBox.index + direction
    const src = this.state.galleryItems[index]
    if (!src) return
    this.setState({
      lightBox: {
        open: true,
        index: index,
        src: src
      }
    })
  }
}

export default Works
