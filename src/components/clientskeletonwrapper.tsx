// File: src/components/ClientWrapper.tsx

'use client'
import dynamic from 'next/dynamic'

const HomeLoading = dynamic(() => import('./HomeLoading'), {
  ssr: false,
  loading: () => <div className="p-4 mt-40">Loading...</div>,
})

export default function ClientWrapper() {
  return   <HomeLoading />
}
