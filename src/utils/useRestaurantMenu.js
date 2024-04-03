import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu =(resId) => {

    const [menuList , setMenuList] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const menuData = await fetch(MENU_URL + resId);
        const jsonMenu = await menuData.json();
        setMenuList (jsonMenu.data);
        console.log(menuList);
    };
    return menuList;
}

export default useRestaurantMenu;