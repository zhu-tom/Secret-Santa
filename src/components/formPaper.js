import React from 'react';
import {Grid, Button, Paper, Typography, Step, Stepper, StepLabel} from '@material-ui/core';
import AccountForm from './signUp';
import EventForm from './eventInfo';
import Confirm from './confirmation';

var headers = ['Personal Information', 'Event Details', 'Confirmation'];

export default class FormPaper extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            formInfo: {
                fname: "",
                lname: "",
                email: "",
                password: "",
                date: new Date(),
                participants: "",
                eventName: "",
            },
            matched: null,
            snackbarOpen: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.refresh = this.matchParticipants.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        this.setState({snackbarOpen: false});
    }

    matchParticipants() {
        let givers = [];
        let receivers = [];
        for (let [name, email] of this.state.formInfo.participants
            .trim()
            .split("\n")
            .map(val=>val.split(',')
                .map(val=>val.trim()))) {
            givers.push({name: name, email: email});
            receivers.push({name: name, email: email});
        }

        let pairs = [];
        while (givers.length > 1) {
            const [gIndex, rIndex] = [Math.floor(Math.random() * givers.length), Math.floor(Math.random() * receivers.length)];
            if (gIndex !== rIndex) {
                pairs.push({giver: givers.splice(gIndex, 1)[0], receiver: receivers.splice(rIndex, 1)[0]});
            }
        }
        pairs.push({giver: givers[0], receiver: receivers[0]});
        this.setState({matched:pairs, snackbarOpen:true});
    }

    handleButtonClick(val) {
        if (this.state.pageNum + val === 3 && this.state.matched === null) {
            console.log('here');
            this.matchParticipants();
        }
        if (!(this.state.pageNum + val < 1 || this.state.pageNum + val > 4)) {
            this.setState({pageNum: this.state.pageNum + val});
        }
    }

    handleChange(event) {
        let {name, value} = event.target;
        this.setState(prevState => {
            let newFormInfo = prevState.formInfo;
            newFormInfo[name] = value;
            return {formInfo: newFormInfo};
        });
    }

    handleDateChange(e) {
        let event = e;
        this.setState(prevState => {
            prevState.formInfo.date = event;
            return {formInfo: prevState.formInfo}
        });
    }

    render() {
        return (
            <Paper elevation={3} style={{marginTop: '16px', padding:'56px'}}>
                <Stepper activeStep={this.state.pageNum-1} alternativeLabel>
                    {headers.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {(() => {
                    switch (this.state.pageNum) {
                        case 1:
                            return <AccountForm values={this.state.formInfo} handleChange={this.handleChange}/>;
                        case 2:
                            return <EventForm values={this.state.formInfo} handleChange={this.handleChange} handleDateChange={(e) => this.handleDateChange(e)}/>;
                        case 3:
                            return <Confirm handleClose={this.handleClose} snackbarOpen={this.state.snackbarOpen} matches={this.state.matched} refresh={this.refresh}/>
                        default:
                            return null;
                    }
                })()}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop: '24px'}} spacing={1} justify="flex-end">
                            <Grid item>
                                <Button color="default" variant="contained" onClick={() => {this.handleButtonClick(-1)}} disabled={this.state.pageNum === 1 ? true : false}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button color="primary" onClick={() => {this.handleButtonClick(1)}} variant="contained">Next</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}