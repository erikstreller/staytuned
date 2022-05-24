export type APIres = {
  feed: {
    entry: {
      'im:name': {
        label: string
      }
      'im:image': {
        label: string
        attributes: {
          height: string
        }
      }[]
      'im:artist': {
        label: string
      }
      category: {
        attributes: {
          term: string
        }
      }
      id: {
        attributes: {
          'im:id': string
        }
      },
      'im:releaseDate': {
        label: string
      },
      'im:price': {
        label: string
      }
    }[]
  }
}

export type Image = {
  url: string
  height: string
}

export type BasicTopAlbum = {
  name: string
  image: Image[]
  artist: string
  category: string
  id: string
}

export type ExtendedTopAlbum = {
  releaseDate: string
  price: string
} & BasicTopAlbum