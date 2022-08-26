import './index.css'

const Thumbnail = props => {
  const {imageAddress, displayImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageAddress

  const clickImage = () => {
    displayImage(id)
  }
  return (
    <li className="image">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={clickImage}
        />
      </button>
    </li>
  )
}

export default Thumbnail
