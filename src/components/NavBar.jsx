import { Link } from "react-router-dom"

Link
export default function NavBar() {
 const redirectHome = () => {
        window.location.href = "/";
    };
    return (
        <>
            <header className="xl:flex xl:justify-evenly xl:items-center xl:w-full le:mr-2 le:w-content">
                <div className="flex justify-around items-center xl:flex xl:flex-row xl:justify-around xl:items-center xl:w-3/6">
                    <img src="/logo/logo-navbar.png" alt="imagen no soportada" className="w-20 md:w-24 xl:w-20" onClick={redirectHome}/>
                    <nav className="flex justify-center w-max items-center flex-wrap bg-nvPink md:justify-center md:w-max md:p-1 xl:flex-nowrap xl:w-max xl:h-10 xl:flex xl:flex-row xl:justify-center xl:items-center">
                        <Link to={"/nosotros"} className="border border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> NOSOTROS </Link>
                        <Link to={"/comercios"} className="border  border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> COMERCIOS </Link>
                        <Link to={"/profecionales-de-bellesa"} className="border  border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> PROF.BELLESAS </Link>
                        <Link to={"/profecionales-de-salud"} className="border  border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> PROF.SALUD </Link>
                        <Link to={"/clasificados"} className="border  border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> CLASIFICADOS </Link>
                        <Link to={"/contacto"} className="border  border-r border-l border-black w-20 le:w-21 h-7 text-xs flex justify-center items-center"> CONTACTO </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}