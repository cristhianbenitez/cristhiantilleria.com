import formatDate from "@/utils/formatDate"

type Props = {
  dateString: string
}

export default function Date({ dateString }: Props) {
  const date = formatDate(dateString)

  return <time dateTime={dateString}>{date}</time>
}
