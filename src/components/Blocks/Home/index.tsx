import * as React from 'react';
import { mapEnum } from '../../../util/array';
import { IconLinkType } from '../../Components/componentTypes';
import Hex from '../../Components/Asthetic/Hex';
import MainLogo from '../../MainLogo';
import './styles.scss';
import IconLink from './IconLink';

const Home = () => {
	return (
		<div className="home-content">
			<div className="hex-container"></div>
			<MainLogo />
			<div className="links-container">
				<Hex />
				<Hex />
				<Hex />
				<Hex />
			</div>
			<div className="links-container p1 odd">
				<Hex />
				<Hex />
				<Hex />
				<Hex />
			</div>
			<div className="links-container p1">
				<Hex />
				<Hex />
				<Hex />
				<Hex />
			</div>
			<div className="links-container odd"></div>
			<ul className="links-container">
				{mapEnum(IconLinkType, type => (
					<li key={type}>
						<Hex>
							<IconLink type={type} />
						</Hex>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
