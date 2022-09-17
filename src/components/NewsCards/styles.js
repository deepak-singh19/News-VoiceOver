import { makeStyles } from '@mui/styles';

// import { makeStyles } from '@material-ui/core/styles';

// import { makeStyles } from '@material-ui/styles';

const Styles = makeStyles({

    conatiner: {

        padding: '0.5%',
        width: '100%',
        margin: 0,

    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        marginLeft: '5%',

    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});

export default Styles;