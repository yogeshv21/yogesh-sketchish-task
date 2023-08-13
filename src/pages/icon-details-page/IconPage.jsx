import React, { useState } from "react";
import styles from "./IconPage.module.css";

// Local Imports
import { NavBar, Ad, Button, IconCard } from "../../components";
import { Icons } from "../../assets";
import {fileFormate, iconColorArr, iconSizes, iconTypeArr, strokes, otherIcons} from "../../dummyData"

const IconPage = () => {
  // hooks
  const [selectedSize, setSelectedSize] = useState("16");
  const [selectedFormate, setSelectedFormate] = useState(".svg");
  const [selectedType, setSelectedType] = useState("standard");

  // handlers
  const handleSizeClick = (e) => {
    console.log(e);
    setSelectedSize(e.size);
  };
  const handleFormateClick = (e) => {
    console.log(e);
    setSelectedFormate(e.formate);
  };
  const handleTypeClick = (e) => {
    console.log(e);
    setSelectedType(e.type);
  };

  return (
    <>
      {/* Icon Showcase section  */}
      <div className={styles.iconShowCaseCont}>
        <div className={styles.lft}>
          <div className={styles.header}>
            <span>Classic</span>
            <span>•</span>
            <span>Sharp</span>
          </div>
          <div className={styles.iconShow}>
            <div className={styles.iconCont}>
              <div className={styles.iconWraper}>
                <img src={Icons.shuttlecock} alt="" />
              </div>
              <div className={styles.iconColors}>
                <div className={styles.colorsCont}>
                  {iconColorArr.map((item) => (
                    <img key={item.id} src={item.img} alt="" />
                  ))}
                </div>
                <div className={styles.reset}>
                  <img src={Icons.reset} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.iconTypesCont}>
              {iconTypeArr.map((item, index) => (
                <div
                  key={index}
                  className={styles.iconType}
                  onClick={() => handleTypeClick(item)}
                >
                  <img key={item.id} src={item.img} alt="" />
                  <p
                    style={{
                      color: selectedType === item.type ? "#7238FA" : "#676F7E",
                    }}
                  >
                    {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rgt}>
          <div>
            <div className={styles.iconInfo}>
              <div className={styles.iconName}>
                <p>microphone-1-music-instruments</p>
                <span>pro</span>
                <img
                  src={Icons.link}
                  style={{
                    cursor: "pointer",
                  }}
                  alt=""
                />
              </div>
              <p className={styles.category}>
                instruments, communication, office, business, music
              </p>
              <p className={styles.report}>Report</p>
            </div>
            <div className={styles.iconModify}>
              <p>stroke-weight</p>
              {strokes.map((item) => (
                <img key={item.id} src={item.stroke} alt="" />
              ))}
            </div>
            <div className={styles.iconModify}>
              <p>icon-size</p>
              <div className={styles.optionsCont}>
                {iconSizes.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.iconSize} ${
                      selectedSize === item.size ? styles.active : ""
                    }`}
                    onClick={() => handleSizeClick(item)}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.iconModify}>
              <p>file-formate</p>
              <div className={styles.optionsCont}>
                {fileFormate.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.iconSize} ${styles.formate} ${
                      selectedFormate === item.formate ? styles.active : ""
                    }`}
                    onClick={() => handleFormateClick(item)}
                  >
                    {item.formate}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.btnCont}>
            <Button icon={Icons.add} />
            <Button icon={Icons.download} />
            <Button icon={Icons.copy} title={".SVG"} isActive={true} />
          </div>
        </div>
      </div>

      {/* Other Icons Section */}
      <div className={styles.otherIconsCont}>
        <h3>More icons like email</h3>
        <div className={styles.otherIcons}>
         {
          otherIcons.map((item, index)=>(
            <IconCard key={index} name={item.name} icon={item.icon}/>
          )) 
         }
        </div>
      </div>
    </>
  );
};

export default IconPage;
