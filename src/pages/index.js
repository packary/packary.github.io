import React from 'react'
import Link from 'gatsby-link'
import demoGif from '../demo.gif'
import Feature from '../components/Feature'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="title">
        <h1>packary</h1>
        <h3>Affordable private package repositories</h3>
      </div>
      <div className="demo">
        <img src={demoGif} />
      </div>
    </div>
    <div className="features">
      <div className="feature">
        <Feature title="Simple" icon="thing">
          <p>
            Create a repository in one click, configure your package manager and
            push your code. No hosting, proxying or configuration.
          </p>
        </Feature>
      </div>
      <div className="feature">
        <Feature title="Reliable" icon="thing">
          <p>
            Create a repository in one click, configure your package manager and
            push your code. No hosting, proxying or configuration.
          </p>
        </Feature>
      </div>
      <div className="feature">
        <Feature title="Made for Teams" icon="thing">
          <p>
            Create a repository in one click, configure your package manager and
            push your code. No hosting, proxying or configuration.
          </p>
        </Feature>
      </div>
    </div>
    <div className="signup">
      <div>
        <h1>Sign up our beta</h1>
        <p>We're looking for people to help us test!</p>
      </div>
      <form>
        <div>
          <input name="email" type="email" placeholder="Your email address" />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </div>
)

export default IndexPage
