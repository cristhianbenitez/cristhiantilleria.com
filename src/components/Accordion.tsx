/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react"
import css from "styled-jsx/css"

import {
  Accordion as AccordionContainer,
  AccordionItem as AccordionItemComponent,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

type Props = {
  children: React.ReactNode
}
export default function Accordion({ children, ...restProps }: Props) {
  return (
    <>
      <AccordionContainer
        className="accordion"
        allowZeroExpanded
        {...restProps}
      >
        {children}
      </AccordionContainer>

      <style jsx global>
        {accordionStyle}
      </style>
    </>
  )
}

Accordion.Item = function AccordionItem({ children, ...restProps }: Props) {
  return (
    <AccordionItemComponent className="accordion__item" {...restProps}>
      {children}
    </AccordionItemComponent>
  )
}
Accordion.Header = function AccordionHeader({ children, ...restProps }: Props) {
  return (
    <AccordionItemHeading className="accordion-heading">
      <AccordionItemButton className="accordion__button" {...restProps}>
        {children}
      </AccordionItemButton>
    </AccordionItemHeading>
  )
}
Accordion.Body = function AccordionBody({ children, ...restProps }: Props) {
  return <AccordionItemPanel {...restProps}>{children}</AccordionItemPanel>
}

const accordionStyle = css.global`
  .accordion {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  .accordion__item + .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    background-color: rgba(0, 0, 0, 0.1);
    color: #ffffff;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
  }

  .accordion__button:hover {
    background-color: rgba(100, 100, 100, 0.9);
  }

  .accordion__button:before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
