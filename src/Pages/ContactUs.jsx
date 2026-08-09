import React, { useState } from 'react'
import '../Stylesheets/styles.css'
import '../Stylesheets/contact.css'

const FORM_ENDPOINT = ''
const INBOX = 'hello@letmehitthat.com'   // <- your real inbox

const INTERESTS = [
  {
    id: 'machine',
    label: 'Put a machine in my venue',
    hint: 'We deliver, install, stock, and service it.',
  },
  {
    id: 'advertising',
    label: 'Advertise on your screens',
    hint: 'Your creative on machines across the city.',
  },
]

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  venue: '',
  location: '',
  message: '',
  company: '',   // honeypot — real people never see or fill this
}

function ContactUs({ setPage }) {
  const [form, setForm] = useState(EMPTY)
  const [picked, setPicked] = useState([])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')   // idle | sending | sent | error

  const update = (key) => (e) => {
    const { value } = e.target
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: null }))
  }

  const togglePick = (id) => {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
    if (errors.picked) setErrors((er) => ({ ...er, picked: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Tell us who to ask for.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Add an email we can reply to.'
    if (!form.venue.trim()) next.venue = 'Which bar or venue is this for?'
    if (!form.location.trim()) next.location = 'City and state is enough.'
    if (picked.length === 0) next.picked = 'Pick at least one so we know where to route this.'
    return next
  }

  const buildMailto = () => {
    const wants = picked.map((id) => INTERESTS.find((i) => i.id === id).label).join(' + ')
    const body = [
      `Name:     ${form.name}`,
      `Email:    ${form.email}`,
      `Phone:    ${form.phone || '—'}`,
      `Venue:    ${form.venue}`,
      `Location: ${form.location}`,
      `Wants:    ${wants}`,
      '',
      form.message || '(no additional notes)',
    ].join('\n')

    return `mailto:${INBOX}`
      + `?subject=${encodeURIComponent(`Vending inquiry — ${form.venue}`)}`
      + `&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // bot filled the honeypot; drop it silently
    if (form.company) return

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    if (!FORM_ENDPOINT) {
      window.location.href = buildMailto()
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          interests: picked.join(', '),
          _subject: `Vending inquiry — ${form.venue}`,
        }),
      })
      if (!res.ok) throw new Error(res.status)
      setStatus('sent')
      setForm(EMPTY)
      setPicked([])
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="textContainer contactPage">
        <div className="contactDone">
          <h1>You're on the list</h1>
          <p>
            We read every one of these. Expect a reply within two business days —
            check spam if it hasn't landed by then.
          </p>
          <div className="heroCtas">
            <button className="btn btnPrimary" onClick={() => setStatus('idle')}>
              Send another
            </button>
            {setPage && (
              <button className="btn btnGhost" onClick={() => setPage('home')}>
                Back to home
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="textContainer contactPage">
      <header className="contactHead">
        <h1>
          Let's put one <span className="accent">in your room</span>
        </h1>
        <p className="heroSub">
          Tell us about the venue. We handle delivery, install, restocking, and
          service — you keep a cut of every sale.
        </p>
      </header>

      <form className="contactForm" onSubmit={handleSubmit} noValidate>
        <fieldset className="toggleGroup">
          <legend>What are you after?</legend>
          <p className="toggleNote">Pick one or both.</p>

          <div className="toggleRow">
            {INTERESTS.map(({ id, label, hint }) => (
              <button
                key={id}
                type="button"
                className="toggle"
                aria-pressed={picked.includes(id)}
                onClick={() => togglePick(id)}
              >
                <span className="toggleMark" aria-hidden="true" />
                <span className="toggleLabel">{label}</span>
                <span className="toggleHint">{hint}</span>
              </button>
            ))}
          </div>
          {errors.picked && <p className="fieldError">{errors.picked}</p>}
        </fieldset>

        <div className="formGrid">
          <label className="field">
            <span>Your name</span>
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="fieldError">{errors.name}</p>}
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="fieldError">{errors.email}</p>}
          </label>

          <label className="field">
            <span>
              Phone <em>optional</em>
            </span>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              autoComplete="tel"
            />
          </label>

          <label className="field">
            <span>Venue name</span>
            <input
              type="text"
              value={form.venue}
              onChange={update('venue')}
              placeholder="Monkey Bar"
              aria-invalid={!!errors.venue}
            />
            {errors.venue && <p className="fieldError">{errors.venue}</p>}
          </label>

          <label className="field wide">
            <span>Location</span>
            <input
              type="text"
              value={form.location}
              onChange={update('location')}
              placeholder="City, state"
              aria-invalid={!!errors.location}
            />
            {errors.location && <p className="fieldError">{errors.location}</p>}
          </label>

          <label className="field wide">
            <span>
              Anything else <em>optional</em>
            </span>
            <textarea
              rows="4"
              value={form.message}
              onChange={update('message')}
              placeholder="Foot traffic, hours, where the machine would sit…"
            />
          </label>
        </div>

        {/* Honeypot. Hidden from people, catches most spam bots. */}
        <input
          className="honeypot"
          type="text"
          tabIndex="-1"
          autoComplete="off"
          value={form.company}
          onChange={update('company')}
          aria-hidden="true"
        />

        <div className="formFoot">
          <button className="btn btnPrimary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send inquiry'}
          </button>
          <p className="formNote">We don't sell your info or add you to a list.</p>
        </div>

        {status === 'error' && (
          <p className="formStatus bad">
            That didn't go through. Email us directly at <a href={`mailto:${INBOX}`}>{INBOX}</a>.
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactUs