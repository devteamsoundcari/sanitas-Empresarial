import React from 'react'
import { SanitasEmpresarialContext } from '../context/index'

const FindIcon = () => {
  const { docTypeDisabled } = React.useContext(SanitasEmpresarialContext)
  return (
    <svg
      fill={docTypeDisabled ? '#000000' : '#ffffff'}
      width="30px"
      height="30px"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z" />
    </svg>
  )
}
export { FindIcon }
