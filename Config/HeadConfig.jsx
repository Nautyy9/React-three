import { ColorInput, Slider, Stack, Title, Text } from '@mantine/core';
import React from 'react'
import { Colors, useConfigContext } from '../context/CharacterConfig';

function HeadConfig() {
    const {colorCustom , setColorCustom, morphDic , morphInf, setMorphInf } = useConfigContext()

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Hair"
        format="hex"
        swatches={Colors}
        value={colorCustom.hair}
        onChange={ (e) => setColorCustom({...colorCustom , hair : e})}
      />
      <ColorInput
        label="Eyes"
        format="hex"
        swatches={Colors}
        value={colorCustom.eyes}
        onChange={ (e) => setColorCustom({...colorCustom , eyes : e})}
      />
      <ColorInput
        label="Glasses"
        format="hex"
        swatches={Colors}
        value={colorCustom.glass}
        onChange={ (e) => setColorCustom({...colorCustom , glass : e})}
      />
      <ColorInput
        label="Mouth"
        format="hex"
        swatches={Colors}
        value={colorCustom.mouth}
        onChange={ (e) => setColorCustom({...colorCustom , mouth : e})}
      />
      <ColorInput
        label="Skin"
        format="hex"
        swatches={Colors}
        value={colorCustom.skin}
        onChange={ (e) => setColorCustom({...colorCustom , skin : e})}
      />
      <Title order={3}>Expressions</Title>
      {
        morphDic.map((morph , ind) => (
          <Stack key={ind}>
            <Text>{morph}</Text>
            <Slider 
              min={0}
              max={1}
              step={0.01}
              label={(val) => Math.round(val *100)}
              value = {morphInf[ind]}
              onChange={(val) =>{
                morphInf[ind] = val
                
                //? here we are updating the morphInf state but it won't work i.e, the slider won't move
                //? bcz we are not actually updating the morphInf state i.e morphInf has the expression and we've to change it , yes we are updating the value but it is local to the onChange , & we must have to update the inf state
                setMorphInf([...morphInf]);
                //! why we are spreading ? --> 
                //* bcz above we've morph inf which have the slider value and obviously we need that in our morph inf to update it in the woman jsx
              }}
            />
          </Stack>
        ))}
    </Stack>
  )
}

export default HeadConfig