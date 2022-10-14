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
  }
}));
