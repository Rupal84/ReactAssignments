import React from 'react';

interface IProps {
  book: any
}

interface IState {
  showDesc: boolean
}

class Book extends React.Component<IProps, IState>{
  constructor(props:any) {
    super(props);
    this.state = {
      showDesc: false
    }
  }
  render() {
      return (
        <div className="book">
          <p><b>{this.props.book.title}</b></p>
          <p>Author: {this.props.book.author}</p>
          {this.state.showDesc?<p className="align-left"><i>{this.props.book.summary}</i></p>:null}
          <button className="btn btn-primary" onClick={()=>this.setState({showDesc:true})}>Show Details</button><br/><br/>
          <button className="btn btn-danger" onClick={()=>this.setState({showDesc:false})}>Hide Details</button>
        </div>
  
      )
    }
  }
    

  export default Book;