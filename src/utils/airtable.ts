/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Airtable = require("airtable")

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
})

const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

const books = base(process.env.AIRTABLE_TABLE_NAME)

export { books }
