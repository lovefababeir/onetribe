import React, { useState } from "react"
import "../components/intro.scss"
import IntroMessage from "./introMessage.js"
import HeroesLineup from "./heroesLineup.js"

const Intro = props => {
  const [showSuperHero, setShowSuperHero] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showPeople, setShowPeople] = useState(false)
  const { list, list2 } = props

  return (
    <div className="intro" id="intro">
      <IntroMessage
        setShowSuperHero={setShowSuperHero}
        setShowHero={setShowHero}
        setShowPeople={setShowPeople}
      />
      <HeroesLineup
        showSuperHero={showSuperHero}
        showHero={showHero}
        showPeople={showPeople}
        list={list}
        list2={list2}
      />
    </div>
  )
}

export default Intro
