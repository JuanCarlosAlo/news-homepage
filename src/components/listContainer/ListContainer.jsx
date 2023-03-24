import { listObj } from '../../constants/Const';
import style from './listContainer.module.scss';

const ListContainer = () => {
	return (
		<div className={style.list}>
			{listObj.map(element => (
				<div key={element.id} className={style['list-item']}>
					<img className={style['list-item-img']} src={element.img} alt='' />
					<div>
						<p className={style['list-item-number']}>{element.number}</p>
						<p className={style['list-item-title']}>{element.title}</p>
						<p className={style['list-item-text']}>{element.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListContainer;
