import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)

    //textAlign: 'center',
    //color: theme.palette.text.secondary
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftPane styles={classes} />
        </Grid>
        <Grid item xs={6}>
          <RightPane styles={classes} />
        </Grid>
      </Grid>
    </div>
  )
}
