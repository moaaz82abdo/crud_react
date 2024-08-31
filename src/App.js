import React, { Component } from 'react'
import { Form } from './components/form/Form'
import { List1 } from './components/list/List1'

export default class App extends Component {
  state={
    names:[
      {name:"ziad"},
      {name:"goda"},
      {name:"hasan"},
      {name:"ashraf"},
      {name:"eslam"},
    ],
    current:''
  }
changeInput = (e)=>{
  this.setState({
    current: e.target.value
  })
  console.log(e.target.value);
}
addN = (e)=>{
  e.preventDefault()
  let c = this.state.current;
  let cc = this.state.names
  cc.push({name:c})
  this.setState({
    cc,
    current:''
  })
  console.log("done");
}
del= (index)=>{
  // let NN = [...this.state.names]
  // NN=NN.filter((n)=>n.index !== index)
  // this.setState({ names:NN })
  // console.log(NN);
let NN = this.state.names
NN.splice(index,1)
this.setState({NN})

}
updateN=(index,value)=>{
  let cc = this.state.names
  let c = cc[index];
 
  c.name=value;
  this.setState({cc})
}

  render() {
    const {names} = this.state;
    const list = names.map((name , index)=>{
      return <List1 key={index} x={name} d={this.del} index={index} u={this.updateN}/>
    })

    return (
      <section className='app'>
        <h2>CRUD</h2>
        <Form v={this.state.current} x={this.changeInput} y={this.addN}/>
       <ul>{list}</ul> 
      </section>
    )
  }
}
