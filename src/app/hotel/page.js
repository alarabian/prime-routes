import PageCover from '@/components/common/cover/PageCover'
import HotelCom from '@/components/hotel/HotelCom'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Hotel"} />
      <HotelCom />
    </>
  )
}

export default page