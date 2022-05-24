import NewTab from './links/NewTab'

export default function Footer() {
  return (
    <footer className='layout'>
      <div className='h-[1px] w-full bg-slate-200 dark:bg-gray-800' />
      <div className='flex py-10'>
        <span className='text-sm'>
          Erik Streller {new Date().getFullYear()} •{' '}
          <NewTab
            href={'/'}
            className='text-link cursor-pointer hover:underline hover:underline-offset-2'
          >
            Source Code
          </NewTab>
        </span>
      </div>
    </footer>
  )
}
