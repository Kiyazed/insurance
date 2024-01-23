import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


const LifePolicy = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get(' https://my.api.mockaroo.com/policies.json?key=4d5ad210')
          .then(response => {
            // Set the data in the state
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);


      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'policy_name', headerName: 'Policy Name', width: 180 },
        { field: 'policy_path', headerName: 'Policy Path', width: 350 },
        {
          field: 'policy_detail', headerName: 'Policy Detail',
          width: 440,
        },
        /* {
          field: 'email',
          headerName: 'Email',
          width: 160,
        },
        {
          field: 'org',
          headerName: 'Organization',
          width: 160,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 90,
        },
        {
          field: 'statu',
          headerName: 'Status',
          width: 90,
        },
        */
       
       
       
      ];

    return ( 
        <div className="bg-white">
        <div className="mt-10 m-5">
         <h1 className='font-semibold text-3xl flex place-content-center'>POLICY</h1> 
         <p className='flex place-content-center p-2'>Read the policy details here</p>
       
        </div>

      
      
         <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
     

      <div className='mt-16 m-5'>
        <h1 className=' font-semibold text-2xl flex place-content-center'>Beneficiary Declaration Form </h1>
       
       
              <h2 className="flex place-content-center pb-10 p-1"> Attaching to and forming part of group Life Assurance Policy No. GLAP/---</h2>
              <form className='ml-36'>
                
                  <label >
                   <h1 className='font-medium p-2 '>Policy Owner </h1> 
                    <input type="text" className='w-3/6 rounded-md border-gray-300' />
                  </label> 
                  
                  <label >
                    <h1 className='font-medium p-2 mt-2'>Agency Name</h1>
                      <input type="text" className='w-3/6 rounded-md border-gray-300'/>
                  </label>
                  <label >
                    <h1 className='font-medium p-2 mt-2'>Assured's Name</h1>
                      <input type="text" className='w-3/6 rounded-md border-gray-300'/>
                  </label>

                  <h1 className='font-medium text-lg p-2 mt-2'>Address</h1>
                  <div className="mt-2 flex items-center gap-3">
                  
                  <label >
                   
                  <input  className='w-80 rounded-md border-gray-300' type="text" placeholder="Region" />
                  </label>

                  <label > 
                  <input className='w-80 rounded-md border-gray-300' type="text" placeholder='Zone' />
                  </label>

                  <label > 
                  <input className='w-80 rounded-md border-gray-300' type="text" placeholder='Woreda' />
                  </label>
                  </div>
                 
                  
                 
                  <label >
                    <h1 className='font-medium p-2 mt-2'>Phone Number</h1>
                      <input type="number" className='w-3/6 rounded-md border-gray-300'/>
                  </label>
                  
                  </form>
                 <Link to="/lifepayment"> <button className="mt-10 border bg-green-400 hover:bg-white hover:border-green-500 cursor-pointer w-96 rounded-md p-2 ml-40">Submit</button> </Link>
                  </div>
                  </div> 
           

              
     );
}
 
export default LifePolicy;