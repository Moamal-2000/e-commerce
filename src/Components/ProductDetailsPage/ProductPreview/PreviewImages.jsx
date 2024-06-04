import s from "./PreviewImages.module.scss";

const PreviewImages = ({ data, previewImg, setPreviewImg }) => {
  return (
    <div className={s.otherImages}>
      {data.map((img, i) => (
        <div
          key={i}
          className={`${s.imgHolder} ${previewImg === img ? s.active : ""}`}
          onClick={() => setPreviewImg(data[i])}
        >
          <img src={img} alt="product's image" />
        </div>
      ))}
    </div>
  );
};

export default PreviewImages;
