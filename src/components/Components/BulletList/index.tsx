import React from 'react';
import './styles.scss';

interface Props {
	children?: String[];
}

const BulletList = ({ children }: Props) => {
	const isArray = children !== undefined && Array.isArray(children);

	return (
		<>
			{isArray && (
				<ul className="bullet-list">
					{children.map((text, index) => {
						return (
							<li key={index} className="p">
								{text}
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default BulletList;
