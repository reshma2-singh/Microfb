import React from "react"
class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      name: '',
      value: ''
    }
  }
  submit(userId) {
    const { match: { params: { id } }, posts } = this.props
    this.props.handleChange(id, this.state.name, this.state.value)
    const { history } = this.props
    history.push(`/info/${userId}`)
  }
  handleChange(id, value, name) {
    this.setState({
      editMode: true,
      name,
      value

    })
  }
  render() {
    const { editMode, value, name } = this.state
    const { match: { params: { id } } } = this.props
    const user = this.props.posts.find((item) => item.id == id);
    return (
      <div>

        <div className="box1" >
          {
            user && (
              <>
                <div><b>Post Number:</b><span><b>{user.id}</b></span> </div>
                <div><b>title:</b><span>{user.title}</span><button
                  onClick={() => this.handleChange(user.id, user.title, 'title')}>Edit</button></div>
                <div><b>body:</b><span>{user.body}</span><button
                  onClick={() => this.handleChange(user.id, user.body, 'body')}>Edit</button></div>

              </>
            )
          }

        </div>
        <div className="input">
          {editMode && <input type="text" value={value} name={name} onChange={(e) => this.setState({ value: e.target.value })} />}
          {editMode && <button onClick={() => this.submit(user.userId)}>Submit</button>}
        </div>
      </div>
    );
  }
}
export default Edit;