import { Button, Grid, IconButton} from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { setUploadFile } from './redux/uploadFile/uploadFile.actions'
import UploadProgress from './components/UploadProgress/UploadProgress'




function App(props) {

  const handleAttachFIle = e => {
    // could do some validation for the attached file here
    props.setUploadFile(e.target.files)
    e.target.value = '' // to clear the current file
  }

  return (
    <Grid
    container
    direction='row'
    justifyContent='center'
    alignItems='center'
    style={{padding:"5px"}}>
    <input
      accept="image/*"
      style={{display:"none"}}
      id="raised-button-file"
      multiple
      onChange={handleAttachFIle}
      type="file"
    />
    <label htmlFor="raised-button-file">
      <Button variant="contained" color='primary' component="span" style={{width:"150px", height:"25px"}}> 
        Upload<IconButton color="danger" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </Button>
      </label>     
      <UploadProgress />

    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files)),
})

export default connect(null, mapDispatchToProps)(App)