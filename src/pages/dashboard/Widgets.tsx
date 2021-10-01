import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { faHeartBroken, faProcedures, faStethoscope, faVirus, faViruses, faVirusSlash } from '@fortawesome/free-solid-svg-icons'
import numberFormater from 'utilities/NumberFormat'
import WidgetItem from './WidgetItem'
import barGraph from "images/bar-graph.png"
import lineGraph from "images/line-graph.png"

const fakeData = {
  coronaCases: 289251,
  recovered: 98711,
  activeCases: 96302,
  deaths: 23631,
  testingDone: 321441,
  bedsAvailable: 2800
}

export default function Widgets() {
  const [info, setInfo] = useState<IInfo>()

  useEffect(() => {
    // Would normally pass in data from query
    setInfo(fakeData)
  },[])

  return (
    <WidgetWrapper>
      <WidgetItem label="Corona Cases" icon={faVirus} dataVal={info?.coronaCases} dataText={numberFormater(info?.coronaCases)} isHighGood={false} />
      <WidgetItem label="Recovered" icon={faVirusSlash} dataVal={info?.recovered} dataText={numberFormater(info?.recovered)} min={10000} max={90000} isHighGood={true} />
      <WidgetItem label="Active Cases" icon={faViruses} dataVal={info?.activeCases} dataText={numberFormater(info?.activeCases)} isHighGood={false} chart={barGraph} />
      <WidgetItem label="Deaths" icon={faHeartBroken} dataVal={info?.deaths} dataText={numberFormater(info?.deaths)} max={10000} isHighGood={false} />
      <WidgetItem label="Testing Done" icon={faStethoscope} dataVal={info?.testingDone} dataText={numberFormater(info?.testingDone)} isHighGood={true} />
      <WidgetItem label="Beds Available" icon={faProcedures} dataVal={info?.bedsAvailable} dataText={numberFormater(info?.bedsAvailable)} isHighGood={true} chart={lineGraph} />
    </WidgetWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
interface IInfo {
  coronaCases: number
  recovered: number
  activeCases: number
  deaths: number
  testingDone: number
  bedsAvailable: number
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const WidgetWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  grid-auto-flow: column dense;

  .data {
    padding: 10px 10px 10px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    color: ${({theme}) => theme.dark};
  }

  address {
    margin-bottom: 16px;
    font-style: normal;
    color: ${({theme}) => theme.darkenedPrimary};
  }

  .info-items {
    display: grid;
    grid-auto-flow: column;
  }

  .image-wrapper {
    margin-left: auto;
    
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`