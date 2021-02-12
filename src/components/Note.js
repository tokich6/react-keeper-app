import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    return (
        <div className='note'>
            <h1> {props.title} </h1>
            <p>{props.content}</p>
            <Button

                onClick={() => {
                    return props.onDelete(props.id);
                }}
                startIcon={<DeleteIcon />}
            >
                DELETE
      </Button>
        </div>
    )
}

export default Note;