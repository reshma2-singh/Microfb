import React from "react"
import './App.css';
import Header from "./components/Header";
import Users from "./components/Users"
import Info from "./components/Info"
import Edit from "./components/Edit";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          publicUsers: [],
          posts:[]
      }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
   
      .then((res) => res.json())
      .then((res) => this.setState({ publicUsers: res }));
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((res)=>this.setState({posts:res}))
  }
 handleChange(id, name, value){
 
    let index = -1
    console.log(this, 'thissss')
    const find = this.state.posts.find((item, ind) => {
        if(item.id == id){
            index = ind
            return true
        }
        return false
    })
    this.setState({
        posts: [...this.state.posts.slice(0, index), {...this.state.posts[index], [name]: value}, ...this.state.posts.slice(index+1)]
    })

  
 }
  
  render(){
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Switch>
     <Route exact path="/" render={(routeProps) => <Users publicUsers={this.state.publicUsers}  {...routeProps}/>} />
     <Route path="/info/:id" render={(route) => <Info publicUsers={this.state.publicUsers} posts={this.state.posts} {...route} />} />
     <Route path="/edit/:id" render={(route) => <Edit  posts={this.state.posts} handleChange={(id,name,value) => this.handleChange(id,name,value)} {...route} />}  />
     </Switch>
     </BrowserRouter>
    </div>
  );
}
}
export default App;
