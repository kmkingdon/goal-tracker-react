import React from 'react';

const AddForm= (props)=> {

  return (
    <div className="add-form-container">
      <p id="col1row1"> Assignment Name </p>
      <p id="col2row1"> Assignment Type </p>
      <p id="col3row1"> Due Date </p>
      <p id="col4row1"> Points Possible </p>
      <p id="col5row1"> Points Earned </p>
      <form onSubmit={props.handleSubmit}>
        <input  type="text" name="name1" />
        <select  name="type1">
          <option value="">Select a Type</option>
          <option value="Classwork">Classwork</option>
          <option value="Homework">Homework</option>
          <option value="Projects">Projects</option>
          <option value="Assessments">Assessments</option>
        </select>
        <input  type="date" name="dueDate1"/>
        <input  type="number" name="pointsPossible1" />
        <input  type="number" name="pointsEarned1" />


        <input  type="text" name="name2" />
        <select  name="type2">
          <option value="">Select a Type</option>
          <option value="Classwork">Classwork</option>
          <option value="Homework">Homework</option>
          <option value="Projects">Projects</option>
          <option value="Assessments">Assessments</option>
        </select>
        <input  type="date" name="dueDate2"/>
        <input  type="number" name="pointsPossible2" />
        <input  type="number" name="pointsEarned2" />


        <input  type="text" name="name3" />
        <select  name="type3">
          <option value="">Select a Type</option>
          <option value="Classwork">Classwork</option>
          <option value="Homework">Homework</option>
          <option value="Projects">Projects</option>
          <option value="Assessments">Assessments</option>
        </select>
        <input  type="date" name="dueDate3"/>
        <input  type="number" name="pointsPossible3" />
        <input  type="number" name="pointsEarned3" />


        <input  type="text" name="name4" />
        <select  name="type4">
          <option value="">Select a Type</option>
          <option value="Classwork">Classwork</option>
          <option value="Homework">Homework</option>
          <option value="Projects">Projects</option>
          <option value="Assessments">Assessments</option>
        </select>
        <input  type="date" name="dueDate4"/>
        <input  type="number" name="pointsPossible4" />
        <input  type="number" name="pointsEarned4" />


        <input  type="text" name="name5" />
        <select  name="type5">
          <option value="">Select a Type</option>
          <option value="Classwork">Classwork</option>
          <option value="Homework">Homework</option>
          <option value="Projects">Projects</option>
          <option value="Assessments">Assessments</option>
        </select>
        <input  type="date" name="dueDate5"/>
        <input  type="number" name="pointsPossible5" />
        <input  type="number" name="pointsEarned5" />

        <input readOnly="readOnly" id="submit" type="Submit" value="Save Assignments"/>
      </form>
    </div>
  );
}

export default AddForm;
