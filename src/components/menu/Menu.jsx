import { v4 } from 'uuid';
import style from './menu.module.scss'
const menuObj =[
    {
        id:v4(),
        link: 'Home'
    },
    {
        id:v4(),
        link: 'New'
    },
    {
        id:v4(),
        link: 'Popular'
    },
    {
        id:v4(),
        link: 'Trending'
    },
    {
        id:v4(),
        link: 'Categories'
    },
]

const Menu =({menu,setMenu}) =>{
    return<nav>
    <ul className={classChange(menu)}>
    {
        menuObj.map(element=>
            <li key={element.id}>{element.link}</li>
        
    )}
    </ul>
   
</nav>
}

const classChange =(menu)=>{
    return menu ? `${style.menu} ${style['menu-show']}` :style.menu
}

export default Menu