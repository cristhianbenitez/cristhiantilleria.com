import Layout from "@/components/Layout"
import React from "react"
import { books } from "@/utils/airtable"
import Image from "next/image"

const Books = ({ entries }: { entries: MediaData[] }) => {
  return (
    <Layout title="Books">
      <section>
        {entries.map(({ id, title, author, cover }: MediaData) => {
          return (
            <div
              key={id}
              style={{ display: "flex", gap: 15, marginBottom: "1rem" }}
            >
              <div style={{ width: "6rem" }}>
                <Image
                  src={cover.src}
                  alt={`The media cover for “${title}” by ${author}`}
                  width={cover.width}
                  height={cover.height}
                  layout="responsive"
                />
              </div>
              <div>
                <p>{title}</p>
                <small>{author}</small>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

interface MediaCover {
  src: string
  width: number
  height: number
}
export interface MediaData {
  author: string
  cover: MediaCover
  synopsis?: string
  quotes?: string | string[]
  title: string
  url: string
  id: string
}
interface AirtableRecord {
  id: string
  _rawJson: {
    fields: MediaData & {
      cover: Array<{
        thumbnails: {
          large: {
            url: string
            width: number
            height: number
          }
        }
      }>
    }
  }
}

export const getStaticProps = async () => {
  const response = await books.select({}).all()

  const entries = response.map(({ id, _rawJson }: AirtableRecord) => {
    const { fields } = _rawJson
    const cover = {
      src: fields.cover[0].thumbnails.large.url,
      width: fields.cover[0].thumbnails.large.width,
      height: fields.cover[0].thumbnails.large.height,
    }

    return { ...fields, cover, id }
  }) as MediaData[]

  return { props: { entries }, revalidate: 60 }
}

export default Books
