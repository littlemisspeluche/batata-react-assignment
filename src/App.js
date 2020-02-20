import React, {useState} from 'react';
import './App.css';
import CategoriesBox from './components/CategoriesBox'
import StatusesBox from './components/StatusesBox'
import StatusChangeBox from './components/StatusChangeBox'
import ReasonBox from './components/ReasonBox'
import ScheduleImpactBox from './components/ScheduleImpactBox'
import AddedToReqBox from './components/AddedToReqBox'
import ChangeAuthorBox from './components/ChangeAuthorBox'

function App() {
  const objectJson = {
    categories: ['You', 'can', 'do', 'it'],
    status: ['positive', 'negative', 'undecided'],
    status_change: '20/11/2020',
    reason: 'Unclear',
    schedule_impact: false,
    added: true,
    author: 'Ron Burgundy',
  }
  const categories = objectJson.categories
  const statuses = objectJson.status
  const statusChange = objectJson.status_change
  const scheduleImpact = objectJson.schedule_impact
  const added = objectJson.added
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = () => {

    setFormSubmitted(true)
  }

  return (
    <div className="App">
      <div className="container" style={{backgroundColor: "rgb(245, 246, 248)"}}>
        <div className="row">
          <CategoriesBox categories={categories} state={formSubmitted} />
          <StatusesBox statuses={statuses} state={formSubmitted} />
          <StatusChangeBox state={formSubmitted} statusChange={statusChange} />
          <ReasonBox state={formSubmitted} />
        </div>

        <div className="row">
          <ScheduleImpactBox initialValue={scheduleImpact} state={formSubmitted} />
          <AddedToReqBox initialValue={added} state={formSubmitted} />
          <ChangeAuthorBox state={formSubmitted} />
        </div>
        {!formSubmitted && <button className="submitBtn" onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default App;
