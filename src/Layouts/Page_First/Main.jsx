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
          title: "Header - 1",
          pageNumber: 1,
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
          
        }}
      >
        
        <div
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
              padding: windowWidth <= 768 && "10%",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                width: windowWidth <= 768 ? "100%" : "80%",
                display: "flex",
                gap: "2rem",
              }}
            >
              <div
                style={{ flexGrow: 1, display: windowWidth <= 768 && "none" }}
              >
                <MenuItems
                  fields={{
                    setSelectedColor: setSelectedColor,
                  }}
                />
              </div>

              <div style={{ flexGrow: 1 }}>
                <Form
                  fields={{
                    title: "Title One",
                    pageNumber: 1,
                  }}
                />
              </div>
            </div>
          </div>

          <aside
            style={{
              backgroundColor: "#e1e1e1",
              width: windowWidth <= 768 ? "0" : "20%",
              display: windowWidth <= 768 ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Side Bar
          </aside>
        </div>
      </div>

      <Footer
        fields={{
          title: "Footer - 1",
          setSelectedColor: setSelectedColor,
          selectedColor: selectedColor,
        }}
      />
    </div>
  );
};

export default Main;
