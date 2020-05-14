import React, {Component} from 'react';



class Results extends Component{

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
                console.log(jsonResponse)
            })
         }

        return (
            <div className='row'>
                <div className='col-6 mx-auto'>
                    <ol>
                        
                    </ol>
                </div>
            </div>
        )
    }
}

export default Results;
