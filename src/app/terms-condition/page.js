import PageCover from '@/components/common/cover/PageCover'
import TermsCondition from '@/components/terms-condition/TermsCondition'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Terms & condition"} />
      <TermsCondition />
    </>
  )
}

export default page