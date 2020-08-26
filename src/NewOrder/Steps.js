import { Steps, Divider } from 'antd';

import React from 'react';
const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <Steps current={current} onChange={this.onChange}>
          <Step title='Step 1' description='This is a description.' />
          <Step title='Step 2' description='This is a description.' />
          <Step title='Step 3' description='This is a description.' />
        </Steps>

        <Divider />

    
      </>
    );
  }
}
