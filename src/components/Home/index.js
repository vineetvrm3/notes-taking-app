import {Component} from "react"

import CreateNote from "../CreateNote"

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import { MdOutlineAddCircle } from "react-icons/md";

import NoteItem from "../NoteItem";

import "./index.css"


let fetchedList


class Home extends Component {
    state = {noteList:[]}

    
    
    fetchNoteList = () => {
        fetchedList = JSON.parse(localStorage.getItem("noteList"))
        this.setState((prevState) => ({noteList:[...prevState.noteList,...fetchedList]}))
    }

    render(){
        const {noteList} = this.state
        return(
            <div>
                <h1>Notes</h1>
                <ul>
                    {noteList.map(each => 
                        <NoteItem item={each} key={each.id}/>
                    )}
                </ul>
                <div className="popup-container">
                <Popup
                    modal
                    trigger={<button type="button" className="trigger-button"><MdOutlineAddCircle size={100}/></button>}
                    closeOnEscape
                    window
                    >
                    {close => (
                    <div className="popup-body">
                        <CreateNote fetchNoteList={this.fetchNoteList}/>
                        <button className="close-button" type="button" onClick={() => close()}>
                            <RiCloseLine size={50
                            
                            }/>
                            </button>
                        </div>
                        )}
                    </Popup>
                </div>
            </div>
        )
}
}

export default Home