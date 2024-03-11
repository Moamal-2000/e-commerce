import styles from "./InfoCard.module.scss"
import SvgIcon from "./SvgIcon"

const InfoCard = ({data}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconHolder}>
        <SvgIcon name={data.iconName} />
      </div>

      <b>{data.number}</b>
      <p>{data.text}</p>

    </div>
  )
}
export default InfoCard