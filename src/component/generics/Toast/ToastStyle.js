import styled from 'styled-components';

const Container = styled.div``;
/* 

*/
function returnType(statusCode) {
	if (statusCode >= 100 && statusCode < 200) {
		return 'info';
	} else if (statusCode >= 400 && statusCode < 600) {
		return 'warn';
	}
}
function getType(success) {
	if (!success) {
		return 'error';
	} else {
		return 'success';
	}
}

const Notification = styled.div`
	padding: 5px 10px;
`;

Notification.Title = styled.div`
	font-weight: 700px;
	color: #5c6470;
	text-align: left;
	display: flex;
	grid-gap: 15px;
	align-items: center;
`;
Notification.Content = styled.div`
	display: flex;
	grid-gap: 15px;
	align-items: center;
`;
Notification.Text = styled.div`
	font-weight: 400;
	font-size: 11px;
	color: #5c6470;
	text-align: justify;
`;

export { returnType, getType, Container, Notification };
