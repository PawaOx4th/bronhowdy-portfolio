import styled from "styled-components"
import { CSSProperties } from "react"

// interface IContainer :

export const Container = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
`
