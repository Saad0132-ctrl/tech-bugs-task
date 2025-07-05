'use client'

import { useRouter } from 'next/navigation'

export default function Home () {
  const router = useRouter()

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <button
        onClick={() => router.push('/dashboard')}
        className='px-4 py-2 bg-black text-white rounded'
      >
        Go To Dashboard
      </button>
    </div>
  )
}
