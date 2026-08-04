import React from 'react'
import SmokeEffect from '../Elements/SmokeEffect'
import Logo from '../assets/Logo.png'
import finalMB from '../assets/MonkeyBar.jpeg'
import screenPic from '../assets/OpenMachineScreen.jpg'
import wrap from '../assets/MachineWrap.jpg'

function Home() {

  return (
    <>
      <header className="hero">
        
        <div className="GIFContainer">
          <SmokeEffect />
          <img src={Logo} alt="Vending machine being stocked" />
        </div>

        <h1>Vending machines built for <span className="accent">bars &amp; clubs</span></h1>
        <p className="heroSub">
          Age-verified, fully managed, and zero cost to your venue. We install it, stock it,
          and keep it running — so your guests get what they want without ever leaving the room.
        </p>
        <div className="heroCtas">
          <a className="btn btnPrimary" href="/contact">work with me</a>
          <a className="btn btnGhost" href="#why">See why it works</a>
        </div>
      </header>

      <div className="textContainer">
        <div className="neonRule" id="why" />

        <div className="informationContainer">
          <div className="informationBox" data-kicker="Managed">
            <h2>Zero Operational Involvement</h2>
            <div className="Onesentence">Installed, monitored, and managed by our team.</div>
            <div className="information">
              <p>Our team handles installation, monitoring, and management, so your machines run
                 smoothly without adding anything to your staff's plate.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Cost">
            <h2>No Upfront Cost to the Venue</h2>
            <div className="Onesentence">Add a modern amenity without spending a dollar.</div>
            <div className="information">
              <p>No purchase, no lease, no capital from your business. Equipment, inventory,
                 licensing, servicing, and management are fully covered — you provide a bit of
                 space and a standard power outlet.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Compliance">
            <h2>Built-In Age Controls</h2>
            <div className="Onesentence">Designed for 21+ environments.</div>
            <div className="information">
              <p>Every transaction passes through secure age-verification technology, helping
                 safeguard your license while keeping activity clean, logged, and compliant.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Inventory">
            <h2>Actively Managed Inventory</h2>
            <div className="Onesentence">Always stocked based on real demand.</div>
            <div className="information">
              <p>Usage data guides restocking and product selection, so guests get what they want
                 without stepping outside — cutting out the exits that end nights early.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Brand">
            <h2>Elevate Your Venue's Image</h2>
            <div className="Onesentence">Seen as progressive, not outdated.</div>
            <div className="information">
              <p>A secure, touchscreen vending experience signals that your venue invests in modern
                 solutions and guest convenience — the forward-thinking brand today's customers expect.</p>
            </div>
          </div>

          <div className="informationBox" data-kicker="Support">
            <h2>Real Support, Real Accountability</h2>
            <div className="Onesentence">You deal with people — not a call center.</div>
            <div className="information">
              <p>Direct access to our team, fast response times, and real ownership over every
                 location we place.</p>
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
