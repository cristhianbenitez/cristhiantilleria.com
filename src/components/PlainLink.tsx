import Link, { LinkProps } from "next/link"

type Props = React.PropsWithChildren<LinkProps> & {
  className?: string
  onClick?: () => void
}

const PlainLink = ({ children, className, href, onClick }: Props) => (
  <>
    <span className={`plainlink-wrapper ${className}`}>
      <Link href={href} passHref={true}>
        <a href={String(href)} onClick={onClick}>
          {children}
        </a>
      </Link>
    </span>
    <style jsx>{`
      .plainlink-wrapper > a {
        text-decoration: none;
      }

      .blogTitle:hover > a,
      .blogTitle:focus > a {
        color: #ff7276;
      }
    `}</style>
  </>
)

export default PlainLink
