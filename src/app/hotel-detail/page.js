import PageCover from '@/components/common/cover/PageCover'
import HotelDetail from '@/components/hotel-detail/HotelDetail'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Hotel Detail"} />
      <HotelDetail />
    </>
  )
}

export default page