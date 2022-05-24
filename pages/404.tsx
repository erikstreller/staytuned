import BlurButton from '@/components/buttons/BlurButton'
import PageLink from '@/components/links/PageLink'
import PageContainer from '@/components/PageContainer'

export default function Custom404() {
  return (
    <PageContainer page='404'>
      <div className='layout mt-24'>
        <div className='flex flex-col text-center'>
          <p className='page-heading'>404</p>
          <p className='page-description'>No music is playing on this page.</p>
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
