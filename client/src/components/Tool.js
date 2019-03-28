import React, { Component } from 'react'
import _ from 'prop-types'

import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

const Wrapper = styled(Paper)`
    width: 100%;
    && {
        padding: 24px;
    }
`

class Tool extends Component {
    render() {
        return (
            <Wrapper>{ this.props.title }</Wrapper>
        )
    }
}

Tool.propTypes = {
    title: _.string.isRequired,
    link: _.string.isRequired,
    description: _.string.isRequired,
    tags: _.string.isRequired
}

export default Tool