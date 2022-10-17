import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  submitButton: {
    alignSelf: 'flex-end',
    padding: '8px 32px !important',
    backgroundColor: '#269A05 !important',
    fontSize: '14px !important',
  },
  submitWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  forgotPasswordLink: {
    color: '#50576B',
    fontWeight: 400,
    letterSpacing: '1.25px',
    textDecorationLine: 'underline',
    fontSize: '14px',

    '&:hover': {
      color: '#161617 !important'
    }
  },
  passwordNotesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remeberCheckboxWrapper: {
    fontSize: '14px',
    color: '#50576B'
  },
  rememberCheckbox: {
    height: '16px',
    width: '16px',
  },
  inputField: {
    color: '#ABB2C2',
    backgroundColor: '#F5F6FA',

    '& .MuiInputLabel-root': {
      fontSize: 14
    },
    '& .MuiInputLabel-shrink': {
      fontSize: 10
    },
    '& .MuiInputBase-input': {
      fontSize: 14
    },
    '& .MuiInputBase-root': {
      height: 45
    }
  },
}));
