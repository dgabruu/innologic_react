import './head.css'
const head=()=>{

    return(
        <div className='shadow p-3 mb-5 bg-white rounded'>
        <div className='container head '>
        <div className='inp'>
            {/* <input type='text' placeholder=''></input> */}
            <button className='btn btn-secondary dropdown-toggle'>Select a department</button>
            </div>
            <div className='end'>
               <div ><strong>EN</strong></div> 
            </div>
            </div>
            </div>
    )
}

export default head;