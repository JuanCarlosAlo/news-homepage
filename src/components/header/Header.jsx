import { useState } from 'react';
import style from './header.module.scss';

import Menu from '../menu/Menu';

const Header = () => {
	const [menu, setMenu] = useState(false);
	return (
		<header className={style.header}>
			<div className={style['header-top']}>
				<img src='/images/logo.svg' alt='' />
				<Menu menu={menu} setMenu={setMenu} />
				<img
					className={style['cross-icon']}
					onClick={e => setMenu(!menu)}
					src={menu ? '/images/icon-menu-close.svg' : '/images/icon-menu.svg'}
					alt=''
				/>
			</div>
			<div className={style['header-bottom']}>
				<div>
					<picture>
						<source
							media='(min-width:650px)'
							srcSet='/images/image-web-3-desktop.jpg'
						/>
						<source
							media='(min-width:465px)'
							srcSet='/images/image-web-3-mobile.jpg'
						/>
						<img src='/images/image-web-3-mobile.jpg' alt='' />
					</picture>
					<div className={style['header-bottom-info']}>
						<h1 className={style['header-bottom-title']}>
							The Bright Future of Web 3.0?
						</h1>
						<div className={style['header-bottom-info-text']}>
							<p>
								We dive into the next evolution of the web that claims to put
								the power of the platforms back into the hands of the people.
								But is it really fulfilling its promise?
							</p>
							<div className={style['header-bottom-button']}>READ MORE</div>
						</div>
					</div>
				</div>

				<div className={style['header-bottom-news']}>
					<h2 className={style['header-bottom-news-title']}>New</h2>
					<div className={style['header-bottom-news-item']}>
						<p className={style['header-bottom-news-item-title']}>
							Hydrogen VS Electric Cars
						</p>
						<p>Will hydrogen-fueled cars ever catch up to EVs?</p>
					</div>
					<div className={style['header-bottom-news-item']}>
						<p className={style['header-bottom-news-item-title']}>
							The Downsides of AI Artistry
						</p>
						<p>
							What are the possible adverse effects of on-demand AI image
							generation?
						</p>
					</div>
					<div className={style['header-bottom-news-item']}>
						<p className={style['header-bottom-news-item-title']}>
							Is VC Funding Drying Up?
						</p>
						<p>
							Private funding by VC firms is down 50% YOY. We take a look at
							what that means.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
