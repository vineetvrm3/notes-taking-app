import {Component} from "react"
import JoditEditor from "jodit-react";
import { v4 as uuidv4 } from 'uuid';
import {format } from "date-fns";
import "./index.css"

class CreateNote extends Component {
    state = {content:"",title:"",backgroundColor:"",noteList:[]}

    updateContent = (value) => {
        this.setState({content:value})
    
    }

    onChangeTitle = (event) => {
        this.setState({title:event.target.value})
    }

    getBackgroundColor = (event) => {
        this.setState({backgroundColor:event.target.value})
    }

    saveNotesinLocalStorage = () => {
        const {fetchNoteList} = this.props
        const {noteList} = this.state 
        localStorage.setItem("noteList",JSON.stringify(noteList))
        fetchNoteList()
    }

    onCreateNote = (event) => {
        event.preventDefault()
        const {content,title,backgroundColor} = this.state 
        const note = {
            id:uuidv4(),
            title,
            content,
            backgroundColor,
            dateTime: format(new Date(),"dd-MM-yyyy"),
        }

        this.setState(prevState => ({
            noteList:[...prevState.noteList,note],
            title:"",
            content:""
        }),this.saveNotesinLocalStorage)
        
    }

    

    render() {
        const {title,backgroundColor} = this.state
        return (
            <form className="form-container" onSubmit={this.onCreateNote}>
                <h1>Create a New Note</h1>
            <label>Title</label>
            <input onChange={this.onChangeTitle} value={title}/>
            <label>Description</label>
            <JoditEditor value={this.state.content} onChange={this.updateContent.bind(this)} width="500" height="200"/>
            <label>Choose a Background Color</label>
            <input type="color" onChange={this.getBackgroundColor} value={backgroundColor}/>
            <button type = "submit" className="save-button">Save</button>
            </form>
        )
    }
}

export default CreateNote