import { createUseStyles } from "react-jss";
// import { createUseStyles } from '@material-ui/styles'

export const useStyles = createUseStyles({
  fone: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: 1,
  },
  searchDiv:{
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    maxWidth: '500px',
    width: '100%',
    margin: 'auto',
    paddingTop: '4px',
    color: 'white',
    zIndex: 10,
  }
});
