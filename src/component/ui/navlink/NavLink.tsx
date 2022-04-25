import React, { useContext } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NextLink from 'next/link';
import { UiContext } from '../../../context';
const dates = ['men', 'women', 'kid'];
const dates2 = ['chamarras', 'poleras', 'camisas'];

export const NavLink = () => {
	const { toggleSideMenu } = useContext(UiContext);
	return (
		<ul>
			<li className="nav-link">
				<NextLink href="/men" passHref prefetch={false}>
					<a onClick={toggleSideMenu}>
						hombre
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</a>
				</NextLink>
				<div className="dropdown">
					<ul>
						{dates2.map((data, i) => (
							<li className="dropdown-link" key={i}>
								<Link href={`/men/${data}`}>
									<a onClick={toggleSideMenu}>{data}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>

			<li className="nav-link">
				<NextLink href="/women" passHref prefetch={false}>
					<a onClick={toggleSideMenu}>
						mujer
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</a>
				</NextLink>
				<div className="dropdown">
					<ul>
						{dates2.map((data, i) => (
							<li className="dropdown-link" key={i}>
								<Link href={`/men/${data}`}>
									<a onClick={toggleSideMenu}>{data}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>

			<li className="nav-link">
				<Link href="/contacto">
					<a onClick={toggleSideMenu}>contacto</a>
				</Link>
			</li>
		</ul>
	);
};
