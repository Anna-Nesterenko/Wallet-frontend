import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const MainContainer = styled.div`
  padding: 12px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${respondTo.sm`
   	align-items: normal;
   	min-width: 768px;
   	padding: 32px 32px;`}

  ${respondTo.lg`
  	flex-direction: row;
  	align-items:flex-start;
  	min-width: 1200px;
  	padding: 0px 16px;`}
`
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  ${respondTo.lg`
  height: 100vh;
  padding-right:70px;
    border-right: 1px solid #E7E5F2;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    `}
`
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
