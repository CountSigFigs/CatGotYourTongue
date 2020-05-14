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
            readyToFind:false
        }
        this.handleFormInput = this.handleFormInput.bind(this);
    }

    handleFormInput(word, typeSearch) {
        this.setState({
            word: word,
            typeSearch: typeSearch,
            readyToFind:true
        })
    }

    

    render() {

        return (
            <div className='container'>
                <Title />
                <UserInputForm 
                    handleFormInput={this.handleFormInput} 
                 />
                <Results 
                    readyToFind={this.state.readyToFind}
                    word={this.state.word} 
                    typeSearch={this.state.typeSearch}
                />
            </div>
        )
    }
}

export default Main;

