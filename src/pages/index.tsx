import { useState } from "react"
import { Header } from "../components/Header/index."
import {debaunceMyFunction} from '@numpod/debounce-my-function'
import { toKana } from 'wanakana'

import '../styles/pages/Home.scss'


export const Home = () => {
  const [phrase, setPhrase] = useState('Type anything')
  const [searchResult, setSearchResult] = useState<any>()

  const searchImageBasedOnInput =  (): any => {
    console.log(phrase)
  }

  return (
    <div>
      {/* <Header /> */}
      <section className="first-section">
        <div>
          <input type="text" value={phrase} onChange={e => setPhrase(e.target.value)} onKeyUp={debaunceMyFunction(searchImageBasedOnInput, 2000, null)}/>
        </div>
        <div>
          <h2>{phrase}</h2>
          <h4>{toKana(phrase)}</h4>
        </div>
      </section>
    </div>
  )
}