import React, { ReactChild } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactChild
  id?: string
  theme?: string
  isHero?: boolean
}

export function Section({ children, id = '', theme = '', isHero = false }: Props) {
  return (
    <SectionWrapper
      id={id}
      className={`section ${theme ? `section--theme__${theme}` : ''} ${
        isHero || theme === 'funky' ? `section--skewed` : ''
      } ${isHero ? `section--hero` : ''}`}
    >
      <div className="wrapper">
        <section className="section__inner section--padding">{children}</section>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  position: relative;

  .section__inner {
    /* Size intentions */
    &.section--padding {
      &.section--padding__top-0 {
        padding-top: 0;
      }
      &.section--padding__bottom-0 {
        padding-bottom: 0;
      }

      position: relative;
      z-index: 1;
      padding: 25px 0 25px;
      & > *:first-child {
        margin-top: 0;
      }
      & > *:last-child {
        margin-bottom: 0;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({theme}) => theme.text};
  }

  @media (min-width: 1112px) {
    .section--padding {
      --sectionPaddingTop: calc(var(--sectionPaddingTopMax) * 1px);
      --sectionPaddingBottom: calc(var(--sectionPaddingBottomMax) * 1px);
    }
  }
`
