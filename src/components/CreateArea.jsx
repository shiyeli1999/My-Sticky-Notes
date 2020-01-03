import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props){

    const[isClicked, setClicked] = useState(false);

    const[note, setNote] = useState({
        title: "",
        content: ""
    });



    function handleChange(event){
        const{name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();

        setNote(
            {
                title: "",
                content: ""
            }
        );
    }

    function expand(){
        setClicked(true);
    }


    return (
        <div>
            <form className="create-note">
                {isClicked ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>: null}
                <textarea onClick={expand}name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Take a note..." 
                rows={isClicked? "3" :"1"} />
                <Zoom in={isClicked}>
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;