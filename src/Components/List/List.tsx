import './List.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import ModalComponent from '../Modal/Modal';


function List() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="list">
      <ModalComponent show={show}/>

      <button onClick={handleShow}> Open modal </button>

    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Partido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href='#' className='name'>Abilio Brunini</a></td>
          <td>PL</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default List