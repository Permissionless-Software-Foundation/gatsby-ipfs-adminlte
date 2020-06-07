import React from "react"

import { Content, Row, Col, Inputs, Button } from "adminlte-2-react"
//import * as fs from 'slp-cli-wallet'
// const SLP = require("slp-cli-wallet/src/commands/create-wallet").default
// const slp = new SLP()

const { Text } = Inputs
let _this
class ExampleBCH extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      address: "",
    }
  }
  state = {}
  render() {
    return (
      <Content
        title="BCH-JS"
        subTitle="slp-cli-wallet"
        browserTitle="BCH-JS"
      >
        <Row>
          <Col xs={12}>
            <Text
              name="address"
              label="BCH ADDRESS"
              labelPosition="above"
              inputType="text"
              help="Add a bch address."
              onChange={_this.handleUpdate}
            />
          </Col>
          <Col xs={5} />
          <Col xs={2}>
            <Button 
            type="success" 
            text="Get Balance"
            onClick={_this.getBalance} />
          </Col>
          <Col xs={5} />
        </Row>
      </Content>
    )
  }
  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }
  async getBalance(){
    console.log('get balance')

  }
}

export default ExampleBCH
