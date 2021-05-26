import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextareaAutosize } from "@material-ui/core";
import Button from "./Button";
import TextField from "@material-ui/core/TextField";
// import TextField from "./Input"
import Select from "./Select";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../redux/actions/listRequest";
import DatePicker from "./DatePicker";


const useStyles = makeStyles((theme) => ({
  detailRequest: {
    padding: "20px 50px",
  },
  main: {
    padding: "20px 30px",
    margin: "30px 0",
  },
  paper: {
    marginTop: "20px",
    width: "1000px"
  },

  textarea: {
    width: "900px",
    marginTop: "20px",
  },
  header: {
    width: "1000px",
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    margin: "20px",
  },
  selectInput: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "30px 0px",
  },
  textInput:{
    width:`calc(30% - 40px)`,
    margin: "8px",
  }
}));
const statusItems = [
  { id: "1", title: "Status 1" },
  { id: "2", title: "Status 2" },
  { id: "3", title: "Status 3" },
];
const initialFValues = {
  name: "",
  content: "",
  manager_id: "",
  status: "1",
  category_id: "",
  dueDate: new Date(),
};


function CreateRequest(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const [errors,setErrors] = useState({})
  const validateOnChange =false
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("Nhap value", value);
    if(validateOnChange)
    validate({[name]: value})
  };
  const resetForm =() => {
    setValues(initialFValues)
    setErrors({})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      resetForm()
    }
    const data = {
      values,
    };
    dispatch(addRequest(data));
    // console.log("CreateRequest click Submit", data);
  };

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if('name' in fieldValues)
    temp.name = fieldValues.name ? "": "This field is required."
    if('content' in fieldValues)
    temp.content = fieldValues.content ? "": "This field is required."
    if('manager_id' in fieldValues)
    temp.manager_id = fieldValues.manager_id ? "": "This field is required."
    if('category_id' in fieldValues)
    temp.category_id = fieldValues.category_id ? "": "This field is required."
    setErrors({
      ...temp
    })
    if(fieldValues == values)
    return Object.values(temp).every(x => x== "")
  }

  return (
    <form className={classes.detailRequest} onSubmit={handleSubmit}>
      <div className={classes.header}>
        <div>
          <h1>Create Request</h1>
        </div>
        <Button type="submit" className={classes.btn} text="Create" />
      </div>

      <TextField
            label="Title"
            className={classes.textarea}
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="Name Request"
            error = {errors.name}

          />
      <Paper className={classes.paper}>
      <div className={classes.main}>
            <TextField
              className={classes.textarea}
              label="Content"
              multiline
              rows={8}
              placeholder="Add a description"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              error={errors.content}

            />

          <div className={classes.selectInput}>
            <TextField className={classes.textInput}
              label="Status"
              defaultValue="Open"
              name="status"
              value={values.status}
              InputProps={{
                readOnly: true,
              }}
            />
            <DatePicker
              name="dueDate"
              label="Due Date"
              value={values.dueDate}
              onChange={handleInputChange}
            />
            <Select
              name="manager_id"
              label="Assign"
              value={values.manager_id}
              onChange={handleInputChange}
              options={statusItems}
              error={errors.manager_id}
            />
            <Select
              name="category_id"
              label="Category"
              value={values.category_id}
              onChange={handleInputChange}
              options={statusItems}
              error={errors.category_id}

            />
          </div>
        </div>
        </Paper>

    </form>
  );
}

export default CreateRequest;
