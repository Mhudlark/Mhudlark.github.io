import * as React from 'react';
import { mapEnum } from '../../../util/array';
import Button from '../../Components/Button';
import { ButtonType, IconLinkType } from '../../Components/componentTypes';
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
			<div
				style={{ display: 'flex', gap: '8px', backgroundColor: 'white', padding: '32px' }}
			>
				<Button type={ButtonType.primary} onClick={() => console.log('pressed')}>
					Push me
				</Button>
				<Button type={ButtonType.success} onClick={() => console.log('pressed')}>
					Push me
				</Button>
				<Button type={ButtonType.danger} onClick={() => console.log('pressed')}>
					Push me
				</Button>
				<Button type={ButtonType.info} onClick={() => console.log('pressed')}>
					Push me
				</Button>
				<Button type={ButtonType.primary} onClick={() => console.log('pressed')} disabled>
					Push me
				</Button>
			</div>
		</div>
	);
};

export default Home;
