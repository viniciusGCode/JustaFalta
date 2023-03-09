import Pagination from 'react-bootstrap/Pagination';

interface PaginateProps {
    candidatesPerPage: number
    totalCandidates: number
    paginate: any
}

const Paginate = ({ candidatesPerPage, totalCandidates, paginate }: PaginateProps) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalCandidates / candidatesPerPage); i++) {
      pageNumbers.push(i);
   }
 
   return (
      <div className="pagination-container">
        <Pagination>
            {pageNumbers.map((number) => (
               <Pagination.Item
               onClick={() => paginate(number)} 
               className="page-number"
               key={number}
               >
                  {number}
               </Pagination.Item>
            ))}
        </Pagination>

      </div>
   );
};
 
export default Paginate;