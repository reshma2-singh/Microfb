import React from "react"
const style = {
  formatBox: {
    margin: '25px',
    float: 'left',
    padding: '10px',
    border: '2px solid black',
    background: 'lightblue',
    cursor: 'pointer',
    borderRadius: '5px'
  }
}
class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleClick(id) {
    const { history } = this.props
    history.push(`/info/${id}`)
  }
  render() {
    const { publicUsers } = this.props
    return (
      <div >
        {
          publicUsers.map((item, ind) => {
            return (
              <div key={item.id} style={style.formatBox} onClick={() => { this.handleClick(item.id) }}>
                <div>Name: <span>{item.name}</span></div>
                <div>Email: <span>{item.email}</span></div>
                <div>Phone Number: <span>{item.phone}</span></div>
              </div>
            )
          })
        }

      </div>
    );
  }
}
export default Users;
