import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Modal from 'react-modal'
import './Modal.css'

Modal.setAppElement('#root')

function ModalComponent({show: Boolean}) {
  return (
    <div className="modal">
        <Modal
            isOpen={show}

        >

        </Modal>
    </div>
  )
}

export default ModalComponent