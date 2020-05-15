import React, { Component } from 'react';
import Title from './title';
import UserInputForm from './UserInputForm';
import Results from './DisplayResults'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: '',
            typeSearch: '',
            readyToFind: false,
        }
        this.handleFormInput = this.handleFormInput.bind(this);
    }

    handleFormInput(word, typeSearch) {
        this.setState({
            word: word,
            typeSearch: typeSearch,
            readyToFind: true
        })
    }

    render() {

        return (
            <div className='container' style={containerStyle}>
                <Title />
                <UserInputForm
                    handleFormInput={this.handleFormInput}
                />
                <Results
                    word={this.state.word}
                    readyToFind={this.state.readyToFind}
                    typeSearch={this.state.typeSearch}
                />
            </div>
        )
    }
}
const containerStyle={
    backgroundColor:'#C9595F',
    borderRadius:5,
    marginTop:35, 
    height: 565,
    width:450,
    opacity: 0.95,
    color: '#010100' 
   }
export default Main;

