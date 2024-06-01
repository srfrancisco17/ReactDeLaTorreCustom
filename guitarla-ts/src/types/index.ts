export type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
  reviews?: string[],
  quantity: number
}

export type CartItem = Guitar & {
  quantity: number
}

export type GuitarID = Guitar['id']