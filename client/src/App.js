import React, { Component } from 'react'
import './App.css'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { append, evolve } from 'ramda'
import styled from 'styled-components'
import Header, { Content } from './components/Header'
import Tool from './components/Tool'
import SimpleDialogDemo from './components/Create'

const PageContent = styled.div`
    width: 100%;
    height: calc(100vh - 48px);
    max-width: 900px;
    margin: 0 auto;
    background-color: #E0E0E0;
    padding: 24px;
`

const ButtonAdd = styled(Fab)`
    && {
        position: absolute;
        bottom: 36px;
        right: 36px;
    }
`

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tools: [
                {
                    title: 'Monorepo',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                },
                {
                    title: 'Test',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                },
                {
                    title: 'Monorepo 2',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                },
                {
                    title: 'Monorepo',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                },
                {
                    title: 'Test',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                },
                {
                    title: 'Monorepo 2',
                    link: 'https://github.com/lerna/lerna',
                    description: 'A tool for managing JavaScript projects with multiple packages. ',
                    tags: 'lerna monorepo npm package publishing'
                }
            ]
        }
    }

    handleAddTool = tool => {
        this.setState(evolve({ tools: append(tool) }))
    }

    handleClickAdd = () => {
        alert('Add new tool')
    }

    render() {
        return (
            <PageContent>
                <Header />
                <Content>
                    { this.state.tools.map(tool => <Tool {...tool} />) }
                </Content>
                <ButtonAdd
                    color='secondary'
                    onClick={ this.handleClickAdd }>
                    <AddIcon />
                </ButtonAdd>
            </PageContent>
        );
    }
}

export default App
