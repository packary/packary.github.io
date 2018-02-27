import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature'

const IndexPage = () => (
  <div>
    <Hero />
    <div className="why">
      <h2>Why?</h2>
      <div className="container">
        <ul>
          <li><i className="icon-magic"/>
            Sharing and re-using code is great. You know this. But you can't just put your company's code on the
            internet.
          </li>
          <li><i className="icon-magic"/>
            Hosting tools like Nexus or mirroring CouchDB yourself can be frustrating and expensive.
          </li>
          <li><i className="icon-magic"/>
            Using Packary you can deploy a registry in seconds, for free, and scale up without breaking the bank.
          </li>
        </ul>
      </div>
    </div>
    <div className="how-it-works">
      <h2>How it Works</h2>
      <div className="container">
        <div className="step">
          <h4>1. Deploy a registry</h4>
          <p>Choose your language and deploy a registry in one-click. Your first registry is free.</p>
        </div>
        <div className="step">
          <h4>2. Configure your client</h4>
          <p>Use our simple docs to configure your package manager. Chunky config blocks are
            ready to copy-paste.</p>
        </div>
        <div className="step">
          <h4>3. Be awesome</h4>
          <p>Our registries use the same APIs as their open source counterparts, so they'll work
            with all your tooling.</p>
        </div>
      </div>
    </div>
    <div className="features">
      <h2>Features</h2>
      <div className="container">
        <div className="feature">
          <Feature title="Easy" icon="magic">
            <p>
              Use our simple UI to deploy a registry in <strong>one click</strong>,
              and <strong>copy-paste</strong> your package manager configs.
              No hosting, proxying or configuration.
            </p>
          </Feature>
        </div>
        <div className="feature">
          <Feature title="Versatile" icon="sitemap">
            <p>
              Keep your <strong>Maven</strong> artefacts, <strong>Docker </strong>
              containers, <strong>NPM</strong> and <strong>PyPi</strong> packages in one place.
            </p>
          </Feature>
        </div>
        <div className="feature">
          <Feature title="Secure" icon="lock">
            <p>
              Use our <strong>service accounts</strong> for CI environments - no more personal passwords
              in Jenkins.
            </p>
          </Feature>
        </div>
        <div className="feature">
          <Feature title="Reliable" icon="globe">
            <p>
              We store your packages with <strong>multi-region</strong> cloud providers, so
              it's <strong>always available</strong>.
            </p>
          </Feature>
        </div>
      </div>
    </div>
    <div className="signup">
      <div className="container">
        <div>
          <h2>Sign up for our beta</h2>
          <p>We nearly have Maven repositories ready to test; sign up for early access and we'll invite
            you soon!</p>
          <p className="spam">We won't send you anything other than your invitation unless you opt in.</p>
        </div>
        <form>
          <div className="input">
            <div className="icon-input">
              <i className="icon-mail"/>
              <input name="email" type="email" placeholder="Email address"/>
            </div>
          </div>
          <div className="input">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default IndexPage;
