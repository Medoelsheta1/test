import { FaHome } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { RiFileSettingsFill } from "react-icons/ri";
import { VscFiles } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import DashList from "./DashList.js/DashList";

const Lists = () => {
    return (
        <div className='sideParList mt-4 d-flex flex-column justify-content-canter align-items-center'>
            <DashList dark={true} icon={<FaHome />} text="Dashboards" links={["Home" , "Products List" , "Add Products" , "Admin" , "Compontents"]} />
            <p className="mainColor text-start mb-0">Pages</p>
            <DashList dark={true} icon={<CiFileOn />} text="Dashboard" links={["Admin Pannel" , "E-commerce" ,]} />
            <DashList dark={true} icon={<RiFileSettingsFill />} text="Product" links={["Category" , "Wizard" , "DataTables" , "Calendar" , "Analytics"]} />
            <DashList icon={<FaCartArrowDown />} text="Ecommerce" links={["Category" , "Wizard" , "DataTables" , "Calendar" , "Analytics"]} />
            <DashList icon={<VscFiles />} text="Authentication" links={["Category" , "Wizard" , "DataTables" , "Calendar" , "Analytics"]} />
            <div className="line mt-3"><span></span></div>
            <p className="mainColor text-start mb-0">Docs</p>
            <DashList icon={<FaRocket />} text="Basic" links={["Basic" , "Basic" , "Basic"]} />
            <DashList icon={<FaRegCaretSquareDown />} text="Components" links={["Components" , "Components" , "Components" , "Components"]} />
            <DashList icon={<FaInfoCircle />} text="Changelog" links={["Changelog" , "Changelog" ]} />


        </div>
    )
}

export default Lists