import { ColorInput, Stack } from '@mantine/core'
import React from 'react'
import { Colors, useConfigContext } from '../context/CharacterConfig'

function BodyConfig() {
  const {colorCustom , setColorCustom} = useConfigContext()
  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Shirt"
        format="hex"
        swatches={Colors}
        value={colorCustom?.shirt}
        onChange={(e) => setColorCustom({...colorCustom , shirt : e})}
      />
    </Stack>
  )
}

export default BodyConfig