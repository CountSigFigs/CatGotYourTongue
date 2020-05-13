import React, {Component} from 'react';
import Title from './title';
import UserInputForm from './UserInputForm';


class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            word:'',
            typeSearch:''
        }
        this.handleFormInput = this.handleFormInput.bind(this);
    }

    handleFormInput (word,typeSearch){
        this.setState({
            word: word,
            typeSearch: typeSearch
        })
        alert(this.state)
    }

    render (){
        return (
            <div className='container'>
                <Title/>
                <UserInputForm handleFormInput={this.handleFormInput}/>
            </div>
        )
    }
}

export default Main;

