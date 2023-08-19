import Head from "next/head";
import {MyText} from "../components/commons/text";
import Header from "../components/header";
import {MyButton} from "../components/commons/button";
import Image from "next/image";
import {Pic1, Pic2, Pic3, Pic4} from "../assets/data/images";

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
                <Header/>
                <div className="container mx-auto">
                    <main className={'flex items-center flex-col mt-8 xl:mt-20'}>
                        <MyText className={'text-center'}><span
                            className={'xl:px-6 xl:py-2 rounded-full xl:bg-green-900'}>Product Updates: Try out our API with your free sleep analysis</span></MyText>
                        <MyText className={'mt-8 xl:mt-20 xl:w-3/4 text-center'} variant={"TITLE"}>The simplest way to
                            launch<br/>at-home testing and monitoring.</MyText>
                        <MyText className={'mt-4 xl:mt-8 xl:w-3/4 text-center'}>Vital API enables digital health
                            companies to launch at-home testing and remote monitoring with <br/>wearables and medical
                            devices, while allowing them to focus on delivering actionable insights.</MyText>
                        <MyButton className={'mt-4 xl:mt-8'}>Get started</MyButton>
                        <div
                            className={'grid xl:grid-x-2 xl:grid-y-0 grid-y-4 w-full xl:w-3/5 grid-cols-1 xl:grid-cols-4 my-8 md:my-12 xl:my-16 xl:h-64'}>
                            <div className={"flex flex-col"}>
                                <div className={'h-full m-2 xl:h-3/5 xl:bg-white border rounded-lg p-2'}>
                                    <p className={'xl:bg-white'}><span
                                        className={'bg-pink-100 text-pink-700 text-[10px] rounded-full py-1 px-4'}>Calories burnt</span>
                                    </p>
                                    <p className={'my-2 text-pink-700 xl:bg-white text-xl font-bold'}>3250<span
                                        className={'xl:bg-white text-xs text-pink-400 pl-1'}>kcal</span></p>
                                    <Image className={'bg-white h-12 hidden xl:flex w-full bg-cover mx-auto'} src={Pic1} alt={'pic'} />
                                </div>
                                <div className={"hidden md:flex h-2/5"}/>
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={"hidden xl:flex h-1/6"}/>
                                <div className={'h-full m-2 xl:h-4/6 xl:bg-white border rounded-lg p-2'}>
                                    <p className={'xl:bg-white'}><span
                                        className={'bg-indigo-100 text-indigo-700 text-[10px] rounded-full py-1 px-4'}>Blood glucose range</span>
                                    </p>
                                    <p className={'my-2 text-indigo-700 xl:bg-white text-xl font-bold'}>7<span
                                        className={'xl:bg-white text-xs text-indigo-400 pl-1'}>h/week</span></p>
                                    <Image className={'bg-white h-12 hidden xl:flex w-full bg-cover mx-auto'} src={Pic4} alt={'pic'} />
                                </div>
                                <div className={"hidden xl:flex h-1/6"}/>
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={'h-full m-2 xl:h-4/6 xl:bg-white border rounded-lg p-2'}>
                                    <p className={'xl:bg-white'}><span
                                        className={'bg-blue-100 text-blue-700 text-[10px] rounded-full py-1 px-4'}>Sleep quality</span>
                                    </p>
                                    <p className={'my-2 text-blue-700 xl:bg-white text-xl font-bold'}>87<span
                                        className={'xl:bg-white text-xs text-blue-400 pl-1'}>%</span></p>
                                    <Image className={'bg-white h-12 hidden xl:flex w-full bg-cover mx-auto'} src={Pic2} alt={'pic'} />
                                </div>
                                <div className={'h-full m-2 xl:h-2/6 xl:bg-white border rounded-lg p-2'}>
                                    <p className={'xl:bg-white'}><span
                                        className={'bg-green-100 text-green-700 text-[10px] rounded-full py-1 px-4'}>Body energy</span>
                                    </p>
                                    <p className={'my-2 text-green-700 xl:bg-white text-xl font-bold'}>80<span
                                        className={'xl:bg-white text-xs text-green-400 pl-1'}>points</span></p>
                                </div>
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={"hidden xl:flex h-1/6"}/>
                                <div className={'h-full m-2 xl:h-4/6 xl:bg-white border rounded-lg p-2'}>
                                    <p className={'xl:bg-white'}><span
                                        className={'bg-orange-100 text-orange-700 text-[10px] rounded-full py-1 px-4'}>Activity levels</span>
                                    </p>
                                    <p className={'my-2 text-orange-700 xl:bg-white text-xl font-bold'}>7<span
                                        className={'xl:bg-white text-xs text-orange-400 pl-1'}>h/week</span></p>
                                    <Image className={'bg-white h-12 hidden xl:flex w-full bg-cover mx-auto'} src={Pic2} alt={'pic'} />
                                </div>
                                <div className={"hidden md:flex h-1/6"}/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
