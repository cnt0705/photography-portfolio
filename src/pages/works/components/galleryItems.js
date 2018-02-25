import React, { Component } from 'react'
import { PHOTOS } from '../../../util/const'

const PHOTOS_LIST = Array.apply(null, { length: PHOTOS.LENGTH }).map(Number.call, Number).map(v => ++v)

class galleryItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: props.author
    };
  }

  render() {
    return PHOTOS_LIST.map(itemNo => {
      return (
        <li
          key={itemNo}
          className="gallery-item">
          <img
            src={require(`../img/${this.state.author}/${String(itemNo).padStart(2, '0')}.jpg`)}
            alt=""
            className="gallery-item-piece"
            onLoad={e => { this.onLoad(e) }}
            onContextMenu={e => { this.contextMenu(e) }}
            onClick={e => { this.openLightBox(itemNo) }} />
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

  openLightBox(index) {
    this.props.openLightBox(index)
  }
}

export default galleryItems
