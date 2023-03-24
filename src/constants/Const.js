import { v4 } from 'uuid';
const menuObj = [
	{
		id: v4(),
		link: 'Home'
	},
	{
		id: v4(),
		link: 'New'
	},
	{
		id: v4(),
		link: 'Popular'
	},
	{
		id: v4(),
		link: 'Trending'
	},
	{
		id: v4(),
		link: 'Categories'
	}
];

const listObj = [
	{
		id: v4(),
		img: '/images/image-retro-pcs.jpg',
		number: '01',
		title: 'Reviving Retro PCs',
		text: 'What happens when old PCs are given modern upgrades?'
	},
	{
		id: v4(),
		img: '/images/image-top-laptops.jpg',
		number: '02',
		title: 'Top 10 Laptops of 2022',
		text: 'Our best picks for various needs and budgets.'
	},
	{
		id: v4(),
		img: '/images/image-gaming-growth.jpg',
		number: '03',
		title: 'The Growth of Gaming',
		text: 'How the pandemic has sparked fresh opportunities.'
	}
];

export { menuObj, listObj };
