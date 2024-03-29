import React, { Fragment } from 'react';
import { mapEnum } from '../../../util/array';
import { IconLinkType } from '../../Components/componentTypes';
import Hex from '../../Components/Hex';
import './styles.scss';
import IconLink from './IconLink';

const Home = () => {
	return (
		<div className="home-content">
			<div className="links-container v-offset h-offset-left">
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
			</div>
			<div className="links-container ">
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
			</div>
			<div className="links-container v-offset ">
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
			</div>
			<div className="links-container">
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
			</div>
			<div className="links-container v-offset h-offset-right">
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				{mapEnum(IconLinkType, type => (
					<Fragment key={type}>
						<IconLink type={type} />
					</Fragment>
				))}
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
			</div>
			<div className="links-container">
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
			</div>
			<div className="links-container v-offset">
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
			</div>
			<div className="links-container h-offset-right">
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
			</div>
			<div className="links-container v-offset">
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex />
				<Hex />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
				<Hex style={{ opacity: 0 }} />
			</div>
		</div>
	);
};

export default Home;
