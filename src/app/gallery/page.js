import PageCover from '@/components/common/cover/PageCover'
import GalleryComp from '@/components/gallery/GalleryComp'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Gallery"} url={"/assets/images/breadcumb-bg.jpg"} />
      <GalleryComp />
    </>
  )
}

export default page