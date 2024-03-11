import styles from "./InfoCard.module.scss"

const InfoCard = ({data}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconHolder}>
        <img src={data.iconName} alt="" />
      </div>

      <b>{data.number}</b>
      <p>{data.text}</p>

    </div>
  )
}
export default InfoCard