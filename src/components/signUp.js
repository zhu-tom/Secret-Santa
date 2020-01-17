import React from 'react';
import { TextField, Grid, Typography, FormControl, FilledInput, InputLabel, Input, Paper, Button, IconButton, InputAdornment, } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    formRow: {
        '& .MuiTextField-root': {
        },
    },
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(4)
    },
    formTitle: {
        marginBottom: theme.spacing(2)
    }
}));

function Form() {
        const [values, setValues] = React.useState({
            showPassword: false,
            // password: null,
            // confirm: null
        });

        const handleMouseDownPassword = (event) => {
        
        }

        function handleClickShowPassword() {
            setValues({showPassword: !values.showPassword});
        }

        const classes = useStyles();

        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" className={classes.formTitle}>Enter your information:</Typography>
                <Grid container component="form" spacing={3}>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={6}>
                                <TextField id="fname" label="First Name" fullWidth variant="filled"/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField id="lname" label="Last Name" fullWidth variant="filled"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={12}>
                                <TextField id="email" label="Email" fullWidth variant="filled"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <FilledInput id="password" label="Password" fullWidth variant="filled"
                                        type={values.showPassword ? 'text':'password'}
                                        value={values.password}
                                        onChange={(event) => {
                                            setValues({password: event.target.value})
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="confirm">Confirm Password</InputLabel>
                                    <FilledInput id="confirm" label="Confirm Password" fullWidth variant="filled"
                                        type={values.showPassword ? 'text':'password'}
                                        value={values.confirm}
                                        onChange={(event) => {
                                            setValues({confirm: event.target.value})
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-end">
                            <Grid item sm={6}>
                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item>
                                        <Button id="submit" style={{marginRight: '5px'}}color="default" variant="contained">Cancel</Button>
                                        <Button id="submit" color="primary" variant="contained">Sign Up</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }


export default Form;
