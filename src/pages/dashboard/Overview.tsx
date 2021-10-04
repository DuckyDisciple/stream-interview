import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import overviewImage from 'images/nmh-overview-image.png'
import {OverviewDataItem} from 'pages/dashboard'
import { faCity, faUser } from '@fortawesome/free-solid-svg-icons'
import {formatNumber} from 'utilities/formatNumber'

const fakeData = {
  name: "Northwestern Memorial Hospital",
  address: "251 E Huron St, Chicago, IL 60611, United States",
  doctorCount: 3800,
  cityCount: 21
}

export function Overview() {
  const [info, setInfo] = useState<OverviewType>()

  useEffect(() => {
    // Would normally pass in data from query
    setInfo(fakeData)
  },[])

  return (
    <OverviewWrapper>
      <div className="data">
        {info && 
          <>
            <h2>{info.name}</h2>
            <address>{info.address}</address>
            <div className="info-items">
              <OverviewDataItem label="Total doctors" icon={faUser} dataVal={formatNumber(info.doctorCount)}/>
              <OverviewDataItem label="Number of cities" icon={faCity} dataVal={formatNumber(info.cityCount)}/>
            </div>
          </>
        }
      </div>
      <div className="image-wrapper">
        <img src={overviewImage} alt="Doctor vector graphic" />
      </div>
    </OverviewWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type OverviewType = {
  name: string
  address: string
  doctorCount: number
  cityCount: number
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const OverviewWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  background: ${({theme}) => theme.lightBlue};
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 50px;

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