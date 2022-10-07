// Write your code here.
import './index.css'

const BannerCard = props => {
  const {banner} = props
  const {headerText, description, className} = banner

  return (
    <li className={`${className} banner-Card`}>
      <div>
        <h1 className="heading">{headerText}</h1>

        <p className="description">{description}</p>

        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCard
