import { MouseEventHandler } from "react"

export type shortUrl = {
  shortUrl: string
  onShortenNewUrl: () => void
}

export type create = {
    action:  MouseEventHandler<HTMLButtonElement>
}
