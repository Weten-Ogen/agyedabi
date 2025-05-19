import React from 'react'
import { PrismaStudioTable } from '../data_table'
import { columns } from '../column'
import { users } from '../quiz'

export default function page() {
  return (
    <div className='mt-20 p-8'>
        <PrismaStudioTable
          columns={columns}
          data={users}
        />
    </div>
  )
}
