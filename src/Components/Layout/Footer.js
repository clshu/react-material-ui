import React from 'react'
import { Paper, Tabs, Tab, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

const Footer = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  )
}

export default Footer
