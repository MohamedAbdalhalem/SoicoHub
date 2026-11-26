export default function PostDetailsLoadingScreen() {
  return (
    <main className='mx-auto max-w-180 px-3 py-5 sm:px-6 sm:py-7'>
      <article
        aria-hidden='true'
        className='animate-pulse overflow-hidden rounded-[24px] border border-[#e5e8ee] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.035)] dark:border-[#303a4c] dark:bg-[#1b2330]'
      >
        <div className='flex items-center justify-between gap-3 p-5 sm:p-6'>
          <div className='flex min-w-0 items-center gap-3'>
            <div className='h-12 w-12 shrink-0 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
            <div className='space-y-2'>
              <div className='h-4 w-36 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
              <div className='h-3 w-48 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
            </div>
          </div>
          <div className='h-9 w-9 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
        </div>

        <div className='space-y-2 px-5 pb-5 sm:px-6'>
          <div className='h-4 w-4/5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
          <div className='h-4 w-1/3 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
        </div>

        <div className='mx-4 mb-4 h-64 rounded-2xl bg-[#e2e5eb] dark:bg-[#303a4c] sm:mx-6 sm:mb-6 sm:h-90' />

        <div className='flex justify-between px-5 pb-4 sm:px-6'>
          <div className='h-3 w-16 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
          <div className='h-3 w-32 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
        </div>

        <div className='mx-5 flex justify-around border-y border-[#e9ebf0] py-3 dark:border-[#303a4c] sm:mx-6'>
          <div className='h-4 w-14 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
          <div className='h-4 w-20 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
          <div className='h-4 w-14 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
        </div>

        <section className='space-y-5 p-5 sm:p-6'>
          <div className='flex items-center justify-between'>
            <div className='h-5 w-28 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
            <div className='h-3 w-24 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
          </div>
          <div className='flex items-center gap-3'>
            <div className='h-11 w-11 shrink-0 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
            <div className='h-11 flex-1 rounded-2xl bg-[#e2e5eb] dark:bg-[#303a4c]' />
          </div>
          {[0, 1].map((item) => (
            <div key={item} className='flex items-start gap-3'>
              <div className='h-11 w-11 shrink-0 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
              <div className='space-y-2'>
                <div className='h-18 w-60 max-w-[65vw] rounded-2xl bg-[#e2e5eb] dark:bg-[#303a4c]' />
                <div className='h-3 w-32 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
              </div>
            </div>
          ))}
        </section>
      </article>
    </main>
  )
}
