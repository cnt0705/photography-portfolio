import React, { Component } from 'react'

const PHOTOS_LENGTH = 12
const PHOTOS_LIST = Array.apply(null, { length: PHOTOS_LENGTH }).map(Number.call, Number).map(v => ++v)

class galleryItems extends Component {
  constructor(props) {
    super(props)
    this.state = { author: props.author };
  }

  render() {
    return PHOTOS_LIST.map((itemNo, index) => {
      return (
        <li
          key={index}
          className="gallery-item">
          <img
            src={require(`../img/${this.state.author}/${String(itemNo).padStart(2, '0')}.jpg`)}
            alt=""
            className="gallery-item-piece"
            onLoad={e => { this.onLoad(e) }}
            onContextMenu={e => { this.contextMenu(e) }}
            onClick={e => { this.openLightBox(e, index) }} />
        </li>
      )
    })
  }

  onLoad(e) {
    e.currentTarget.className += ' loaded'
  }

  contextMenu(e) {
    e.preventDefault()
  }

  openLightBox(e, index) {
    const src = e.currentTarget.getAttribute('src')
    this.props.openLightBox(index, src)
  }
}

export default galleryItems
