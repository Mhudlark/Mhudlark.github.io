import React, { Fragment } from 'react';
import { TypographyComponents, TypographyVariants } from '../componentTypes';
import './styles.scss';

const typographyClasses = {
	[TypographyVariants.h1]: 'h-100',
	[TypographyVariants.h2]: 'h-200',
	[TypographyVariants.h3]: 'h-300',
	[TypographyVariants.h4]: 'h-400',
	[TypographyVariants.p]: 'p',
};

interface Props {
	variant?: TypographyVariants;
	children?: String | String[];
	component?: TypographyComponents;
	style?: React.CSSProperties;
}

const Typography = ({
	variant = TypographyVariants.p,
	children,
	component,
	style,
}: Props) => {
	const isArray = children !== undefined && Array.isArray(children);
	const Component = component || variant;

	return (
		<>
			{isArray ? (
				<div className="typography array">
					{children.map((t, index) => {
						return (
							<Fragment key={index}>
								<Typography variant={variant} component={component}>
									{t}
								</Typography>
							</Fragment>
						);
					})}
				</div>
			) : (
				<Component className={`typography ${typographyClasses[variant]}`} style={style}>
					{children}
				</Component>
			)}
		</>
	);
};

export default Typography;
