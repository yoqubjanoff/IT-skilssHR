import Swal from 'sweetalert2';
import './style.css';
import Question from '../../../assets/img/popup_question.png';
import Error from '../../../assets/img/popup_error.png';
import Info from '../../../assets/img/popup_info.png';
const Popup = ({
	title,
	imageUrl,
	allowOutsideClick,
	confirmButtonText,
	isConfirmedFunction,
	type,
	showCancelButton,
	input,
	placeholder,
	preConfirm,
	text,
	html,
	hideConfirmButton,
}) => {
	Swal.fire({
		imageUrl: imageUrl
			? imageUrl
			: type === 'warning'
			? Error
			: type === 'question'
			? Question
			: type === 'info'
			? Info
			: undefined,
		imageWidth: 125,
		imageHeight: 110,
		title: title ? title : html ? '' : 'Internet not working',
		allowOutsideClick: !allowOutsideClick,
		confirmButtonTextColor: '#0D3B3F',
		confirmButtonText: confirmButtonText || 'Ok',
		showCancelButton: showCancelButton || false,
		showConfirmButton: !hideConfirmButton,
		input: input,
		inputAttributes: {
			rows: 3,
			placeholder: placeholder,
		},
		preConfirm: preConfirm,
		text: text,
		html: html,
	}).then((result) => {
		if (result.isConfirmed) {
			isConfirmedFunction && isConfirmedFunction();
		}
	});
};

export default Popup;
