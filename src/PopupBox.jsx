import React from "react";
import { GoHeartFill } from "react-icons/go";

// rafce 단축키
const PopupBox = ({ item, setItem }) => {
  const url = item?.urls?.regular;
  const user = item?.user?.username;
  //console.log(item);

  //닫기 버튼
  function close() {
    setItem(null);
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
        <hr />
        <div className="box">
          {/* 사진작가 */}
          <p>Photo by. {user}</p>
          {/* 좋아요 */}
          <div className="info">
            <span className="likes">
              <GoHeartFill />
              {item.likes}
            </span>
          </div>
        </div>
        {/* 사진설명 */}
        {item.description !== null && (
          <div className="description">
            <p className="head">설명.</p>
            <p className="text">{item.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupBox;
