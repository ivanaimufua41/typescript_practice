import * as React from 'react';
import Hello from './components/Hello';

// tslint:disable-next-line:interface-name
interface Props {
  label: string;
}

class App extends React.Component <Props, any> {
  constructor(props:Props) {
    super(props);
  }
  public render() {
    return (
      <Hello label="this is a string were passing" />
    );
  }
}

export default App;
