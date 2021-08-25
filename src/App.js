import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import './App.css';
import NavBar from './components/NavBar'
import Grid from './components/Grid'

import CustomBtn from './components/CustomBtn'
import { classes } from 'istanbul-lib-coverage';
//pictures
import SecurityIcon from '@material-ui/icons/Security';
import life from './images/live life.png';
import yolo from './images/yolo right.png';
import yakult from './images/ya cute yakult.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#399E5A",
    },
    secondary: {
      main:"#5ABCB9",
    },
    hunterGreen: {
      main: "#5ABCB9",
    },
    turquoise: {
      main:"#63E2C6",
    },
    yellow: {
      main: "#F6EFA6",
    },
  },
  typography: {
    fontFamily: [
      'Assistant'
    ],
    h1: {
      fontSize: 50,
      // color: 'shamrockGreen',
    },
    h2: {
      fontSize: 28,
      lineHeight: '2rem',
      },
    h3: {
      fontSize: 20,
      lineHeight: '2rem',
    },
    h4: {
      fontSize: 18,
      lineHeight: '2rem',
    },
  }
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2rem"
  },
  littleSpace:{
    marginTop: "1rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
        <Typography variant="h1" className={classes.bigSpace} color="primary">
          Claire Yang
        </Typography>
        <Typography variant="h2" className={classes.littleSpace} color="secondary">
        ☺ Hey there, it's Claire ☺. <br/> Welcome to this v simple React website I've created to learn something new!
        </Typography>
          <NavBar/>
          <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<img  src={life} style={{height:"300px"}}/>}  title="Live life to its fullest 💖" btnTitle="Live Life"/>                              
          <Grid icon={<img  src={yakult} style={{height:"300px"}}/>}  title="Yakult? More like ya cute 😉" btnTitle="Ya Cute Yakult"/>                              
          <Grid icon={<img  src={yolo} style={{height:"300px"}}/>}  title="You only live once hehe 🤷🏻‍♀️" btnTitle="Yolo Right"/>                              
          </div>


        </ThemeProvider>
        
    </div>
  );
}

export default App;
