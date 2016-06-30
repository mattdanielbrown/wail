import React, { Component } from "react"
import { shell } from 'electron'
import RaisedButton from "material-ui/RaisedButton"
import { Grid, Row, Column, observeGrid } from 'react-cellblock'

import settings from '../../settings/settings'
import EditorPopup from "../editor/editor-popup"
import wc from "../../constants/wail-constants"

const styles = {
  button: {
    margin: 12,
  },
}

export default class WayBackTab extends Component {
  constructor (props, context) {
    super(props, context)
    this.onClickViewWayback = this.onClickViewWayback.bind(this)

  }

  onClickViewWayback (event) {
    console.log('View Wayback')
    shell.openExternal(settings.get('wayback.uri_wayback'))
  }

  render () {
    return (
      <Grid>
        <Row>
          <Column width="1/2">
            <RaisedButton
              label="View Wayback in Browser"
              labelPosition="before"
              primary={true}
              style={styles.button}
              onMouseDown={this.onClickViewWayback}
            />
          </Column>
          <Column width="1/2">
            <EditorPopup
              title={"Editing Wayback Configuration"}
              buttonLabel={"Edit Wayback Configuration"}
              useButton={true}
              codeToLoad={{codeToLoad: wc.Code.which.WBC}}
              buttonStyle={styles.button}
            />
          </Column>
        </Row>
      </Grid>
    )
  }
}
