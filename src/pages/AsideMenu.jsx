import AsideLeft from "../components/AsideLeft"
import AsideRight from "../components/AsideRight"
import "../styles/AsideMenu.scss";

function AsideMenu () {
    return (
        <>
        <div className="aside-menu-container">
            <AsideLeft/>
            <AsideRight/>
        </div>
        </>
    )
}

export default AsideMenu