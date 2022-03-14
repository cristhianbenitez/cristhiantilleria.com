import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  source: any
  link: string
  name: string
}
const Icon = ({ source, link, name }: Props) => {
  return (
    <>
      <li className="link-icon">
        <Link href={link} passHref={true}>
          <a>
            <Image
              src={source}
              width={30}
              height={30}
              alt={`icon for ${name}`}
            />
          </a>
        </Link>
      </li>

      <style jsx>{`
        .link-icon {
          cursor: pointer;
        }
        .link-icon:hover,
        .link-icon:focus {
          transform: scale(1.09);
        }
      `}</style>
    </>
  )
}

export default Icon
