import { useFinancialRecords } from "../../contexts/financialRecord"
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { ReactTableScroll } from 'react-table-scroll';


const FinancialList = () => {
  //use FinancialRecords
  const {records,deleteRecord} = useFinancialRecords()
  //use navigate
  const navigate = useNavigate()
//HandleUpdate
const handleUpdate=(id:any)=>{

      navigate(`/dashboard/updateRecord/${id}`)
}
 
//Handle delete
const handleDelete=(id:any)=>{
  deleteRecord(id)
  
}
  //USe this function to render data
  const  tableData=records.map((a,i)=>{ 

    return (
    <tr key={i}>
      
           <td>{a.description}</td>
            <td>{a.date}</td>
            <td>{a.amount}</td>
            <td>{a.paymentMethod}</td>  
            <td>{a.category}</td>
            <td><button type="button" className="btn btn-outline-info" onClick={()=>{handleUpdate(a._id)}}>Edit</button></td>
            <td> <button type="button" className="btn btn-outline-danger"onClick={()=>{handleDelete(a._id)}}>Delete</button></td>
          </tr>
          )
    
  })
  return (
    <>
    <ReactTableScroll>
    <Table className="table table-striped ">
        <thead>
          <tr>
           
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {records && tableData }
        </tbody>
      </Table>
      </ReactTableScroll>
    
    </>
  )
}

export default FinancialList