function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      aria-hidden='true'
      className={`rounded-md bg-[#e2e5eb] dark:bg-[#303a4c] ${className}`}
    />
  )
}

export default function SuggestionsLoadingScreen() {
  return (
    <div
      role='status'
      aria-label='Loading suggestions'
      className='min-h-screen overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'
    >
      <span className='sr-only'>Loading suggestions...</span>
      <div
        aria-hidden='true'
        className='mx-auto max-w-4xl animate-pulse px-4 py-5 sm:px-5 lg:px-0 lg:py-6'
      >
        <header className='mb-6 flex items-start justify-between gap-4'>
          <div className='space-y-2'>
            <SkeletonBlock className='h-3 w-20' />
            <SkeletonBlock className='h-9 w-44' />
          </div>
          <SkeletonBlock className='h-11 w-11 rounded-full' />
        </header>

        <div className='mb-6 flex items-center justify-between rounded-[20px] border border-[#e6eaf0] bg-white/80 px-4 py-3 dark:border-[#303a4c] dark:bg-[#1b2330]'>
          <div className='space-y-2'>
            <SkeletonBlock className='h-3 w-16' />
            <SkeletonBlock className='h-5 w-44' />
          </div>
          <SkeletonBlock className='h-6 w-20 rounded-full' />
        </div>

        <div className='space-y-4'>
          {[0, 1, 2, 3].map((item) => (
            <article
              key={item}
              className='rounded-[22px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'
            >
              <div className='flex items-center gap-3'>
                <SkeletonBlock className='h-12 w-12 shrink-0 rounded-full' />
                <div className='flex-1 space-y-2'>
                  <SkeletonBlock className='h-4 w-32' />
                  <SkeletonBlock className='h-3 w-24' />
                </div>
                <SkeletonBlock className='h-8 w-20 rounded-full' />
              </div>
              <div className='mt-3 flex items-center justify-between gap-3 border-t border-[#edf0f5] pt-3 dark:border-[#2c3649]'>
                <SkeletonBlock className='h-3 w-36' />
                <SkeletonBlock className='h-3 w-20' />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
