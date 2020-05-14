import React, {Component} from 'react';



class Results extends Component{
    constructor(props){
        super(props)
        this.state={
            error: null,
            isLoaded: false,
            wordList:[]
        }

    }

    handleWordList(list){
        this.setState({
            wordList:list
        })
    }
    
    render (){

        if (this.props.readyToFind){

            let baseUrl = 'https://api.datamuse.com/words';
            let wordToSearch = this.props.word;
            let type;

            if (this.props.typeSearch === 'syn') {
                type = '?rel_syn='
            }
            if (this.props.typeSearch === 'ant') {
                type = '?rel_ant='
            }
            var query = baseUrl + type + wordToSearch;

            fetch(query).then(response => {
                if (response.ok){
                    return response.json();
                }
            })
            .then(jsonResponse => {
                let trimmedList= jsonResponse.slice(0,10);
                if (!trimmedList.length){
                    this.setState({
                        error,
                        isLoaded:true
                    })
                } else {
                    this.setState({
                        isLoaded:true,
                        wordList: trimmedList
                    })
                }
            }).catch(error => console.log(error))

            const {error, isLoaded, wordList } = this.state;

            if (error){
                return <div>Error: {error.message}</div>
            } else if (!isLoaded){
                return (<div>Loading ...</div>)
            } else {
                return (
                    <div> 
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
            return(
                <div></div>
            )
        }
    }
}

export default Results;
