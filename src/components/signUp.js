import React from 'react';
import { TextField, Grid, Typography, InputLabel, FormControl, Input, IconButton, InputAdornment, } from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
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
        marginBottom: theme.spacing(3)
    }
}));

function AccountForm(props) {
        const [values, setValues] = React.useState({
            showPassword: false,
        });

        const handleMouseDownPassword = (event) => {
        
        }

        function handleClickShowPassword() {
            setValues({showPassword: !values.showPassword});
        }

        const classes = useStyles();

        return (
                <Grid container component="form" spacing={3}>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={6}>
                                <TextField name="fname" label="First Name" fullWidth variant="standard"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        )
                                    }}
                                    value={props.values.fname}
                                    onChange={(event) => {props.handleChange(event)}}
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField name="lname" label="Last Name" fullWidth variant="standard"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={props.handleChange}
                                    value={props.values.lname}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={12}>
                                <TextField fullWidth name="email" label="Email" variant="standard"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MailIcon/>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.formRow}>
                        <Grid container spacing={2} justify="flex-start">
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input name="password" label="Password" fullWidth
                                        type={values.showPassword ? 'text':'password'}
                                        value={values.password}
                                        onChange={(event) => {
                                            setValues({password: event.target.value});
                                            props.handleChange(event);
                                        }}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LockIcon/>
                                            </InputAdornment>
                                        }
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
                                <FormControl fullWidth variant="standard">
                                    <InputLabel htmlFor="confirm">Confirm Password</InputLabel>
                                    <Input name="confirm" label="Confirm Password" fullWidth
                                        type={values.showPassword ? 'text':'password'}
                                        value={values.confirm}
                                        onChange={(event) => {
                                            setValues({confirm: event.target.value});
                                            props.handleChange(event);
                                        }}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LockIcon/>
                                            </InputAdornment>
                                        }
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
                </Grid>
        );
    }


export default AccountForm;
