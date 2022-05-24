import clsx from 'clsx'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type SearchProps = {
  margin?: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function Search({ margin, setSearchValue }: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <input
      type='text'
      maxLength={50}
      aria-label='Search...'
      placeholder='Search...'
      onChange={handleChange}
      className={clsx(
        'w-full rounded-md border border-gray-600 bg-white px-4 py-2 text-xl shadow-sm dark:bg-marine',
        'focus:border-description focus:ring-description focus:outline-none focus:ring-1',
        margin
      )}
    ></input>
  )
}
