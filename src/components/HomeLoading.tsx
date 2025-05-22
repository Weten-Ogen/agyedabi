

'use client'

import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <section className="w-full p-4 space-y-6">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="flex space-x-4 overflow-x-auto">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[150px] w-[250px] rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-[20px] w-full rounded" />
        <Skeleton className="h-[20px] w-full rounded" />
        <Skeleton className="h-[100px] w-full col-span-2 rounded" />
        <Skeleton className="h-[20px] w-1/2 rounded" />
      </div>
    </section>
  )
}
