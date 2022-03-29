import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background:{
      default:'#040000'
    },
    primary:{
      main:'#000000',
      text:'#ffffff',
    },
    secondary:{
      main:'#052FC2', 
      light:'#272727'
    }
  },
  
});

export default theme;