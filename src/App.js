import React, { useState, useEffect } from 'react';
import './App.css';
import CategoriesBox from './components/CategoriesBox'
import StatusesBox from './components/StatusesBox'
import StatusChangeBox from './components/StatusChangeBox'
import ReasonBox from './components/ReasonBox'
import ScheduleImpactBox from './components/ScheduleImpactBox'
import AddedToReqBox from './components/AddedToReqBox'
import ChangeAuthorBox from './components/ChangeAuthorBox'
import { default as JSON } from "./application.json";

function App() {
  const { details } = JSON;  
  const {categories, status, status_change, reason, schedule_impact, added, author} = details[0]
  
  const [data, setData] = useState(details[0])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [changedReason, setChangedReason] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [category, setCategory] = useState("")
  const [userStatus, setUserStatus] = useState("")
  const [statusChangeDate, setStatusChangeDate] = useState("")
  const [impact, setImpact] = useState()
  const [addedToReq, setAddedToReq] = useState()
  
  const handleSubmit = () => {
    setFormSubmitted(true)
    setData({ categories: category || categories,
      status: userStatus || status, 
      status_change: statusChangeDate || status_change,
      reason: changedReason || reason,
      schedule_impact: impact || schedule_impact,
      added: addedToReq || added, 
      author: authorName || author
    })
  }

  function postData(data){
    fetch('http://localhost:3000/',{
      method: 'POST',
      mode: "no-cors",
      body:data,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      }
      return data
    }).catch(error => console.log('Error ' + error));
  }
  
  useEffect(() => {
    if(formSubmitted){

      postData(data)
    }
  }, [formSubmitted])

  const getAuthorData = (childData) => setAuthorName (childData)
  const getReasonData = (childData) => setChangedReason (childData)
  const getCategoriesData = (childData) => setCategory (childData)
  const getStatusesData = (childData) => setUserStatus (childData)
  const getStatusChangeData = (childData) => setStatusChangeDate (childData)
  const getSchduleData = (childData) => setImpact (childData)
  const getAddedData = (childData) => setAddedToReq (childData)

  return (
    <div className="App" style={{backgroundColor: "rgb(245, 246, 248)"}}>
      <div className="header">

        <div className="triangle"></div>
        <h3>Details</h3>
      </div>
      <div className="container">
        <div className="row">
          <CategoriesBox parentCallback= {getCategoriesData} categories={categories} state={formSubmitted} />
          <StatusesBox parentCallback= {getStatusesData} statuses={status} state={formSubmitted} />
          <StatusChangeBox parentCallback = {getStatusChangeData} statusChange={status_change} state={formSubmitted} />
          <ReasonBox parentCallback= {getReasonData} state={formSubmitted} />
        </div>

        <div className="row">
          <ScheduleImpactBox parentCallback= {getSchduleData} initialValue={schedule_impact} state={formSubmitted} />
          <AddedToReqBox parentCallback= {getAddedData} initialValue={added} state={formSubmitted} />
          <ChangeAuthorBox parentCallback= {getAuthorData} state={formSubmitted} />
        </div>
        {!formSubmitted && <button className="submitBtn" onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default App;
