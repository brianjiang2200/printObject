import React from 'react';

//Renders an object recrusively into an HTML format
export const printObject = (object) => {
	if (!object) return;
	const keys = Object.keys(object);
	let formatted = <div className="object">
		{keys.map(key => (
			<div key={key}>
				<div className="property-label"><b>{key}</b></div>
				{switchType(object[key])}
			</div>
		))}
	</div>;
	return formatted;
}

//switch object Type
export const switchType = (object) => {
	switch (typeof object) {
		case 'object':
			if (Array.isArray(object)) {
				return <div className="array">
					{object.map((element, order) => {
						<div className="array-element" key={order}>
							<span>{order + 1}.</span>
							{switchType(element)}
						</div>
					))}
				</div>
			}
			else {
				return printObject(object);
			}
		default: 
			if (object === null) return <div className="primitive">Undefined</div>;
			return (
				<div className="primitive">{object}</div>
			);
	}
}