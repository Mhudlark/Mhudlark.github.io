import * as React from 'react';
import { mapEnum } from '../../../util/array';
import { IconLinkType } from '../../Components/componentTypes';
import IconLink from '../../Components/IconLink';
import MainLogo from '../../MainLogo';
import './styles.scss';

const Home = () => {
	return (
		<div className="logo-title-container">
			<MainLogo />
			<ul className="links-container">
				{mapEnum(IconLinkType, type => (
					<li key={type}>
						<IconLink type={type} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
