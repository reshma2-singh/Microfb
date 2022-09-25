import React from "react";
import {Link} from 'react-router-dom'
const style = {
    formatBox: {
        marginLeft: '550px',
        marginTop:'30px',
        float: 'left',
        padding:'10px',
        border: '2px solid black',
        background: 'lightblue',
        cursor: 'pointer',
        borderRadius:'5px',
        alignItems:'center',
        
    }
  }
class Info extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         
      }
  }
  handleButtonClick(id){
    const { history } = this.props
    history.push(`/edit/${id}`)
  }
 
  render(){
    const { match: { params: { id }} } = this.props
    const user= this.props.publicUsers.find((item)=>item.id==id);
    const post= this.props.posts.filter((item)=>item.userId==id);
   
  return (
    <div>
    
   
      <div style={style.formatBox}>
     
        <p>the user ID is :<b>{id}</b></p>
        
   {
    user &&(
      <>
      <div>Name:<span>{user.name}</span></div>
      <div>Phone:<span>{user.username}</span></div>
      <div>Email:<span>{user.email}</span></div>
      <div>Phone:<span>{user.phone}</span></div>
      </>
    )
   }
</div>
<div className="main">
        
   {
    post &&(
      <>
      {
        post.map((post)=>(
          <div className="box">
            <div><b>post Number:</b><span style={{fontWeight:'bold'}}>{post.id}</span></div>
            <div><b>title:</b><span>{post.title}</span></div>
            <div><b>body:</b><span>{post.body}</span></div>
            <button onClick={()=>this.handleButtonClick(post.id)}>edit</button>
          </div>
        ))
      }
     
      </>
    )
   }
</div>
          
</div>
  );
}
}
export default Info;