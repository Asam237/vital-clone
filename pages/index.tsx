import Head from "next/head";
import {MyText} from "../components/commons/text";
import {MyButton} from "../components/commons/button";
import Header from "../components/header";

export default function Index() {
    return (
        <>
            <Head>
                <title>Vital — digital health API</title>
                <meta name="description" content="hospisoft"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <Header />
            </div>
        </>
    );
}
