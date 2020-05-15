import React, { Component } from 'react';

class Results extends Component {
    constructor(props){
        super(props)
        this.state={
            wordList:[],
            error:null,
            isLoaded:false
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.word !== prevProps.word){
        let baseUrl = 'https://api.datamuse.com/words';
        let wordToSearch = this.props.word;
        let type;
        if (this.props.typeSearch === 'syn') {
            type = '?rel_syn='
        }
        if (this.props.typeSearch === 'ant') {
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
        return;
    }

    render() {
        if (this.props.readyToFind) {
            const { error, isLoaded, wordList } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                    <div className='col-9 col-md-6 mx-auto text-center mt-3'>
                        <ol>
                            {wordList.map(item => (
                                <li key={item.word}>
                                    {item.word}
                                </li>
                            ))}
                        </ol>
                    </div>
                )
            }
        }
        else {
            return <div></div>
        }
    }
}
export default Results;
