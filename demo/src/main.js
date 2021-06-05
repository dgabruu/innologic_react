import './main.css'
import Inner from './inner'
import Report from './report'
import Footer from './footer'
const main=()=>{

    return(
        <div className='main shadow p-3 mb-5 rounded'>
          <p className='text-primary p1'><strong> Home / Financial Overview</strong></p>
          <h4 className='h5 sheet'><strong>Sheet 1</strong></h4>
          <Inner />
          <div className='custom dropdown-toggle'>Custom Data Range</div>
          <Report />
          <Footer />
        </div>
        
    )
}

export default main;