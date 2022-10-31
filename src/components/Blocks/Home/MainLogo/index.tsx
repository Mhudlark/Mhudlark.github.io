import * as React from 'react';
import './styles.scss';

const MainLogo = () => {
	return (
		<>
			<div className="logo hex-outer">
				<div className="hex-inner">
					<div className="logo-img-container">
						<div className="logo-img" aria-label="Logo" />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainLogo;
