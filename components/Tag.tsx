import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

type LabelProps = {
  category: string
  activeGenre: string
  setActiveGenre: Dispatch<SetStateAction<string>>
}

export default function Tag({
  category,
  activeGenre,
  setActiveGenre
}: LabelProps) {
  function handleGenre() {
    if (activeGenre === category) {
      setActiveGenre('')
    } else {
      setActiveGenre(category)
    }
  }

  return (
    <div
      className={clsx(
        'flex cursor-pointer justify-center rounded-md bg-slate-100 py-1 px-2 align-middle',
        'transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-600',
        activeGenre === category
          ? 'bg-slate-300 hover:bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-500'
          : ''
      )}
      onClick={handleGenre}
    >
      {category}
    </div>
  )
}
