import emailjs from '@emailjs/browser'
import { useRef, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { ContactContainer } from '@/styles/contactcontainer'
import { Context } from 'context'

export default function Contact() {
  const { setBurger } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const form = useRef<HTMLFormElement | any>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false,
  })
  const [error, updateError] = useState(false)
  const [styles, updateStyle] = useState('')
  const [tmessage, updatetmessge] = useState('')
  const [submitted, setSubmitted] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>,
  ) {
    const { name, value, type, checked } = e.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }
  const sendEmail = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        'service_w8dxu55',
        'template_3kd2m1k',
        form.current,
        'Guw6C31CD_T6V4MHV',
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted("Thank you, We'll get back to you")
          updateError(false)
          updatetmessge('')
          setTimeout(() => {
            setSubmitted('')
          }, 3000)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            agreed: false,
          })
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  function handleSubmit(e: React.FormEvent) {
    // submitToApi(formData)
    e.preventDefault()
    if (formData.message === '') {
      console.log('error')
      updateError((prev) => true)
      updateStyle('error')
      updatetmessge('Please enter a message')
    } else {
      sendEmail()
    }
  }
  return (
    <>
      <Head>
        <title>Ankara World Catalog | Contact</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <main>
        <ContactContainer>
          <div className="contact--page">
            <h1 className="contact--header">Contact Me</h1>
            <p className="contact--leading">
              👋🏼Hi there, contact us to ask about anything you have in mind.
            </p>
            <form className="contact--form" onSubmit={handleSubmit} ref={form}>
              <div className="name--flex">
                <div>
                  <label htmlFor="first_name">First name</label>
                  <input
                    required
                    className="contact--form__text"
                    value={formData.firstName}
                    id="first_name"
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="last_name">Last name</label>
                  <input
                    required
                    className="contact--form__text"
                    value={formData.lastName}
                    id="last_name"
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input
                required
                className="contact--form__text"
                value={formData.email}
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="yourname@email.com"
              />
              <p className="textarea--label">Message</p>
              <textarea
                id={styles}
                value={formData.message}
                onChange={handleChange}
                className="contact--form__textarea"
                name="message"
                placeholder="Send a message and we'll reply you as soon as possible..."
              />
              {tmessage.length > 1 && <p className="t_error">{tmessage}</p>}
              <div className="checkbox--container">
                <input
                  required
                  checked={formData.agreed}
                  className={`contact--form__checkbox ${styles}`}
                  type="checkbox"
                  onChange={handleChange}
                  id="agreed"
                  name="agreed"
                />
                <label className="checkbox--label" htmlFor="agreed">
                  You agree to providing your data to AnkaraWorld who may
                  contact you.
                </label>
              </div>

              <button className="contact--form__submit">Send message</button>
              {submitted.length > 0 && (
                <p className="when_submitted">{submitted}</p>
              )}
            </form>
          </div>
        </ContactContainer>
      </main>
    </>
  )
}
