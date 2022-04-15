import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  useEffect(()=>{
     getData();
  },[]);
  
   
  const [data,setData] = useState([]);

  const getData = async() => {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get("https://hiring.bajajfinservhealth.in/api/renderMe")
    .then(resp => { 
          let result = resp.data;
          setData(result);
    })
  }
  
  
  return (
    <div className="App shop_page">
        <div className='col-lg-12 col-sm-12 col-md-12 row gridRow my-5'>
        

               {
                 data.map((profile) => {
                   return<div className="col-xl-3 col-sm-6 xl-4 col-grid-box product_card">
                     <div className="card border-0">
                   <div className="product_img">
                     <img
                       className="img-fluid img-thumbnail"
                       src={profile.avatar_url}
                       alt={'profile'}
                     />
                   </div>
                   <div className="product_details">
                     <h5 className="font-primary text-center">
                       {`UserName : ${profile.login}`}
                     </h5>
                     <h5 className="font-primary text-center">
                       {`Type : ${profile.type}`}
                     </h5>
                     <h5 className="font-primary text-center">
                       <a href={profile.url.html_url}>{profile.url.html_url}</a>
                     </h5>
                   </div>
                 </div>
                 </div>
                 })
               }
        </div>
    </div>
  );
}

export default App;
