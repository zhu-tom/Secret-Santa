import React from 'react';
import ReactDOM from 'react-dom';
import { TextField, FormControl, makeStyles, FormGroup, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formRow: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
    }
}));

function Form() {
    const classes = useStyles();

    return (
        <form className={null}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" className={classes.formRow}>
                        <TextField id="fname" label="First Name" variant="standard"/>
                        <TextField id="lname" label="Last Name" variant="standard"/>
                    </Grid>
                </Grid>
            </Grid>
            </form>
    );
}

export default Form;