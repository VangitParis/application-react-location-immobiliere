//import React from "react"
//import { useFetch } from '../../utils/hooks'

//import { func } from "prop-types"
//import { useState, useEffect,useFetch, axios } from "react";
import React from 'react'
import SingleLocation from '../../components/Utils/getSingleLocation'
import Description from '../../components/Utils/SingleLocationDescription'

export default function Details() {
  return (
    <main>
      <SingleLocation />
      <Description />
    </main>
  )
}
