import { Affix, Button, Group, Stack } from '@mantine/core'
import React from 'react'
import {useAnimationContext} from '../context/CharacterAnimation'
import { useConfigContext } from '../context/CharacterConfig'
import {BodyConfig, BottomConfig ,HeadConfig} from '../Config/index'
import {AiFillCamera} from 'react-icons/ai'
function Text() {
    const{animInd ,setAnimInd,anim } = useAnimationContext()
    const {modes ,setModes, changeModes, setTakeSs} = useConfigContext()
  return (
    <>

    <Affix position={{top: 50, right: 20}}>
      {modes === changeModes['HEAD'] ? <HeadConfig/> : modes === changeModes['BODY'] ? <BodyConfig/> : modes === changeModes['BOTTOM']? <BottomConfig/> : null}
    </Affix>
    <Affix position={{top : 20 , right : 20}}>
        <Group>
            <Button onClick={() => setTakeSs(true)}>
                <AiFillCamera size={18} />
            </Button>
            {Object.values(changeModes).map((val , id) =>(
                <Button  
                    key={id} 
                    variant={val === modes? 'filled' : 'light'} 
                    onClick={() => setModes(val)}
                    >{val}</Button>
            ))}
        </Group>
    </Affix>
    <Affix position={{bottom : 50 , right : 20}}>
        <Stack>
            {anim.map((val , id) =>(
                <Button  
                    key={id} 
                    variant={id === animInd ? 'filled' : 'light'} 
                    onClick={() => setAnimInd(id)}
                    >{val}</Button>
            ))}
        </Stack>
    </Affix>
    </>
  )
}

export default Text