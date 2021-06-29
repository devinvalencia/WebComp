import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../snc-now-experience-dashboard';


const view = (state, {updateState}) => {
	return (

		<snc-now-experience-dashboard/>
	);
};

createCustomElement('x-425618-project-name1', {
	renderer: {type: snabbdom},
	view,
	styles
});
