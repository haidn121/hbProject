
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import { filterRequest} from "../redux/actions/listRequest";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "./DatePicker"


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "15px",
    gap: "100px",
  },
  formText: {
    width: `calc(30% - 40px)`,
    margin: "12px",
  },
}));
const statusItems = [
  { id: "1", title: "Open" },
  { id: "2", title: "In Progress" },
  { id: "3", title: "Close" },
];
const initialFValues = {
  name_request: "",
  content_request: "",
  date: new Date(),
  status: "",
  author_request: "",
  assign_request: "",
  category_request: "",
};
export default function Filter(props) {
  const {onFilter} = props
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

  };
  const resetForm = () => {
    setValues(initialFValues);
  };
  const handleSubmit = (e) =>{
      e.preventDefault();
      const filters = {
        values,

      }
      dispatch(filterRequest(filters))
      onFilter(values)
      console.log("filter",filters)
 }


  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><FilterListIcon/>
          <Typography color="primary">Filter options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <Input
              name="name_request"
              label="Name"
              value={values.name_request}
              onChange={handleInputChange}
            />
            <Input
              label="Content"
              name="content_request"
              value={values.content_request}
              onChange={handleInputChange}
            />
           <DatePicker
              name="date"
              label="Date"
              value={values.date}
              onChange={handleInputChange}
            />
            <Select
              name="status"
              label="Status"
              value={values.status}
              onChange={handleInputChange}
              options={statusItems}
            />
            <Select
              name="author_request"
              label="Author"
              value={values.author_request}
              onChange={handleInputChange}
              options={statusItems}
            />
            <Select
              name="assign_request"
              label="Assign"
              value={values.assign_request}
              onChange={handleInputChange}
              options={statusItems}
            />
            <Select
              name="category_request"
              label="Category"
              value={values.category_request}
              onChange={handleInputChange}
              options={statusItems}
            />
             <div className={classes.formBtn}>
          <Button type="submit" text="Filter"/>
          <Button text="Reset" color="default" onClick={resetForm} />
        </div>
          </form>
        </AccordionDetails>

      </Accordion>
    </div>
  );
}
