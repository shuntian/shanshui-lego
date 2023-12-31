import React from 'react'
import Banner from '../../components/banner'
import HotTitle from '../../components/hot-title'
import TemplateList from '../../components/template-list'
import Welcome from '../../components/welcome'
import Wrapper from '../../components/wrapper'

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <Wrapper>
        <div className='content-container'>
          <HotTitle />
          <TemplateList />
        </div>
      </Wrapper>
    </>
  )
}
