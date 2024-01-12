import { toast } from 'react-toastify';
export default function Toast({ type, message, duration }) {
	toast[`${type}`](message, {
		position: 'bottom-right',
		autoClose: duration || 2000,
	});
}
