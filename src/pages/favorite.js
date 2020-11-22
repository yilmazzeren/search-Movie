import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";

export default function Favorite() {
    return (
        <div>
            <Head>
                <title>Favorite</title>
            </Head>
            <Navigation/>
            <h4 style={{margin:"50px 170px",fontSize:"24px",letterSpacing:"1px"}}>Favorites</h4>
        </div>
    )
}