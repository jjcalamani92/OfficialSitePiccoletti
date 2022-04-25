import React, { useContext } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NextLink from 'next/link';
import { UiContext } from '../../../context';
const dates = ['men', 'women', 'kid'];
const dates2 = ['chamarras', 'poleras', 'camisas'];
const dates3 = ['sudaderas', 'chamarras', 'leggins', 'blusas'];

export const NavLink = () => {
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
	return (
		<ul>
			<li className="nav-link">
				<NextLink href="/men" passHref prefetch={false}>
					<a onClick={isMenuOpen ? toggleSideMenu : ''}>
						hombre
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</a>
				</NextLink>
				<div className="dropdown">
					<ul>
						{dates2.map((data, i) => (
							<li className="dropdown-link" key={i}>
								<Link href={`/men/${data}`}>
									<a onClick={isMenuOpen ? toggleSideMenu : ''}>{data}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>

			<li className="nav-link">
				<NextLink href="/women" passHref prefetch={false}>
					<a onClick={isMenuOpen ? toggleSideMenu : ''}>
						mujer
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</a>
				</NextLink>
				<div className="dropdown">
					<ul>
						{dates3.map((data, i) => (
							<li className="dropdown-link" key={i}>
								<Link href={`/women/${data}`}>
									<a onClick={isMenuOpen ? toggleSideMenu : ''}>{data}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>

			<li className="nav-link">
				<NextLink href="/contacto" passHref prefetch={false}>
					<a onClick={isMenuOpen ? toggleSideMenu : ''}>contacto</a>
				</NextLink>
			</li>
		</ul>
	);
};
