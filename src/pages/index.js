import React from 'react'
import Link from 'gatsby-link'
import demoGif from '../demo.gif'
import Feature from '../components/Feature'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="title">
        <h1>packary</h1>
        <h3>Cheap, secure hosting for your private packages.</h3>
      </div>
      <div className="demo">
        <img src={demoGif} />
      </div>
    </div>
    <div className="features">
      <div className="feature">
        <Feature title="Easy" icon="lightbulb">
          <p>
            Use our simple UI to deploy a registry in one click, and copy-paste your package manager configs.
            No hosting, proxying or configuration.
          </p>
        </Feature>
      </div>
      <div className="feature">
        <Feature title="Versatile" icon="users">
          <p>
            Keep your Maven artefacts, Docker containers, NPM and PyPi packages in one place.
          </p>
        </Feature>
      </div>
      <div className="feature">
        <Feature title="Secure & Reliable" icon="lock">
          <p>
            Everything is over HTTPS and safe from prying eyes.
            We store your code on multi-region cloud providers, so it's always available.
          </p>
        </Feature>
      </div>
      <div className="feature">
        <Feature title="Made for Teams" icon="users">
          <p>
            Each developer has an account, and you control who can pull this and publish that.
          </p>
        </Feature>
      </div>
    </div>
    <div className="signup">
      <div>
        <h2>Sign up for our beta</h2>
        <p>We nearly have Maven repositories ready to test; sign up for early access and we'll invite
          you soon!</p>
        <p className="spam">We won't send you anything other than your invitation unless you opt in.</p>
      </div>
      <form>
        <p>
          <div className="icon-input">
            <i className="icon-mail"/>
            <input name="email" type="email" placeholder="Email address" />
          </div>
        </p>
        <p>
          <button type="submit">Sign up</button>
        </p>
      </form>
    </div>
  </div>
)

export default IndexPage
