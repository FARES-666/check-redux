import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edit_ } from '../Redux/Action/ToDoAction';
const EditTask = ({ todo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updatedTask, setUpdatedTask] = useState(todo.task);
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(edit_(todo.id,updatedTask))
        handleClose()
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" onChange={(e) => setUpdatedTask(e.target.value)} value={updatedTask} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTask
