import { useState } from "react"
import logo from "../../public/logo.png"
import headerBg from "../../public/header-image.jpg"
import iconMenu from "../icons/menu.png"
import closeMenu from "../icons/closeMenu.png"

const mobileStyleButton = "font-[500] "


export default function Header(){
    const [isMenuOpen, setMenuOpen]= useState<boolean>(false)

    const changeStateMenu = () =>{
        isMenuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }
    return(
        <header className="w-full min-h-[985px] max-h-[985px] bg-cover"style={{
            backgroundImage: `url(${headerBg})`
        }}>
            <div className="
            pt-[20px]
            pl-[16px]
            pr-[16px]
            text-[#FDFDFD]
            flex 
            text-center
            justify-between
            w-[100%] 
            font-[500]
            align-center
            md:justify-center 
            md:max-w-[700px]
            md:text-[12px]
            md:font-[700]
            mx-[auto] 
            lg:max-w-[1000px]
            lg:text-[18px]
            lg:font-[500]
            lg:gap-[20px]
            2xl:max-w-[1280px]
            2xl:flex
            2xl:text-[18px]
            2xl:gap-[212px]
            ">
                <img className=" md:p-[0px] w-[84px] h-[44px] md:w-[137px] md:h-[72px]" src={logo} alt="" />
                <div className="md:flex gap-[24px] my-[auto] hidden ">
                    <button className="hoverHeader">Главная</button>
                    <button className="hoverHeader ">Про гида</button>
                    <button className="hoverHeader">Программа тура</button>
                    <button className="hoverHeader" >Стоимость</button>
                    <button className="hoverHeader">Блог</button>
                    <button className="2xl:mr-[49px] hoverHeader">Контакты</button>   
                    <button className="bg-[#1A3E3E] hover:bg-[#FDFDFD] transition duration-300 hover:border hover:border-#1A3E3E hover:text-[#1A3E3E] rounded-[4px] w-[157px] h-[44px]" >Консультация</button>
                </div>

                <div className="grid md:hidden">
                    <div className="my-auto">
                        <img className="ml-auto w-[25px]" onClick={changeStateMenu} src={isMenuOpen ? closeMenu : iconMenu} alt="" />
                    </div>
                    {isMenuOpen && (
                        <div className="grid grid-cols-1 pr-[10px] w-full  bg-[#1A3E3E]">
                            <button className={mobileStyleButton}>Главная</button>
                            <button className={mobileStyleButton}>Про гида</button>
                            <button className={mobileStyleButton}>Программа тура</button>
                            <button className={mobileStyleButton} >Стоимость</button>
                            <button className={mobileStyleButton}>Блог</button>
                            <button className={mobileStyleButton}>Контакты</button>   
                            <button className={mobileStyleButton} >Консультация</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}