import React from 'react';

 class Book extends React.Component {
     state = {
         showSummary: false
     }
     render() {
        return (
            <div className="card text-center" style={{ "width": "18rem" }} >
                <div className="card-body">
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <p className="card-text">Author: {this.props.book.author}</p>
                    <p className="card-text">Genre: {this.props.book.genre}</p>
                    {this.state.showSummary ? <p className="card-text">{this.props.book.summary}</p> : ''}
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={()=>this.setState({showSummary: !this.state.showSummary})}
                    >Summary</button>
                </div>
            </div>
        )
     }
   
}

export default Book;
