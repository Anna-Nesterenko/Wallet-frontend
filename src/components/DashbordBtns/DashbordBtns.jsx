import React from 'react'
import { BtnsCont, BtnText, Container, CurrLinkBtn, LinkBtn } from './DBtnsComponents';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styled from 'styled-components';
import { respondTo } from '../../helpers/respondTo';
import Media from 'react-media';

const DashbordBtns = () => {
    return (
        <Container>
            <BtnsCont>
                <LinkBtn to='/home'>
                    <Media queries={{ small: '(max-width: 767px)' }}>
                        {matches =>
                            matches.small ? (
                                <HomeSharpIcon
                                    sx={{
                                        color: '#fff',
                                        background: '#6e78e8',
                                        borderRadius: "6px",
                                        width: "44px",
                                        height: "44px",
                                        }}
                                />
                            ) : (
                                <HomeSharpIcon
                                    sx={{
                                        color: '#fff',
                                        background: '#6e78e8',
                                        width: "18px",
                                        height: "18px",
                                    }}
                                />
                            )
                        }
                    </Media>    
                    <BtnText>Home</BtnText>
                </LinkBtn>
                <LinkBtn to='/statistics'>
                    <Media queries={{ small: '(max-width: 767px)' }}>
                        {matches =>
                            matches.small ? (
                                <TimelineIcon
                                    sx={{
                                        color: '#fff',
                                        background: '#6e78e8',
                                        borderRadius: "6px",
                                        width: "44px",
                                        height: "44px",
                                        }}
                                />
                            ) : (
                                <TimelineIcon
                                    sx={{
                                        color: '#fff',
                                        background: '#6e78e8',
                                        width: "18px",
                                        height: "18px",
                                    }}
                                />
                            )
                        }
                    </Media>    
                    <BtnText>Statistiscs</BtnText>
                </LinkBtn>
                <CurrLinkBtn to='/currency'>
                    <AttachMoneyIcon
                        sx={{
                            color: '#fff',
                            background: '#6e78e8',
                            borderRadius: "6px",
                            width: "44px",
                            height: "44px"
                        }}
                    />
                </CurrLinkBtn>
            </BtnsCont>
        </Container>
  )
}

const IconHome = styled(HomeSharpIcon)`
    /* color: #fff;
    background-color: #6e78e8; */
    border-radius: 6px;
    
`


export default DashbordBtns