/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({fields}) => {
  const inputStyles = {
    width: "100%",
    padding: "8px",
  };

  const navigate = useNavigate();

  const buttonStyles = {
    width: "100%",
    padding: "8px",
    backgroundColor: "lightblue",
    cursor: "pointer"
  }

  const formik = useFormik({
    initialValues: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    },
    onSubmit: (values) => {
      fields.pageNumber === 1 ? navigate("/second") : navigate("/")
      console.log(values);
    },
  });

  const isFormFilled = Object.values(formik.values).every(
    (value) => value !== ""
  );
  const isFormEmpty = Object.values(formik.values).every(
    (value) => value === ""
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onSubmit={formik.handleSubmit}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(225, 225, 225)",
          padding: "8px",
        }}
      >
        {fields.title}
      </div>
      <div>
        <input
          style={inputStyles}
          name="value1"
          value={formik.values.value1}
          onChange={formik.handleChange}
          type="text"
        />
      </div>
      <div>
        <input
          style={inputStyles}
          name="value2"
          value={formik.values.value2}
          onChange={formik.handleChange}
          type="text"
        />
      </div>
      <div>
        <input
          style={inputStyles}
          name="value3"
          value={formik.values.value3}
          onChange={formik.handleChange}
          type="text"
        />
      </div>
      <div>
        <input
          style={inputStyles}
          name="value4"
          value={formik.values.value4}
          onChange={formik.handleChange}
          type="text"
        />
      </div>
      <div style={{width: "100%", display: "flex", gap: "16px"}}>
        <button
        style={buttonStyles}
          type="button"
          onClick={() => formik.resetForm()}
          disabled={isFormEmpty}
        >
          {windowWidth <= 768 ? "RESET" : "RESET BUTTON"}
        </button>
        <button
          style={buttonStyles}
          type="submit"
          disabled={!isFormFilled}
        >
          {windowWidth <= 768 ? "SUBMIT" : "SUBMIT BUTTON"}
        </button>
      </div>
    </form>
  );
};

export default Form;
