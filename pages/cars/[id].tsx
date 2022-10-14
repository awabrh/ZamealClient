import { useRouter } from 'next/router'
import React from 'react'

function Car() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>Hello {id}</div>
  )
}

export default Car