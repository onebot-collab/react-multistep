import React, { Component } from 'react'
import {
  Container, Stepper, Step, StepLabel,
  Typography
} from '@material-ui/core'
import stepOne from './stepOne'
import stepTwo from './stepTwo'
import stepThree from './stepThree'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
    }
  }

  getStepContent (page) {
    switch (page) {
      case 0:
        return (<stepOne setActiveStep={() => this.setState({ page: 0 })} style={{ marginBotton: '40px' }} />)
      case 1:
        return (<stepTwo setActiveStep={() => this.setState({ page: 1 })} style={{ marginBotton: '40px' }} />)
      case 2:
        return (<stepThree setActiveStep={() => this.setState({ page: 2 })} style={{ marginBotton: '40px' }} />)
      default:
        return 'Unknown Page'
    }
  }
  render() {
    return (
      <div>
         <Container maxWidth='sm'>
          <Stepper activeStep={this.state.page}>
            <Step>
              <StepLabel>
                <Typography color='secondary'><strong>Cart Items</strong></Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                <Typography color='secondary'><strong>Checkout Details</strong></Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                <Typography color='secondary'><strong>Done</strong></Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Container>
      </div>
    )
  }
}
