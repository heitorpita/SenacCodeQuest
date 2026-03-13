import React from "react";
import styles from "./EventPage.module.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;