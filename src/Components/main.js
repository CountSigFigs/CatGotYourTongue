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
            error: null,
            isLoaded: false,
            wordList: []
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

    componentDidMount() {
        if (this.state.readyToFind){
        let baseUrl = 'https://api.datamuse.com/words';
        let wordToSearch = this.state.word;
        let type;
        console.log(this.state)
        if (this.state.typeSearch === 'syn') {
            type = '?rel_syn='
        }
        if (this.state.typeSearch === 'ant') {
            type = '?rel_ant='
        }
        let query = baseUrl + type + wordToSearch;
        fetch(query)
            .then(res => res.json())
            .then(
                (result) => {
                    //top ten results
                    let trimmedList = result.slice(0,10)
                    this.setState({
                        isLoaded: true,
                        wordList: trimmedList,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }
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
                    error={this.state.error}
                    isLoaded={this.state.isLoaded}
                    wordList={this.state.wordList}
                />
            </div>
        )
    }
}

export default Main;

