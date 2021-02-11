import React, { useState } from "react";

function CreateArea(props) {

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
        props.onAdd(input);
        setInput({
            title: '',
            content: ''
        });
    }


    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={input.content} />
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
