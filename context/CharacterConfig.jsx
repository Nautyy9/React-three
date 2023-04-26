import React, { createContext, useContext, useState } from 'react'
const context = createContext()

export const  changeModes = {
    "HEAD": "HEAD",
    "BODY": "BODY",
    "FREE": "FREE",
    "BOTTOM": "BOTTOM",
}

export const Colors = [
  "#25262b",
  "#868e96",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14",
];

function CharacterConfig({children}) {
    const [modes , setModes] = useState(changeModes["FREE"])
    const [colorCustom , setColorCustom] = useState({
      eyes : '',
      hair : '',
      mouth: '',
      glass: '',
      skin : '',
      shirt : '',
      pants: '',
      shoes: '',
      laces: '',
      sole: ''
    })
    const [morphDic, setMorphDic] = useState([])
    const [morphInf, setMorphInf] = useState([])
    const [takeSs,setTakeSs] = useState()

    const values ={
        modes , setModes, changeModes, colorCustom , setColorCustom, morphDic, setMorphDic, morphInf, setMorphInf , takeSs,setTakeSs
    }
  return (
    <context.Provider value={values} > 
    {children}
    </context.Provider>
  )
}
export  const useConfigContext = () => useContext(context)
export default CharacterConfig