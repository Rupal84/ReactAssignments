import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Book from './Book';
const StyledDiv = styled.div`
display: inline-flex;
justify-content: space-between;
width: 80%
`
const H1 = styled.h1`
color: darkturquoise
text-align: right`;

class ViewAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    fetchBooks = () => {
        axios.get('http://localhost:4000/books').then((res) => {
            this.setState({ books: res.data })
        }).catch((error) => {
            console.log(error.message);
        })
    }
    componentDidMount() {
        this.fetchBooks();
    }
    render() {
        return (
            <div>
                <H1>Catalog</H1>
                <StyledDiv>
                {this.getCards()}
            </StyledDiv>
            </div>
            
        )
    }
    getCards = () => {
        return this.state.books.map((book) => {
            return (
                <Book key={book.id} book={book}/>
            )
        })
    }
}

export default ViewAll;