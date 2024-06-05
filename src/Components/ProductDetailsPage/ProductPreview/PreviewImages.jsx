import s from "./PreviewImages.module.scss";

const PreviewImages = ({ data, previewImg, setPreviewImg }) => {
  return (
    <div className={s.otherImages}>
      {data.map((img, i) => (
        <button
          key={i}
          type="button"
          className={`${s.imgHolder} ${previewImg === img ? s.active : ""}`}
          onClick={() => setPreviewImg(data[i])}
        >
          <img src={img} alt="product's image" />
        </button>
      ))}
    </div>
  );
};

export default PreviewImages;
