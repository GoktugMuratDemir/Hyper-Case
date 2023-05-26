/* eslint-disable react/prop-types */
const MenuItems = ({fields}) => {

  const { setSelectedColor } = fields

    var menuItems = [
      { id: 1, color: "#ff0000", title: "Kırmızı" },
      { id: 2, color: "#00ff00", title: "Yeşil" },
      { id: 3, color: "#0000ff", title: "Mavi" },
      { id: 4, color: "#ffff00", title: "Sarı" },
      { id: 5, color: "#ff00ff", title: "Pembe" },
      { id: 6, color: "#ffa500", title: "Turuncu" },
      { id: 7, color: "#800080", title: "Mor" },
      { id: 8, color: "#008080", title: "Camgöbeği" }
    ];
    
    return (
      <>
        {menuItems.map((item) => (
          <div key={item.id} style={{
            padding: "8px",
            backgroundColor: item.color,
            cursor: "pointer",
          }}
          onClick={()=>setSelectedColor(item.color)}
          >
            {item.title}
          </div>
        ))}
      </>
    );
  };
  
  export default MenuItems;
  