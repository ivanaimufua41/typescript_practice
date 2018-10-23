import * as React from 'react';

// tslint:disable-next-line:interface-name
interface Props {
  label: string;
  count?: number;
}

class Hello extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      label: this.props.label || 'Ivan',
    };
  }
  public render() {
    const { label } = this.state;
    return (
            <div>
                <h1>{ label }</h1>
            </div>
    );
  }
}

export default Hello;