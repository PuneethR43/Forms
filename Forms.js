import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
class Forms extends React.Component{
    state={
        formTitle: '',
        formDescription: '',
        question: '',
        answer: '',
        select : [ 'select option', 'Short Answer', 'Multiple Choice', 'Checkboxes' ],
        option: '',
        count: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }

    handleSelect = (e) => {
        this.setState({
            option: e.target.value
        })
    }

    handleAddCount = () => {
        this.setState({
            count: [...this.state.count, '']
        })
        
        console.log('set state', this.state.count)
    }

    render(){
        const select = this.state.select
        let selectList = select.map((ele, i)=>{
            return (
                <option key={i}> {ele} </option>
            )
        })
        
        const multipleChoice = this.state.option == 'Multiple Choice' && this.state.count.map((item, i) => {   
            return(
                <div>
                    <input type='radio' />
                    <label>
                        {`option ${i+2}`} 
                    </label>
               
               </div>
            )
        })

        const checkBox = this.state.option == 'Checkboxes' && this.state.count.map((item, i) => {
            return(
                <div>
                    <input type = 'checkbox' />
                    <label>
                        {`option ${i+2}`}
                    </label>
                </div>
            )
        })
        
        return(
            <div>
                <form>
                <div className='card-form input'>
                    <h3>Form Title</h3>
                    <input 
                        type='text' 
                        name = 'formTitle'
                        value = {this.state.formTitle} 
                        onChange={this.handleChange} 
                        className='input'
                    />
                </div>

                <div className='card-form'>
                    <h3>Form Description</h3>
                    <input 
                        type='text' 
                        name = 'formDescription'
                        value = {this.state.formDescription} 
                        onChange={this.handleChange} 
                        className='input'
                    /> <br/>
                </div>

                <label>Question</label>
                <br/>
                <input 
                    type='text' 
                    name = 'question'
                    value = {this.state.question} 
                    onChange={this.handleChange} 
                    className='input'
                /> <br/>

                <select onChange={this.handleSelect} name='option' className='select'>
                    {selectList}
                </select><br/>
                {
                    this.state.option == 'Short Answer' && <input type='text' className='input' />  
                }
                { 
                    this.state.option == 'Multiple Choice' && (
                                                            <div> <input type='radio' /> 
                                                            <label>option 1</label></div>
                                                        )
                }
                {multipleChoice}
                {
                    this.state.option == 'Multiple Choice' && this.state.count.length!=4 ? <Link onClick={this.handleAddCount}>Add option</Link> : ''
                }
               { 
                    this.state.option == 'Checkboxes' && (
                                                            <div> <input type='checkbox' /> 
                                                            <label>option 1</label></div>
                                                        )
                }
                {checkBox}
                {
                    this.state.option == 'Checkboxes' && this.state.count.length!=4 ? <Link onClick={this.handleAddCount}>Add option</Link> : ''
                }
                </form>
            </div>
        )
    }
}

export default Forms