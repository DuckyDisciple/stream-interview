import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function OverviewDataItem({label, icon, dataVal}:Props) {
  return (
    <ItemWrapper>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="label">{label}</div>
      <div className="data-value">{dataVal}</div>
    </ItemWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Props = {
  label: string
  icon: IconProp
  dataVal: string
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  column-gap: 12px;

  .icon {
    grid-column: 1;
    grid-row: 1 / -1;
    background: ${({theme}) => theme.darkenedPrimary};
    color: ${({theme}) => theme.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
  }

  .label {
    font-size: 10px;
    align-self: flex-end;
    letter-spacing: 1px;
  }
  .data-value {
    font-size: 20px;
  }
`