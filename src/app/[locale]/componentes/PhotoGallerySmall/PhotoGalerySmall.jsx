"use client";
import { useState } from "react";
import styles from "./PhotoGallerySmall.module.css";

export default function PhotoGallerySmall({ children }) {
  const [activeImgIndex, setActiveImgIndex] = useState(null);

  function handleImageClick(index) {
    setActiveImgIndex(activeImgIndex === index ? null : index);
  }

  return (
    <div
      className={`${styles.gridContainer} ${
        activeImgIndex !== null ? styles.expanded : ""
      }`}
    >
      {children.map((image, index) => (
        <div
          key={index}
          className={`exclude_margin  ${styles.photoContainer} ${
            activeImgIndex === index ? styles.active : ""
          }`}
          onClick={() => handleImageClick(index)}
        >
          {image}
        </div>
      ))}
    </div>
  );
}
