import React from 'react'

import Shell from '@/components/Shell'
import Meta from '@/components/Meta'

const NotFound = () => {
  return (
    <>
      <Meta title='404,无法找到该页面' />
      404,无法找到该页面
    </>
  )
}

NotFound.loadDataOnServer = async () => {
  return { code: 404 }
}

export default Shell(NotFound)
