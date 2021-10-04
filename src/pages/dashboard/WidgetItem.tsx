import React from 'react'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const calculateColors = (data: number, min?: number, max?: number, isHighGood?: boolean) => {
  if(max && data > max) {
    return isHighGood ? 'good' : 'bad'
  }
  if(min && data < min) {
    return isHighGood ? 'bad' : 'good'
  }
  return 'average'
}

export function WidgetItem({label, icon, dataVal, dataText, min, max, isHighGood, chart}:Props) {
  
  return (
    <ItemWrapper color={calculateColors(dataVal, min, max, isHighGood)} hasChart={chart !== undefined}>
      <div className="main-info">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="data-value">{dataText}</div>
        <div className="label">{label}</div>
        <div className="link-button"><FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
      {chart &&
        <div className="chart-wrapper">
          <img src={chart} alt="Chart" />
        </div>
      }
    </ItemWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Props = {
  label: string
  icon: IconProp
  dataVal: number
  dataText: string
  min?: number
  max?: number
  isHighGood: boolean
  chart?: string
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 1px ${({theme}) => theme.outline};
  border-radius: 10px;
  padding: 16px;
  color: ${({theme}) => theme.text};
  ${({hasChart}) => hasChart && css`grid-row: 1 / -1;`}
  
  .main-info {
    position: relative;
    
    .icon {
      font-size: 20px;
      margin-bottom: 8px;
    }
    
    .label {
      font-size: 10px;
      align-self: flex-end;
      letter-spacing: 1px;
      color: ${({theme}) => theme.outline};
    }
    .data-value {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .link-button {
      position: absolute;
      right: 0;
      bottom: 0;
      background: ${({theme}) => theme.grayBackground};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 10px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme}) => theme.darkenedPrimary};
      transform: rotate(-45deg);
      transition: 0.3s ease-out;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 5px ${({theme}) => theme.primary};
      }
    }
  }

  .chart-wrapper {
    margin-top: auto;
  }

  ${({color}) => color === "good" ? css`
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    
    .main-info .link-button {
      background: ${({theme}) => theme.white};
    }
  ` : color === "bad" && css`
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.darkenedPrimary};
    
    .main-info .label {
      color: ${({theme}) => theme.primary};
    }
    .main-info .link-button {
      background: ${({theme}) => theme.white};
    }
  `}
`