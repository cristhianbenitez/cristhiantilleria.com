import { format, parseISO } from "date-fns"

type Props = {
  dateString: string
}

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)
  const dateFormat = "LLLL d, yyyy"
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}
