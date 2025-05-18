import React from 'react'
import { PrismaStudioTable } from '../data_table'
import { columns } from '../column'
import { users } from '../../../../../table/quiz'

export default function page() {
  return (
    <div className='mt-20'>
        <PrismaStudioTable
          columns={columns}
          data={users}
        />
    </div>
  )
}
