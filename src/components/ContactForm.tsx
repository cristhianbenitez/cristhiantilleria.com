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
  return (
    <>
      <section id="contact" className={utilStyles.container}>
        <h1 className="section-header">Contact</h1>
        <h2 className="section-title">
          Let's create your next experience together
        </h2>
        <h2 className="email-contact">
          <a href="mailto:cristhiantilleria@gmai.com">
            cristhiantilleria@gmail.com
          </a>
        </h2>
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
        .email-contact a {
          font-weight: 400;
          color: lightcoral;
          text-align: center;
          margin: center;
          display: flex;
          justify-content: center;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 400;
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
