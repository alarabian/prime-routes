import PageCover from '@/components/common/cover/PageCover'
import VideoComp from '@/components/video/VideoComp'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Video Gallery"} url={"/assets/images/breadcumb-bg.jpg"} />
      <VideoComp />
    </>
  )
}

export default page