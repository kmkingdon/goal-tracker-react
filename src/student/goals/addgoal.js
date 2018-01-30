import React from 'react';

const AddGoal= (props)=> {

  return (
    <div className={(props.active ? '' : 'hidden')}>
      <div className="goal-add">
        <h1> Add a New Goal</h1>
        <form onSubmit={(event)=>{props.saveGoal(event)}}>
          <label htmlFor="type">Which type of goal?</label>
          <select  name="type" onChange={(event)=>{props.setDataPreview(event)}}>
            <option value="">Select a Type</option>
            <option value="Classwork" >Classwork</option>
            <option value="Homework">Homework</option>
            <option value="Projects">Projects</option>
            <option value="Assessments">Assessments</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="specific">
            What is your specific goal?
            <span> - What do you want to accomplish?</span>
            <span> - Why is it important?</span>
            <span> - Who is involved?</span>
            <span> - What resources will you need?</span>
          </label>
          <textarea name="specific" rows="3" cols="60"></textarea>
          <label htmlFor="measurable">
            How will you measure that you achieved your goal?
            <span> - What will you use to measure success?</span>
            <span> - What scores mean success?</span>
          </label>
          <textarea name="measurable" rows="3" cols="60"></textarea>
          <label htmlFor="achievable">
            How will you achieve this goal?
            <span> - What will you need to do to achieve the goal?</span>
            <span> - Is it realistic for you?</span>
          </label>
          <textarea name="achievable" rows="3" cols="60"></textarea>
          <label htmlFor="relevant">Is this goal relevant/important to you?</label>
          <select  name="relevant">
            <option value= {true} >Yes, it is relevant.</option>
            <option value= {false} >No, it is not relevant.</option>
          </select>
          <label htmlFor="time">
            When will you finish this goal?
          </label>
          <input type="text" name="time" />
          <input id="save" type="submit" name="submit" defaultValue="Save Goal" />
        </form>
      </div>
    </div>
  );
}

export default AddGoal;
