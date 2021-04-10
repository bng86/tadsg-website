import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<div className={styles.logo}/>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Android Developer 開發者讀書會
				</h1>

				<p className={styles.description}>
					嗨！您好：
					這裏是 Taiwan Android Developer Study Group，不管你是想學新技術、想詢問技術問題、想找相關工作或是想找技術社群進行作品累積的人，都歡迎您參加。
				</p>

				<p className={styles.description}>
					社群目前每週三固定於天瓏書局2樓舉辦 CodeClub，近年來最大的活動是舉辦GDG Devfest，有固定的常駐志工會回答及不定期技術分享，也長期的與不同的技術社群進行交流、如Android Taipei, GDG
					Taipei, Kotlin Taipei。
				</p>
			</main>

			<footer className={styles.footer}>
				Copyright © 2021 taiwan android developer study group . All rights reserved.
			</footer>
		</div>
	)
}
