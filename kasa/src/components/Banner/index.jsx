import React from 'react'
import '../../styles/sass/layouts/_banner.scss'
import '../../styles/sass/main.scss'
import { useLocation } from 'react-router-dom'

export default function Banner() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return splitLocation[1] ? (
    <section className={splitLocation[1] === 'apropos' ? 'bannerAbout backgroundImgBannerAbout' : ''}>
    </section>
  ) : (
    <section className={splitLocation[1] === '' ? 'banner' : ''}>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </section>
  )
}
