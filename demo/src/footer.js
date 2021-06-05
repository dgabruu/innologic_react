import './footer.css'
import React from 'react'

class footer extends React.Component{
    constructor(){
        super()
        this.state={
            active:'active'
        }
    }
    render(){
        const {active}=this.state;
    return(
        <div className='footer'>
            <div className='p1'>
            <p >Showing 10 of 100</p>
            </div>
            <div className='p2'>
            <nav >
  <ul className="pagination">
    <li className= {'page-item active'} ><a className="page-link" href="#" >1</a></li>
    <li className="page-item ">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item round"> <i className="fas fa-arrow-right"></i></li>
   
  </ul>
</nav>
            </div>

        </div>
    )
}
}
export default footer;