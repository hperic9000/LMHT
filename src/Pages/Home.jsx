import React from 'react'
import SmokeEffect from '../Elements/SmokeEffect'
import Logo from '../assets/Logo.png'
import finalMB from '../assets/MonkeyBar.jpeg'
import screenPic from '../assets/OpenMachineScreen.jpg'
import wrap from '../assets/MachineWrap.jpg'

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

        <h1>Vending machines built for <span className="accent">bars &amp; clubs</span></h1>
        <p className="heroSub">
          Managed by our team, stocked with premium products, Age-verified, and designed to keep your guests happy without ever leaving the room.
        </p>
        <div className="heroCtas">
          <a className="btn btnPrimary" href="/contact" onClick={go('contact')}>Work with me</a>
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
          <div className="shot"><img src= {finalMB}></img><div className='imgLabel'>Monkey Bar</div></div>
          <div className="shot"><img src= {screenPic}></img><div className='imgLabel'>Be Back's</div></div>
          <div className="shot"><img src= {wrap}></img><div className='imgLabel'>Third Bar</div></div>
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
            <summary>What if something doesn't vend correctly?</summary>
            <p>The machine auto-refunds the customer and alerts us instantly so we can troubleshoot.</p>
          </details>
        </div>
      </div>

      <div className="bottomBar">
        <div className="bottomBarContent">
          <div className="bottomBarItem">Contact Us</div>
          <div className="bottomBarItem">Privacy Policy</div>
          <div className="bottomBarItem">Terms of Service</div>
        </div>
      </div>
    </>
  )
}

export default Home
