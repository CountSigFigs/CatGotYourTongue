import React, {Component} from 'react';



class Results extends Component{
    constructor(props){
        super(props)
        this.state={
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
                throw new Error('Request failed');
            }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                let trimmedList= jsonResponse.slice(0,10);
                if (!trimmedList.length){
                    let error= 'Uh Oh, word finder couldnt find anything. Try again!'
                    this.handleWordList(error)
                } else {
                this.handleWordList(trimmedList)
                }
            }).catch(error => console.log(error))
         }
        
        const dataList = this.state.wordList.map(item => (
           <li key={item.word}>
             {item.word}
           </li>
         ))

        return (
            <div className='row'>
                <div className='col-6 mx-auto'>
                    <ol>
                    {dataList}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Results;
