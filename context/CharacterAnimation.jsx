import React, { createContext, useContext, useState } from 'react'

const context = createContext(null)

function CharacterAnimation({children}) {
    const [animInd ,setAnimInd] = useState(0)
    const [anim , setAnim] = useState([])
    const values ={
        animInd ,setAnimInd,anim , setAnim
    }
  return (
    <context.Provider value={values} > 
    {children}
    </context.Provider>
  )
}

export  const useAnimationContext = () => useContext(context)

export default CharacterAnimation