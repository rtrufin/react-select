import React from 'react';

var clearRenderer = function clearRenderer() {
	return React.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

export default clearRenderer;