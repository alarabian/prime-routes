import PageCover from '@/components/common/cover/PageCover'
import PackageDetails from '@/components/package-details/PackageDetails'
import RelatedTour from '@/components/related-tour/RelatedTour'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Package Detail"} />
      <PackageDetails />
      <RelatedTour />
    </>
  )
}

export default page