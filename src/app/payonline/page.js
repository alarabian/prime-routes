import PageCover from '@/components/common/cover/PageCover'
import PayOnlineCom from '@/components/pay-online/PayOnlineCom'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Pay Online"} />
      <PayOnlineCom />
    </>
  )
}

export default page