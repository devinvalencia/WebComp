import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>https://developer.servicenow.com/connect.do#!/event/knowledge2021/CCL1043-K21/lab_CCL1043-K21_exercise_3_component_hierarchy</div>
		<div>https://developer.servicenow.com/dev.do#!/reference/now-experience/quebec/ui-framework/main-concepts/component</div>
		
	);
};

createCustomElement('x-425618-project-name1', {
	renderer: {type: snabbdom},
	view,
	styles
});
