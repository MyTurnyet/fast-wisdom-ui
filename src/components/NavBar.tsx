import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export const NavBar = () => {
	return (
		<div className={'navigation'}>
			<NavLink to={'/home'} title={'Home'}>
				Home
			</NavLink>
			<NavLink to={'/about'} title={'About'}>
				About
			</NavLink>
		</div>
	);
};
