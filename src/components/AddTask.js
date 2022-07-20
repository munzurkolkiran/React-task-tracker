import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [text,setText]= useState('')
  const [date,setDate]= useState('')
  const [reminder,setReminder]= useState(false)

  const onSubmit =(e)=>{
    e.preventDefault()

    if(!text){
      alert('Please add task')
      return
    }
    onAdd({text,date,reminder})
    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" name="" id="" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="datetime-local" name="" id="" placeholder="Add Day & Time" value={date} onChange={(e)=>setDate(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask