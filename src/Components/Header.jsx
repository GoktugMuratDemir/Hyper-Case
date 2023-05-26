/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Header = ({ fields }) => {

  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: fields.selectedColor ? fields.selectedColor : "white",
        boxShadow: "0px 5px 10px rgb(0 0 0 / 15%)",
      }}
    >
      {fields.title}
      <div>
        <button
          style={{
            background: "none",
            padding: "8px",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onClick={()=>fields.pageNumber === 1 ? navigate("/second") : navigate("/")}
        >
          To Other Page
        </button>
        <button
          style={{
            background: "none",
            padding: "8px",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onClick={() => fields.setSelectedColor("")}
        >
          Clear Color
        </button>
      </div>
    </header>
  );
};

export default Header;
