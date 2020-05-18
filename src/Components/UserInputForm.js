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
        this.setState({word: event.target.value});
    }

    handleSyn(){
        this.setState({typeSearch: 'syn'})
    }

    handleAyn(){
        this.setState({typeSearch: 'ant'})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.handleFormInput(this.state.word,this.state.typeSearch)
        this.setState({
            typeSearch: ''
        })
    }

    render (){
        return(
            <div className='row'>
                <div className='col-9 col-md-7 mx-auto text-center'>
                    <Form>
                        <FormGroup>
                            <Label for='userWord' style={styles.formLabel}>
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
                                <Button style={styles.formButton} type="button" className="btn"  onClick={this.handleSyn} id='toggleButton'>Synonyms</Button>
                                <Button style={styles.formButton} type="button" className="btn"  onClick={this.handleAyn} id='toggleButton'>Antonyms</Button>
                            </div>
                        </FormGroup>
                        <Button style={styles.submitButton} type='submit' value='submit' onClick={this.handleSubmit} id='submitButton'>Search</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
const styles={
    formLabel:{
        float:'left',
        fontFamily:'Pangolin',
        fontWeight:'bold',
        color:'#77AA77'
    },
    formButton:{
        backgroundColor:'#55AA56',
        borderColor:'black'
    },
    submitButton:{
        backgroundColor:'#55AA56',
        border:'none'
    }
}

export default UserInputForm;

