import React from 'react'
import SmokeEffect from '../Elements/SmokeEffect'
import Logo from '../assets/Logo.png'
import MonkeyBar from '../assets/MonkeyBar.jpeg'
import BeBack from '../assets/BeBack.jpeg'

function Home({setPage}) {

  const go = (page) => (e) => {
        e.preventDefault()
        setPage(page)
    }

  return (
    <>
      <header className="hero">
        
        <div className="GIFContainer">
          <SmokeEffect />
          <img src={Logo} alt="Vending machine being stocked" />
        </div>

        <h1>Vending machines built <span className="accent">to keep guest satisfied</span></h1>
        <p className="heroSub">
          Fully managed by us, filled with premium products, and designed to keep your guests at your venue. Our smart vending machines are the perfect solution for any venue looking to increase revenue and improve customer satisfaction.
        </p>
        <div className="heroCtas">
          <a className="btn btnPrimary" href="/contact" onClick={go('contact')}>Contact Us</a>
          <a className="btn btnGhost" href="#why">See why it works</a>
        </div>
      </header>

      <div className="textContainer">
        <div className="neonRule" id="why" />

        <div className="informationContainer">
          <div className="informationBox" data-kicker="Managed">
            <h2>Managed By Our Team</h2>
            <div className="Onesentence">No operational involvement required.</div>
            <div className="information">
              <p>Our team handles installation, monitoring, and management, so your machines run
                 smoothly without adding anything to your staff's plate.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Compliance">
            <h2>Automatic age Verification</h2>
            <div className="Onesentence">Designed for 21+ environments.</div>
            <div className="information">
              <p>Our age verification system ensures compliance with all applicable laws and regulations, providing peace of mind for your venue.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Brand">
            <h2>Keep Your Customers at Your Venue</h2>
            <div className="Onesentence">Create a seamless experience that keeps guests engaged.</div>
            <div className="information">
              <p>Creating a seamless experience that keeps guests engaged by providing a modern, convenient, and enjoyable service.</p>
            </div>
          </div>
        </div>

        <div className="imgGallery">
          <div className="shot"><img src= {MonkeyBar}></img><div className='imgLabel'>Monkey Bar</div></div>
          <div className="shot"><img src= {BeBack}></img><div className='imgLabel'>Be Back's</div></div>
        </div>

        <div className="faqs">
          <h2>Frequently Asked Questions</h2>

          <details className="faq">
            <summary>How does the vending machine work?</summary>
            <p>Guests browse and select on a touchscreen. The machine verifies age, processes
               payment, and dispenses the product automatically.</p>
          </details>

          <details className="faq">
            <summary>What products are available?</summary>
            <p>Primarily premium disposable vapes, with optional accessories depending on the
               venue and local regulations.</p>
          </details>

          <details className="faq">
            <summary>How much space does it need?</summary>
            <p>Wall units are roughly 3′ × 2′ and stick out about 12″. Freestanding and pedestal
               options are available if you'd rather not mount anything.</p>
          </details>

          <details className="faq">
            <summary>Are there any contracts or additional costs?</summary>
            <p>We do not require long-term contracts, and there are no hidden fees or additional costs.</p>
          </details>

          <details className="faq">
            <summary>What if something doesn't vend correctly?</summary>
            <p>The machine auto-refunds the customer and alerts us instantly so we can troubleshoot.</p>
          </details>

          <details className="faq">
            <summary>Where can I get more information about the vending machines?</summary>
            <p>Our vending machines are distributed by VapeTM and additional details can be found on their website.</p>
          </details>
        </div>
      </div>

      <div className="bottomBar">
        <div className="bottomBarContent">
          <div className="bottomBarItem"><a href="/about" onClick={go('about')}>About</a></div>
          <div className="bottomBarItem"><a className="navCta" href="/contact" onClick={go('contact')}>Contact Us</a></div>
          <div className="bottomBarItem"><a href="https://www.instagram.com/aliciajd19/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div>
      </div>
    </>
  )
}

export default Home
