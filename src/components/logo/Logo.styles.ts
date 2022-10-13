import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((/* theme: Theme */) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    width: 48,
    height: 40,
    marginRight: 8,
  },
  text: {
    color: '#269A05',
    fontSize: '24px !important',
    fontWeight: 'bold !important'
  },
}));
