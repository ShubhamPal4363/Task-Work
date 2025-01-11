import { useState, React } from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';

function Home() {

  const [filterData, setFilterData] = useState('kitchen-accessories');
  console.log(filterData);

  return (
    <div className='container'>
      <div className='row' style={{paddingTop: '100px'}}>
        <div className='col-4 d-none d-md-block'>
          <Leftside setFilterData={setFilterData} />
        </div>
        <div className='col-md-8'>
          <Rightside filterData={filterData} />
        </div>
      </div>
    </div>
  )
}

export default Home
