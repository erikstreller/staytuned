import Spinner from './Spinner'

export default function AlbumCounter({ count }: { count: number }) {
  return <>{count > 0 ? count : <Spinner />}</>
}
