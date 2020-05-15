import React from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import './DownShift.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
    },
  }),
);

const ComboBox = (props) => {
    const classes = useStyles();
    console.log("books" ,props.books);

    return (
        <div className={classes.root}>
        <Autocomplete style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}
            onChange={(event, value) => console.log(value)}
            id="combo-box-demo"
            options={props.books}
            getOptionLabel={(option) => option.release}
            style={{ width: 300 }}
            renderInput={(params) => <TextField 
                {...params} 
                label="CMSSW releases" 
                margin="normal"
                className={classes.inputRoot}
                fullWidth />}
        />
        </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      downShift: state.downShift
    }
  }
  
  const DownShiftContainer = connect(
    mapStateToProps,
    null
  )(ComboBox)
  
  export default DownShiftContainer
  