import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Wrapper,  } from './style.js'
import NavBar from 'components/Navigation'
import StoryPagesCollection from 'components/Stories/StoryPagesCollection'

class App extends Component {
    
    render() {
        const { theme } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Wrapper>
                        <NavBar>
                        </NavBar>

                        <StoryPagesCollection/>
                           
                    </Wrapper>
                </div>
            </ThemeProvider>
        )
    }

    componentDidMount() {
      this.setBodyBackgroundColor()
    }

    componentDidUpdate() {
        this.setBodyBackgroundColor()   
    }

    setBodyBackgroundColor() {
      document.body.style = `background-color: ${this.props.theme.background.primary}`;
    }
}

const mapStateToProps = (state) => {
    return { 
        theme: state.app.theme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
