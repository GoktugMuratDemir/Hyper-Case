/* eslint-disable react/prop-types */


const Footer = ({fields}) => {
  return (
    <footer style={{
        backgroundColor: fields.selectedColor ? fields.selectedColor : "rgb(27, 29, 32)",
        boxShadow: "0px 5px 10px rgb(0 0 0 / 15%)",
      }}>{fields.title}</footer>
  )
}

export default Footer