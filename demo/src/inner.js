import './inner.css'
const data=require('./inner1')
const inner=()=>{
    

    return(
        <div className='in1 shadow p-3 mt-2 rounded '>
            <div className='shadow div2'>
                <p className='para1'>Budget 1</p>
                <h3 className='para2'><strong>${data.inner1.data1}</strong></h3>
                <p className='perct'>4% <span className='text-dark'style={{fontSize:'14px',fontWeight:'normal'}}>above annual budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 2</p>
                <h3 className='para2'><strong>${data.inner1.data2}</strong></h3>
                <p className='perc'>4% <span className='text-dark' style={{fontSize:'15px',fontWeight:'normal'}}>above  budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 3</p>
                <h3 className='para2'><strong>${data.inner1.data3}</strong></h3>
                <p className='perc'>4% <span className='text-dark'style={{fontSize:'15px',fontWeight:'normal'}}>above  budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 4</p>
                <h3 className='para2'><strong>${data.inner1.data4}</strong></h3>
                <p className='perc text-primary'>4% <span className='text-dark ' style={{fontSize:'15px',fontWeight:'normal'}}>below  budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 5</p>
                <h3 className='para2'><strong>${data.inner1.data5}</strong></h3>
                <p className='perc text-primary'>4% <span className='text-dark'style={{fontSize:'15px',fontWeight:'normal'}}>below  budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 6</p>
                <h3 className='para2'><strong>${data.inner1.data6}</strong></h3>
                <p className='perc text-primary'>4% <span className='text-dark'style={{fontSize:'15px',fontWeight:'normal'}}>below  budget</span></p> 
            </div>
            <div className='shadow div1'>
                <p className='para1'>Budget 7</p>
                <h3 className='para2'><strong>${data.inner1.data7}</strong></h3>
                <p className='perct'>4% <span className='text-primary'style={{fontSize:'14px',fontWeight:'bold'}}>lower than month</span></p> 
            </div>
        </div>
        
    )
}

export default inner;