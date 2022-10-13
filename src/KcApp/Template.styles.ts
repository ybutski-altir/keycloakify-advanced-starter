import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((/* theme */) => ({
  container: {
    background: 'white',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },

  content: {
    height: 'calc(100% - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: 'min(384px, 90vw)',
    maxHeight: '80vh',
    /* margin: theme.spacing(0, 4), */

    /* [theme.breakpoints.down('tablet')]: {
      margin: 0,
    }, */
  },

  logo: {
    /* paddingBottom: theme.spacing(8), */
  },

  title: {
    /* marginBottom: theme.spacing(4), */
    marginInline: 'auto',
    lineHeight: 1.75,
    maxWidth: '340px',
    fontWeight: 'normal',

    /* [theme.breakpoints.down('mobile')]: {
      marginBottom: theme.spacing(2),
      lineHeight: 1.25,
    }, */
  },
  back: {
    display: 'flex',
    /* color: theme.palette.primary.main,
    margin: theme.spacing(6, 0, 0, 6), */

    /* [theme.breakpoints.down('mobile')]: {
      margin: theme.spacing(3, 0, 0, 2),
    }, */
  },

  backLink: {
    fontSize: '16px',
    /* color: theme.palette.primary.main, */
    textDecoration: 'underline',
    padding: 0,
    margin: 0,
    /* paddingLeft: theme.spacing(0.5), */
  },

  divider: {
   /*  margin: theme.spacing(3, 0),
    color: theme.palette.blue.main, */

    '&:before, &:after': {
      top: 0,
    },

    /* [theme.breakpoints.down('laptop')]: {
      margin: theme.spacing(2, 0),
    }, */

    /* [theme.breakpoints.down('mobile')]: {
      margin: theme.spacing(1, 0),
    }, */
  },

  textField: {
    /* backgroundColor: theme.palette.gray[100], */
  },

  secondField: {
    /* marginTop: theme.spacing(2),
    color: theme.palette.blue.main,

    [theme.breakpoints.down('mobile')]: {
      marginTop: theme.spacing(2),
    }, */
  },

  passwordNotes: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  submitButton: {
    alignSelf: 'flex-end',
    /* marginTop: theme.spacing(3.75),
    padding: theme.spacing('13px', 4), */

    /* [theme.breakpoints.down('mobile')]: {
      padding: theme.spacing(1, 3),
      marginTop: theme.spacing(1),
    }, */
  },

  forgotPassword: {
    /* marginLeft: theme.spacing(0.5), */
    cursor: 'pointer',
    alignSelf: 'end',
    /* color: theme.palette.gray.main, */
    textDecorationLine: 'underline',
    letterSpacing: '1.25px',
    fontWeight: 400,
  },

  signInCard: {
    border: '3px solid red',
  },

  leftPart: {
    flex: 1,
  },

  rightPart:{
    flex: 1,
  },

  signInHeader:{
    textAlign: 'center'
  }
}));
