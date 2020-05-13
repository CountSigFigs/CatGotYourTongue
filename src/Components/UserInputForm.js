import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class UserInputForm extends Component {
    constructor(props){
        super(props)
        this.state={
            word:'',
            typeSearch:''
        }

        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleSyn = this.handleSyn.bind(this);
        this.handleAyn = this.handleAyn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleWordChange(event){
        this.setState({word: event.target.value})
    }

    handleSyn(){
        this.setState({typeSearch: 'syn'})
    }

    handleAyn(){
        this.setState({typeSearch: 'ayn'})
    }

    handleSubmit(e){
        console.log(this.state)
        e.preventDefault()
        this.props.handleFormInput(this.state.word,this.state.typeSearch)
    }

    render (){
        return(
            <div className='row'>
                <div className='col-6 mx-auto'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for='userWord'>
                                Enter Your Word
                            </Label>
                            <Input 
                                type='text'
                                name='userWord'
                                id='userWord'
                                placeholder='hungry'
                                value={this.state.word}
                                onChange={this.handleWordChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button type="button" className="btn" onClick={this.handleSyn}>Synonyms</Button>
                                <Button type="button" className="btn" onClick={this.handleAyn}>Antonyms</Button>
                            </div>
                        </FormGroup>
                        <Button type='submit' value='submit'>Search</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default UserInputForm;

