import './report.css'
const data=require('./inner1')
const report=()=>{
    return(
    <div className='container-fluid'>
    <div className='report'>
      <a href='#' className='repo1'><div className='link1'>Report 1</div></a>
       <a href='#' className='repo2'><div className='link2'>Report 2</div></a>
       </div>
       <div className='mytable'>
       <table className="table table-hover ">
  <thead>
    <tr className='tr1'>
      <th scope="col">#</th>
      <th scope="col" >Account</th>
      <th scope="col">Item</th>
      <th scope="col" >This Period</th>
      <th scope="col">Budget Per Month</th>
      <th scope="col">Variance Month</th>
      <th scope="col">Actual Ytd</th>
      <th scope="col">Budget Var</th>
      <th scope="col">Variance Tdd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >1</th>
      <td>{data.account.data1}</td>
      <td>{data.item.data1}</td>
      <td>{data.time.data1}</td>
      <td>{data.time.data2}</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data4}</td>
      <td>{data.time.data5}</td>
      <td>{data.time.data6}</td>
      
    </tr>
    <tr>
      <th  scope="row" >2</th>
      <td>{data.account.data2}</td>
      <td>{data.item.data2}</td>
      <td>{data.time.data1}</td>
      <td>{data.time.data2}</td>
      <td className='text-danger'>({data.time.data4})</td>
      <td>{data.time.data6}</td>
      <td>{data.time.data5}</td>
      <td>{data.time.data7}</td>
      
    </tr>
    <tr className='blue'>
      <th scope="row3" >3</th>
      <td>{data.account.data3}</td>
      <td>{data.item.data3}</td>
      <td>{data.time.data4}</td>
      <td>{data.time.data1}</td>
      <td className='text-danger'>({data.time.data1})</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data2}</td>
      <td className='text-danger'>({data.time.data5})</td>
      
    </tr>
    <tr>
      <th scope="row">1.1</th>
      <td>{data.account.data4}</td>
      <td>{data.item.data4}</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data4}</td>
      <td className='text-danger'>({data.time.data5})</td>
      <td>{data.time.data6}</td>
      <td>{data.time.data7}</td>
      <td className='text-danger'>({data.time.data6})</td>
      
    </tr>
    <tr>
      <th scope="row">1.1.1</th>
      <td>{data.account.data5}</td>
      <td className='text-primary'><strong>{data.item.data5}</strong></td>
      <td>{data.time.data1}</td>
      <td>{data.time.data2}</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data5}</td>
      <td>{data.time.data6}</td>
      <td>{data.time.data7}</td>
      
    </tr>
    <tr>
      <th scope="row">1.2.1</th>
      <td>{data.account.data6}</td>
      <td className='text-primary'><strong>{data.item.data6}</strong></td>
      <td>{data.time.data1}</td>
      <td>{data.time.data2}</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data4}</td>
      <td>{data.time.data5}</td>
      <td className='text-danger'>({data.time.data6})</td>
      
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>{data.account.data7}</td>
      <td className='text-primary'><strong>{data.item.data7}</strong></td>
      <td>{data.time.data2}</td>
      <td>{data.time.data3}</td>
      <td>{data.time.data4}</td>
      <td>{data.time.data5}</td>
      <td>{data.time.data6}</td>
      <td>{data.time.data7}</td>

      
    </tr>
    <tr>
      <th scope="row" colspan="3"><strong>Total</strong></th>
      <td><strong>104,276</strong></td>
      <td><strong>91,325.00</strong></td>
      <td className='text-danger'><strong>12,865.00</strong></td>
      <td><strong>247,545</strong></td>
      <td><strong>247,545</strong></td>
      <td><strong>16,693.20</strong></td>

      
    </tr>
    
  </tbody>
</table>
</div>

       
    </div>)
}

export default report;