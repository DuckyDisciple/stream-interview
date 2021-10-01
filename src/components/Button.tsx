import styled, { css } from 'styled-components'

const whiteButtonStyle = css`
  --buttonTextColor: var(--primaryColor);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: transparent;
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
`
const ghostButtonStyle = css`
  --buttonBorder: 2px solid var(--white);
  color: var(--white);
  --buttonBg: transparent;
  --buttonShadow: none;
  --buttonHoverBorderColor: var(--white);
  --buttonHoverBg: var(--white);
  --buttonHoverColor: var(--primaryColor);
`

const outlineButtonStyle = css`
  --buttonTextColor: var(--primaryColor);
  --buttonBg: transparent;
  --buttonBorder: 2px solid var(--primaryColor);
  --buttonHoverBg: var(--primaryColor);
  --buttonHoverColor: var(--white);
  --buttonHoverBorderColor: var(--primaryColor);
`

const gradientButtonStyle = css`
  background: var(--buttonGradient);
  color: var(--white);
  --hoverTransition: 0.5s fade;
  &:hover {
    color: var(--white);
    background: #5c1373;
  }
`

export const baseButtonStyle = css`
  color: ${({theme}) => theme.text};
  background: transparent;
  display: inline-block;
  text-align: left;
  appearance: none;
  padding: 10px 20px;
  border-radius: 20px;
  transition: 0.3s ease-out;
  outline: none;
  border: none;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    color: ${({theme}) => theme.primary};
    /* background-color: ${({theme}) => theme.background}; */
  }

  svg {
    margin-right: 12px;
  }
`

export const smallButtonStyle = css`
  --buttonPadding: 2px 15px;
  --buttonMinWidth: none;
  font-size: var(--smallText);
`

export const Button = styled.button<{
  color?: string
  size?: string
}>`
  ${baseButtonStyle};
  ${({ size }) => size === 'small' && smallButtonStyle};
  ${({ color }) => {
    if (color === 'ghost') return ghostButtonStyle
    if (color === 'outline') return outlineButtonStyle
    if (color === 'white') return whiteButtonStyle
    if (color === 'gradient') return gradientButtonStyle
  }};
`
