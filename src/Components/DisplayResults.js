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

        //prevents infinite loop
        if (this.props.word !== prevProps.word || this.props.typeSearch !== prevProps.typeSearch){
        console.log(this.props.word, this.props.typeSearch)
        let baseUrl = 'https://api.datamuse.com/words';
        let wordToSearch = this.props.word;
        let type;

        //determines what type of search to perform
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
            if (!this.props.word || !this.props.typeSearch){
                return <div className='text-center' style={styles.list}><p>Uh oh something went wrong. Make sure you enter a word</p></div>
            } else if (error) {
                return <div className='text-center' style={styles.list}>Error: {error.message}</div>
            } else if (!isLoaded) {
                return <div className='text-center' style={styles.list}>Loading...</div>;
            } else {
                return (
                    <div className='col-9 col-md-6 mx-auto text-center mt-3' style={styles.list}>
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

const styles={
    list:{
        fontSize:14,
        fontFamily:'Pangolin'
        }
};

export default Results;
