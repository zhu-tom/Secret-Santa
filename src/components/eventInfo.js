import React from 'react';
import {Grid, TextField, Button} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export default class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            participants: "John Doe,johndoe@gmail.com\nMy Name,myemail@gmail.com"
        }
    }

    handleDateChange(event) {
        this.setState({selectedDate: event});
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker"
                            label="Event Date"
                            value={this.props.values.date}
                            onChange={this.props.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Participants"
                        multiline
                        fullWidth
                        InputLabelProps={{
                            shrink:true
                        }}
                        name="participants"
                        value={this.props.values.participants}
                        onChange={this.props.handleChange}
                        placeholder="John Doe, johndoe@gmail.com"
                        helperText="In CSV format: Full Name, Email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        component="label"
                        color="secondary"
                        >
                        Or Upload CSV
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </Grid>
            </Grid>
        );
    }
}