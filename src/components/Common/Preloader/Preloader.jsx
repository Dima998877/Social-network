import React from "react"
import preloader from '../../../assets/images/Preloader.svg'
import styles from './Preloader.module.css'

const Preloader = (props) => {
   // return <div className={styles.preloader} ><img src={preloader} alt='' /></div>
   return <div className={styles.overlay_loader}>
	<div className={styles.loader}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
}

export default Preloader
