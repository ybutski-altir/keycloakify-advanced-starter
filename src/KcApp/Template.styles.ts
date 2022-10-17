import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
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
  },

  title: {
    marginInline: 'auto',
    lineHeight: 1.75,
    maxWidth: '340px',
    fontWeight: 'normal',
  },
  back: {
    display: 'flex',
  },

  backLink: {
    fontSize: '16px',
    textDecoration: 'underline',
    padding: 0,
    margin: 0,
  },

  divider: {
    '&:before, &:after': {
      top: 0,
    },
  },

  passwordNotes: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  submitButton: {
    alignSelf: 'flex-end',
  },

  forgotPassword: {
    cursor: 'pointer',
    alignSelf: 'end',
    textDecorationLine: 'underline',
    letterSpacing: '1.25px',
    fontWeight: 400,
  },

  leftPart: {
    flex: 1,
  },

  rightPart:{
    flex: 1,
  },

  signInHeader: {
    textAlign: 'center'
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 48
  },

  formTitle: {
    fontWeight: 500,
    textAlign: 'center',
    paddingBottom: 30
  }
}));
