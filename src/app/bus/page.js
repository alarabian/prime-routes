import BusComp from '@/components/bus/BusComp'
import PageCover from '@/components/common/cover/PageCover'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Bus List"} url={"/assets/images/bus-breadcrumb.jpg"} />
      <BusComp />
    </>
  )
}

export default page