
import {ContGeo} from '../Container/ContGeo'
import {ContDev} from '../Container/ContDev'
import {BrowserRouter, Route, Switch } from 'react-router-dom' 
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../../Tema/TemaConfig'



export const Container = () => {


  return (
  <BrowserRouter>
  <ThemeProvider theme={theme}>




    <Switch> 
    
    <Route path="/123" component={ContGeo}/> 
    <Route path="/" component={ContDev}/> 
    </Switch>  




  </ThemeProvider>
  </BrowserRouter>

)
}