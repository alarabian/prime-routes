import PageCover from '@/components/common/cover/PageCover'
import FlightComp from '@/components/flight/FlightComp'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Flight"} url={"/assets/images/breadcrumb-05.jpg"} />
      <FlightComp />
    </>
  )
}

export default page