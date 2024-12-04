
import AboutCom from '@/components/about/AboutCom'
import PageCover from '@/components/common/cover/PageCover'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"About Us"} />
      <AboutCom />
    </>
  )
}

export default page