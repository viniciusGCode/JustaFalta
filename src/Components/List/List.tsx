import './List.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import ModalComponent from '../Modal/Modal';


function List() {

  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => setShow(prevState => !prevState)

  return (
    <div className="list">
      <ModalComponent 
        open={show}
        name="Abilio Brunini"
        entourage="PL"
        attendance={14}
        justifiedAbsences={0}
        unJustifiedAbsences={0}
        handleShow={handleShow}
      />

    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Partido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href='#' onClick={handleShow} className='name'>Abilio Brunini</a></td>
          <td>PL</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default List