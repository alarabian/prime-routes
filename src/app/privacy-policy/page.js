import PageCover from '@/components/common/cover/PageCover'
import Privacy from '@/components/privacy/Privacy'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Privacy Policy"} />
      <Privacy />
    </>
  )
}

export default page