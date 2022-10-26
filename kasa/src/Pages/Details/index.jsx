//import React from "react"
//import { useFetch } from '../../utils/hooks'

//import { func } from "prop-types"
//import { useState, useEffect,useFetch, axios } from "react";
//import { useParams, useSearchParams } from "react-router-dom";
//mport products from '../../datas/locationslist.json'
//import Fetch from "../../utils/hooks";
import '../../styles/Saas/pages/_details.scss'
import SingleLocation from '../../components/Hooks'

export default function Details(pictures, id, title) {
  return (
    <main>
      <SingleLocation key={id} pictures={pictures} />
     
    </main>
  )
}
