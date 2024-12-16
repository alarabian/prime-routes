import BusBook from '@/components/bus-book/BusBook'
import PageCover from '@/components/common/cover/PageCover'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Bus Book"} url={"/assets/images/bus-breadcrumb.jpg"} />
      <BusBook />
    </>
  )
}

export default page