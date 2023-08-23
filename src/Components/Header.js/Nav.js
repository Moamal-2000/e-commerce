import styles from './_Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/#" className={styles.active}>Home</a></li>
        <li><a href="/#">Contact</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default Nav