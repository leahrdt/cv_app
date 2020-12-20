import {createMuiTheme} from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    palette: {
        primary:{
            main: grey[900]
        },
        secondary:{
            main:
            lightGreen[400]
            }
        }
    }
)

export default theme;