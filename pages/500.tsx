import BlurButton from '@/components/buttons/BlurButton'
import PageLink from '@/components/links/PageLink'
import PageContainer from '@/components/PageContainer'

export default function Custom500() {
  return (
    <PageContainer page='500'>
      <div className='layout mt-24'>
        <div className='flex flex-col items-center text-center'>
          <p className='page-heading'>500</p>
          <p className='page-description max-w-lg'>
            Server-side error. Try refreshing the page. If the problem persists
            feel free to contact us.
          </p>
          <PageLink href='/' className='flex justify-center'>
            <BlurButton gradient color='from-cyan-500 to-amber-500'>
              Back Home
            </BlurButton>
          </PageLink>
        </div>
      </div>
    </PageContainer>
  )
}
