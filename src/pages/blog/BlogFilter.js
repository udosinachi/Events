import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      color='primary'
      value={alignment}
      exclusive
      onChange={handleChange}
      className='filter'
    >
      <ToggleButton value='all' className='filter'>
        All
      </ToggleButton>
      <ToggleButton value='cakes' className='filter'>
        Cakes
      </ToggleButton>
      <ToggleButton value='caterers' className='filter'>
        Caterers
      </ToggleButton>
      <ToggleButton value='dj' className='filter'>
        Dj
      </ToggleButton>
      <ToggleButton value='decoration' className='filter'>
        Decoration
      </ToggleButton>
      <ToggleButton value='mc' className='filter'>
        MC
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
