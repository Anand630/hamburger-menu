import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-bottom-container">
      <img
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="lost-you-way-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        {`Sorry, we cannot find that page. You will find lots to explore on the home page`}
      </p>
    </div>
  </div>
)

export default NotFound
