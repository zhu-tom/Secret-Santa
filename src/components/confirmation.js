import React, {Component} from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import RedeemIcon from '@material-ui/icons/Redeem';
import RefreshIcon from '@material-ui/icons/Refresh';

export default class Confirm extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2} justify="space-between">
                        <Grid item>
                            <Typography variant='h6' style={{fontWeight: 'bold'}}>Gifter</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' style={{fontWeight: 'bold'}}>Receiver</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {this.props.matches.map(match => (
                    <Grid item key={match.giver.email} xs={12}>
                        <Grid container spacing={0} justify='space-between'>
                            <Grid item>
                                <Typography variant='body1'>{match.giver.name}</Typography>
                            </Grid>
                            <Grid item>
                                <RedeemIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'>{match.receiver.name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={this.props.refresh}>
                                <RefreshIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}