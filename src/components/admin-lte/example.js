import React from "react"

import { Content, Row, Col, Box, Button } from "adminlte-2-react"

class Example extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      importCards: <></>
    }
  }

  render() {
    return (
      <Content
        title="Test"
        subTitle="Getting started with adminlte-2-react"
        browserTitle="Hello World"
      >
        {this.defaultCards()}
        {this.state.importCards}
      </Content>
    )
  }

  defaultCards() {
    return (
      <Row>
        <Col xs={6}>
          <Box
            title="My first box"
            type="primary"
            closable
            collapsable
            footer={<Button type="danger" text="Danger Button" />}
          >
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">Content goes here</Box>
        </Col>
      </Row>
    )
  }

  // importCards() {
  //   return(<></>)
  // }
}

export default Example
