import React, { Component } from 'react'
import './App.css'
import HeaderContainer from '../containers/HeaderContainer'
import { Route } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
import BodyContainer from '../containers/BodyContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="App">
          <Route path='/:catId?/:todoId?' component={HeaderContainer} />
          <main className='main container' >
            <div className="app-container app-container_left">
              <Route exact path='/:catId?' component={CategoriesContainer} />
            </div>
            <div className="app-container app-container_right">
              <Route path='/:catId/:todoId?' component={ BodyContainer } />
              {/* <Route path='/:catId/:todoId' component={ EditTodo } /> */}
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
