import React from "react"

import utilStyles from "@/styles/utils.module.css"

import Github from "@/assets/icons/github-white.svg"
import Instagram from "@/assets/icons/instagram.svg"
import Twitter from "@/assets/icons/twitter.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import Email from "@/assets/icons/email.svg"
import ArrowUp from "@/assets/icons/arrowup.svg"
import Icon from "./Icon"
import Image from "next/image"

type Props = {
  scroll: (arg: number) => void
}

const ContactForm = ({ scroll }: Props) => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    e.persist()
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const message = inputs.message
    const messageEnter = message
      .replace(/\r\n|\r|\n/g, "%0D%0A")
      .replace(" ", "%20")
    const request =
      "mailto:cristhiantilleria@gmail.com?subject=Email%20from%20" +
      inputs.name +
      "/" +
      inputs.email +
      "&body=" +
      messageEnter
    document.location = request
  }
  return (
    <>
      <section id="contact" className={utilStyles.container}>
        <h1 className="section-header">Contact</h1>
        <div className="contact__wrap">
          <form onSubmit={(e) => sendMessage(e)} className="contact__form">
            <input
              value={inputs.name}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="name"
              placeholder="name"
              title="Your name"
              maxLength={50}
              required
            />
            <input
              value={inputs.email}
              onChange={(e) => handleInputChange(e)}
              type="email"
              name="email"
              placeholder="email"
              title="Your email"
              maxLength={50}
              required
            />
            <textarea
              value={inputs.message}
              onChange={(e) => handleInputChange(e)}
              name="message"
              placeholder="message"
              title="Your message"
              maxLength={550}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <section className="links">
          <ul className="links-list">
            <Icon
              source={Github}
              name="Github"
              link="https://github.com/cristhianbenitez"
            />
            <Icon
              source={Instagram}
              name="Instagram"
              link="https://www.instagram.com/pipebenitez25/"
            />
            <Icon
              source={Twitter}
              name="Twitter"
              link="https://twitter.com/PipeBenitez25"
            />
            <Icon
              source={LinkedIn}
              name="LinkedIn"
              link="https://www.linkedin.com/in/cristhianbenitez/"
            />
            <Icon
              source={Email}
              name="Gmail"
              link="mailto:cristhianbenitez@gmail.com"
            />
          </ul>
        </section>
        <div className="elevator " onClick={() => scroll(0)}>
          <Image
            src={ArrowUp}
            width={125}
            height={125}
            alt="elevator to take you to the intro of the page"
            className="button"
          />
        </div>
      </section>

      <style jsx>{`
        .contact__form {
          display: flex;
          flex-direction: column;
          width: 30rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .contact__form input {
          height: 35px;
          border: 2px solid #00000;
          padding-left: 5px;
          margin-bottom: 10px;
          transition: 0.2s;
        }

        .contact__form input::placeholder {
          text-transform: uppercase;
          font-size: 12px;
        }
        .contact__form textarea {
          height: 150px;
          border: 2px solid #00000;
          resize: none;
          padding-left: 5px;
          padding-top: 10px;
          margin-bottom: 10px;
        }
        .contact__form textarea::placeholder {
          text-transform: uppercase;
          font-size: 12px;
        }

        .contact__form button {
          height: 40px;
          font-size: 14px;
          color: #fff;
          background: #ff8080;
          text-transform: uppercase;
          width: 50%;
          transition: 0.2s;
          border: none;
          border-radius: 6px;
        }
        .contact__form button:hover {
          border: none;
          transform: scale(1.01);
          cursor: pointer;
        }
        .icon {
          fill: white;
          background-color: white;
        }
        .links-list {
          width: 100%;
          margin: 5em auto;
          display: flex;
          justify-content: center;
          list-style: none;
          gap: 20px;
        }
        .elevator {
          width: fit-content;
          right: 100px;
          bottom: 100px;
          position: absolute;
          border-radius: 100%;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default ContactForm
