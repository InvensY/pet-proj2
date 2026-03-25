import logo from "../../public/logo.png"
import headerBg from "../../public/header-image.jpg"

export default function Header(){
    return(
        <header className="min-h-[985px] max-h-[985px] bg-cover"style={{
            backgroundImage: `url(${headerBg})`
        }}>
            <div className="lg:max-w-[840px] lg: text-[12px] text-[#FDFDFD] text-[18px] gap-[212px] flex 2xl:max-w-[1180px] w-[100%] align-center justify-center mx-[auto] gap">
                <img className="" src={logo} alt="" />
                <div className="flex gap-[24px] my-[auto]">
                    <button className="hoverHeader">Главная</button>
                    <button className="hoverHeader">Про гида</button>
                    <button className="hoverHeader">Программа тура</button>
                    <button className="hoverHeader" >Стоимость</button>
                    <button className="hoverHeader">Блог</button>
                    <button className="mr-[49px] hoverHeader">Контакты</button>   
                    <button className="bg-[#1A3E3E] hover:bg-[#FDFDFD] transition duration-300 hover:border hover:border-#1A3E3E hover:text-[#1A3E3E] rounded-[4px] w-[157px] h-[44px]" >Консультация</button>
                </div>
            </div>
        </header>
    )
}