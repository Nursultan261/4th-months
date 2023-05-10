
import React from "react";
import Slider from "./Carousel/Carousel";

const App = () => {
  const images = [
    "https://static.mk.ru/upload/entities/2023/02/22/20/articles/detailPicture/dd/f3/38/d1/ae813bc5c0c51ee20cf7a9eae2fddfe7.jpg",
    "https://kartinki.pibig.info/uploads/posts/2023-03/1680280038_kartinki-pibig-info-p-smeshnie-kartinki-s-shrekom-arti-1.jpg",
    "https://www.tutu.ru/file/4/b024c1aad77e42d424c96720b4d60712/",
    
  ];

  return (
    <div>
      <h1>Круто да?</h1>
      <Slider images={images} />
    </div>
  );
};

export default App;

