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
         }
        return (
            <div className='row'>
                <div className='col-6 mx-auto'>
                    <ol>
                        <li>{query}</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Results;
