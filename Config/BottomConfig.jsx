import { ColorInput, Stack } from '@mantine/core'
import React from 'react'
import { Colors, useConfigContext } from '../context/CharacterConfig'

function BottomConfig() {
  const {colorCustom , setColorCustom} = useConfigContext()

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Pants"
        format="hex"
        swatches={Colors}
        value={colorCustom?.pants}
        onChange={(e) => setColorCustom({...colorCustom , pants : e})}
      />
      <ColorInput
        label="Shoes"
        format="hex"
        swatches={Colors}
        value={colorCustom?.shoes}
        onChange={(e) => setColorCustom({...colorCustom , shoes : e})}
      />
      <ColorInput
        label="Laces"
        format="hex"
        swatches={Colors}
        value={colorCustom?.laces}
        onChange={(e) => setColorCustom({...colorCustom , laces : e})}
      />
      <ColorInput
        label="Sole"
        format="hex"
        swatches={Colors}
        value={colorCustom?.sole}
        onChange={(e) => setColorCustom({...colorCustom , sole : e})}
      />
    </Stack>
  )
}

export default BottomConfig