import '../assets/css/App.css'
import React, {Component} from 'react'
import TreeView from "./ListView/TreeView";
import MonacoView from "./Editor/MonacoView";
import Grid from '@material-ui/core/Grid';
import SearchFieldView from "./Bar/SearchFieldView";

class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <SearchFieldView/>
        </Grid>
        <Grid item xs={3}>
          <TreeView/>
        </Grid>
        <Grid item xs={9}>
          <MonacoView/>
        </Grid>
      </Grid>
    )
  }
}

export default App
