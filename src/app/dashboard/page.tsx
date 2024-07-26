import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';

import React from 'react'

export default async function Page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/");
  }
  return (
    <div className='text-white'>
      <div>
        olá, {session?.user?.name}
      </div>
      <div>Dashboard</div>
    </div>
  )
}
