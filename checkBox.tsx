import React from 'react';
import {Component} from "react";
import './checkBox.css';

class CheckBox extends Component<Readonly<any>, Readonly<any>> {
  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  handleClick(){
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    const style = this.state.isActive? "checkBoxInner" : "checkBoxInnerInvisible";
    return (
      <div className="checkBoxOuter" onClick={()=>this.handleClick()}>
        <div className={style} />
      </div>
    )
  }
}
