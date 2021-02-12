import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const [input, setInput] = useState({
        title: '',
        content: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    function handleAdd(e) {
        e.preventDefault();
        if (input.content) {
            props.onAdd(input);
            setInput({
                title: '',
                content: ''
            });
            setIsExpanded(false);
        } else {
            alert('Note is requited');
        }
    }

    const handleExpand = () => setIsExpanded(true);

    return (
        <div>
            <form className='create-note'>
                {
                    isExpanded &&
                    <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />
                }
                <textarea onClick={handleExpand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={input.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
