import { ReactNode } from "react"
import "./Globalstyles.scss"

interface Props {
  children: ReactNode
}
const GlobalStyle = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default GlobalStyle
