import { useEffect, useState } from "react";
import Form from "../../Components/Form";
import MenuItems from "../../Components/MenuItems";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [selectedColor, setSelectedColor] = useState("");

  

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
    <div className="scaffold">
      <Header
        fields={{
          title: "Header - 2",
          pageNumber: 2,
          setSelectedColor: setSelectedColor,
          selectedColor: selectedColor,
        }}
      />

      {/* body loayout */}
      <div
        style={{
          flexGrow: "1",
          height: "100%",
          padding: "0",
          display: "grid",
          gridTemplateColumns: windowWidth <= 768 ? "1fr" : "80% 20%",
          gridTemplateRows: "100%",
        }}
      >
        {/* body left side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            padding: "10%",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              width: "100%",
              display: "grid",
              gridTemplateColumns: windowWidth <= 768 ? "1fr" : "1fr 2fr",
              columnGap: "2rem",
            }}
          >
            <div style={{ display: windowWidth <= 768 && "none" }}>
              <MenuItems
                fields={{
                  setSelectedColor: setSelectedColor,
                }}
              />
            </div>

            <div>
              <Form
                fields={{
                  title: "Title Two",
                  pageNumber: 2,
                }}
              />
            </div>
          </div>
        </div>

        {/* body right side */}
        <aside
          style={{
            backgroundColor: "#e1e1e1",
            display: windowWidth <= 768 ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Side Bar
        </aside>
      </div>

      <Footer
        fields={{
          title: "Footer - 2",
          setSelectedColor: setSelectedColor,
          selectedColor: selectedColor,
        }}
      />
    </div>
  );
};

export default Main;
