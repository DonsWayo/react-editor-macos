import React, { Component } from 'react';
import { TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';

export default  class SearchFieldView extends Component {

  constructor() {
    super();
    this.state = { isFullscreen: false };
  }


  //handleChange = (e) => console.log(e.target.value);

  render() {
    return (
      <TitleBar

        controls
        isFullscreen={this.state.isFullscreen}
        onCloseClick={() => console.log('Close window')}
        onMinimizeClick={() => console.log('Minimize window')}
        onMaximizeClick={() => console.log('Mazimize window')}
        onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}

      >
        <Toolbar height="53" horizontalAlignment="right">
          <SearchField
            placeholder="Search"
            defaultValue=""
           // onChange={this.handleChange}
          />
        </Toolbar>
      </TitleBar>
    );
  }
}
