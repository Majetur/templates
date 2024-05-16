import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export const Content = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
