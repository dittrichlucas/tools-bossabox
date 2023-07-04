import React, { Component } from 'react'
import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

class Header extends Component {
    render() {
        return (
            <Content>
                <img
                    src='https://www.logolynx.com/images/logolynx/13/1314a269be78b1742d2a5d07b8a7d107.png'
                    alt='logo'
                    height='200px'
                />
            </Content>
        )
    }
}

export default Header
