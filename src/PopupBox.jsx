import React from "react";

// rafce 단축키
const PopupBox = ({ item, setItem }) => {
  const url = item?.urls?.regular;
  //console.log(item);

  //닫기 버튼
  function close() {
    alert("닫기!");
  }
  return (
    <div className="lightbox show">
      <div className="wrapper">
        <header>
          <div className="details">
            <i className="uil uil-camera"></i>
            <span>Image Preview</span>
          </div>
          {/* 닫기버튼 */}
          <div className="buttons" onClick={close}>
            <i className="close-icon uil uil-times"></i>
          </div>
        </header>
        <div className="preview-img">
          <div className="img">
            <img src={url} alt="preview-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
