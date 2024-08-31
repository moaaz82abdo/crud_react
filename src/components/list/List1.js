import React, { Component, Fragment } from 'react'

export  class List1 extends Component {
  state={
    ifupdate:false
  }

  toggleU=()=>{
    let {ifupdate}=this.state;
    this.setState({ifupdate : !ifupdate})
  }
  rendern(){
    return(<li><span>{this.props.x.name}</span>
    <button onClick={()=>this.toggleU()}>edit</button>
    <button onClick={()=>this.props.d(this.props.index)}>delete</button>
    </li>)
  }
  upd =(e)=>{
    e.preventDefault();
    this.props.u(this.props.index, this.input.value)
    this.toggleU();
  }
  renderUF(){
    return(<form onSubmit={this.upd}>
      <input type='text' defaultValue={this.props.x.name} ref={(value)=>{this.input=value}}/>
    <button onClick={()=>this.props.u(this.props.index)}>update</button>
    </form>)
  }
  render() {
    return (
      <Fragment>
          { this.state.ifupdate ? this.renderUF():this.rendern()}
      </Fragment>
    
    )
  }
}


