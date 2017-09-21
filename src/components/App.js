import React, { Component } from 'react'
import './App.css'
import HeaderContainer from '../containers/HeaderContainer'
// import { EditTodo } from './EditTodo'
import { Route } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
import TodoListContainer from '../containers/TodoListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="App">
          <HeaderContainer location={this.props.location} />
          <main className='main container' >
            <div className="app-container app-container_left">
              <Route path='/' component={CategoriesContainer} />
            </div>
            <div className="app-container app-container_right">
              <Route path='/todos/:catId' component={ TodoListContainer } />
            </div>
            {/* <EditTodo {...todos[2]} /> */}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
