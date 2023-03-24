
import { menuObj } from '../../constants/Const';
import style from './menu.module.scss';


const Menu = ({ menu, setMenu }) => {
	return (
		<nav>
			<ul className={classChange(menu)}>
				{menuObj.map(element => (
					<a key={element.id} href=''>
						<li>{element.link}</li>
					</a>
				))}
			</ul>
		</nav>
	);
};

const classChange = menu => {
	return menu ? `${style.menu} ${style['menu-show']}` : style.menu;
};

export default Menu;
