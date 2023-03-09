import './List.css'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import ModalComponent from '../Modal/Modal'
import { api } from '../../Lib/axios'
import Paginate from '../Paginate/Paginate'

type Candidate = Array<{
    deputado: string
    partido: string
    estado: string
    presencas: number
    ausencias_justificadas: number
    ausencias_nao_justificadas: number
}>

function List() {

  const [show, setShow] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<Candidate>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedCandidate, setSelectedCandidate] = useState<any>({})
  
  const handleShow = () => {
    setShow(prevState => !prevState)
  }

  const candidatesPerPage = 30

  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
 };

  useEffect(() => {
    api.get('/presenca').then(res => {
      setCandidates(res.data)
    })
  },[])

  return (
    <div className="list">

    {
      <ModalComponent 
      open={show}
      name={selectedCandidate.deputado}
      entourage={selectedCandidate.partido}
      state={selectedCandidate.estado}
      attendance={selectedCandidate.presencas}
      justifiedAbsences={selectedCandidate.ausencias_justificadas}
      unJustifiedAbsences={selectedCandidate.ausencias_nao_justificadas}
      handleShow={handleShow}
      />
    }
              
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Partido</th>
        </tr>
      </thead>
      <tbody>
        {
          currentCandidates.length > 0 && currentCandidates.map(candidate => {
            return (
                <tr key={candidate.deputado}>
                  <td>
                    <a 
                      href='#'
                      onClick={() => {
                        handleShow(), 
                        setSelectedCandidate(candidate)
                      }}
                      className='name'
                    >
                      {candidate.deputado}
                    </a>
                  </td>
                  <td>{candidate.partido}</td>
                </tr>
            )
          })
        }

      </tbody>
    </Table>
    <Paginate 
      candidatesPerPage={candidatesPerPage}
      totalCandidates={candidates.length}
      paginate={paginate}
    />
    </div>
  )
}

export default List