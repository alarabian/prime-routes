import PageCover from '@/components/common/cover/PageCover'
import FlightDetail from '@/components/flight-detail/FlightDetail'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Flight Detail"} url={"/assets/images/breadcrumb-05.jpg"} />
      <FlightDetail />
    </>
  )
}

export default page