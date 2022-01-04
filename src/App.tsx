import React from 'react'
import './App.css'
import routes from './config/routes'
import { RouteComponentProps } from 'react-router'
import { Route, Switch, Router } from 'react-router-dom'
import history from './utils/history'
function App() {
  return (
    <main>
      {/* <BrowserRouter> */}
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component {...props} {...route.props} />
                )}
              />
            )
          })}
          {/* <Route path="/todo" component={ToDoPage}/> */}
        </Switch>
      </Router>
      {/* </BrowserRouter> */}
    </main>
  )
}

export default App
