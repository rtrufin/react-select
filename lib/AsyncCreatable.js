import PropTypes from 'prop-types';
import React from 'react';

import Async from './Async';
import Creatable from './Creatable';
import Select from './Select';

var AsyncCreatableSelect = function (_React$Component) {
	babelHelpers.inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		babelHelpers.classCallCheck(this, AsyncCreatableSelect);
		return babelHelpers.possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	babelHelpers.createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = babelHelpers.objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return React.createElement(
						Creatable,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = babelHelpers.objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(babelHelpers.extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(React.Component);

var defaultChildren = function defaultChildren(props) {
	return React.createElement(Select, props);
};

AsyncCreatableSelect.propTypes = {
	children: PropTypes.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren
};

export default AsyncCreatableSelect;