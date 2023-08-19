import {MyText} from "../commons/text";
import {AiOutlineMenu, AiOutlineCloseCircle} from "react-icons/ai";
import {navs, NavType} from "../../assets/data/navs";
import {useState} from "react";
import {MyButton} from "../commons/button";

const Header = () => {
    const [select, setSelect] = useState(false);
    const handleSelect = () => {
        setSelect(!select);
    }
    return (
        <header className={'my-10'}>
            <div className="container mx-auto">
                <div className={'flex justify-between items-center'}>
                    <div className={'flex justify-center'}>
                        <MyText variant={"LOGO"}>vital</MyText>
                        <div className={`hidden xl:flex ml-16`}>
                            <ul className={'flex justify-center items-center space-x-8'}>
                                {navs.map((item: NavType, index) => {
                                    return (
                                        <li key={index}><a href={item.path}><MyText>{item.link}</MyText></a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={'hidden xl:flex space-x-4'}>
                        <MyButton variant={"BORDER"}>Sign in</MyButton>
                        <MyButton>Get started</MyButton>
                    </div>
                    <div className={'flex xl:hidden'}>
                        <AiOutlineMenu onClick={handleSelect} className={`text-white ${select === true ? 'hidden': 'flex'}`} size={30}/>
                        <AiOutlineCloseCircle onClick={handleSelect} className={`text-white ${select === true ? 'flex': 'hidden'}`} size={30}/>
                    </div>
                </div>
                <div className={`${select === true ? 'flex' : 'hidden'} justify-center items-center mt-4`}>
                    <ul className={'flex flex-col justify-center items-center space-y-2'}>
                        {navs.map((item: NavType, index) => {
                            return (
                                <li key={index}><a href={item.path}><MyText>{item.link}</MyText></a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;