import Head from "next/head";
import {MyText} from "../components/commons/text";
import {MyButton} from "../components/commons/button";

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
                <MyText variant={"LOGO"}>
                    Vita
                </MyText>
                <MyText variant={"TITLE"}>
                    Lorem ipsum dolor sit amet.
                </MyText>
                <MyText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque commodi dolor, eius ipsa
                    iure, nemo numquam quaerat ratione repudiandae sequi tenetur voluptatibus! Aut consectetur dolor
                    quidem quo ratione. Sed.
                </MyText>
                <MyButton variant={"BORDER"}>
                    Sign in
                </MyButton>
                <MyButton>
                    Get started
                </MyButton>
            </div>
        </>
    );
}
