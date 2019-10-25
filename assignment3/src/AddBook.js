import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDiv = styled.div`
width: 55%;
margin: 0 auto;
text-align: left;
border: 1px solid grey;
padding: 10px 10px;
`;

const StyledH1 = styled.h1`
text-align: center;
`;

const SuccessMessage = styled.p`
color: green;
`;

const ErrorMessage = styled.p`
color: red;
`;

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            genre: '',
            summary: '',
            success: '',
            isFormValid: true
        }
    }
    render() {
        return (
            <div><br /><br />
                <StyledDiv>
                    <form>
                        <StyledH1>Add A Book</StyledH1>
                        {!this.state.isFormValid ? <ErrorMessage>Please enter valid inputs</ErrorMessage>
                        :''}
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control"
                                name="title"
                                onBlur={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="author">Author</label>
                            <input type="text" className="form-control"
                                name="author"
                                onBlur={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="genre">Genre</label>
                            <select className="form-control" name="genre" onChange={this.handleInput}>
                            <option value="-1"></option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non Fiction</option>
                                <option value="mystery-thriller">Mystery Thriller</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="summary">Summary</label>
                            <textarea className="form-control" name="summary" rows="3"
                                onBlur={this.handleInput}></textarea>
                        </div>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={this.addBook}
                        >Add Book</button>
                        {this.state.success ? 
                        <SuccessMessage>{this.state.title} authored by {this.state.author} was successfully inserted</SuccessMessage>
                        :this.state.success === false ? <ErrorMessage>Error in adding book to catalog</ErrorMessage>
                        :''
                    }
                    </form>
                </StyledDiv>
            </div>
        );
    }
    handleInput = (event) => {
        switch (event.target.name) {
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'author':
                this.setState({ author: event.target.value });
                break;
            case 'genre':
                this.setState({ genre: event.target.options[event.target.selectedIndex].value });
                break;
            case 'summary':
                this.setState({ summary: event.target.value });
                break;
            default:

        }

    }
    addBook = () => {
        if(!this.validateInputs()) {
            this.setState({isFormValid: false});
            return;
        }
        this.setState({isFormValid: true});
        const { title, genre, author, summary } = this.state;
        axios.post('http://localhost:4000/books', {title, genre, author, summary}).then((res)=>{
            this.setState({success: true});
        }).catch((err)=>{
            this.setState({success: false})
        })
    }
 
    validateInputs = ()=>{
       if (!this.state.author)
        return false;
        else if(!this.state.genre || this.state.genre === -1 )
        return false;
        else if(!this.state.summary)
        return false;
        else if(!this.state.title)
        return false;
        else
        return true;

    }
}

export { AddBook }