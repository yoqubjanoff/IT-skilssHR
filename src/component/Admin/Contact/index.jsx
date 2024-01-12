import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';
import { Button2, Input2, Popup, Toast } from '../../../component/generics';
import request from '../../../services/api';
import { Loader } from '../../../component/Loader/Loader';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const CoursePage = () => {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		id: null,
		phoneNumber: null,
		location: null,
		longitude: null,
		latitude: null,
	});
	const getContact = async () => {
		setLoading(true);
		try {
			const res = await request.get('admin/contact-info/all');
			const { id, phoneNumber, location, longitude, latitude } =
				res?.data?.data?.[0];
			setState({
				...state,
				id,
				phoneNumber,
				location,
				longitude,
				latitude,
			});
			setLoading(false);
		} catch (error) {
			setLoading(false);
			Popup({
				type: 'error',
				message: error.message || 'An error occurred',
			});
		}
	};

	const onChangeInput = (e) => {
		const { value, name } = e?.target;
		setState({
			...state,
			[name]: value,
		});
	};
	let defaultState = {
		center: [
			state?.longitude || 41.328057161976375,
			state?.latitude || 69.31471602252371,
		],
		zoom: 15,
	};
	const handleMarker = (coords) => {
		setState({
			...state,
			longitude: coords?.[0],
			latitude: coords?.[1],
		});
	};

	const editContact = async () => {
		try {
			const res = await request.put('admin/contact-info', {
				data: state,
			});

			Toast({
				type: 'success',
				message: 'Contact edited',
			});
		} catch (error) {
			Toast({
				message: 'Something wrong !',
			});
		}
	};

	useEffect(() => {
		getContact();
	}, []);

	return (
		<Wrapper>
			{loading && <Loader />}
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Contact informations</p>
					<div className="TagBox">
						<div className="FlexBox"></div>

						<div className="FlexBox">
							<Button2
								bg={'#0B3A48'}
								color={'#000'}
								width={'150px'}
								height={'42px'}
								onClick={editContact}
							>
								Edit information
							</Button2>
						</div>
					</div>

					<div className="ColumnBox" style={{ width: '100%' }}>
						<div className="FlexBox">
							<Input2
								width={'375px'}
								header={'Location name'}
								color={'#000'}
								hc={'#000'}
								name={'location'}
								onChange={onChangeInput}
								value={state.location}
							/>
							<Input2
								width={'375px'}
								header={'Phone Number'}
								color={'#000'}
								hc={'#000'}
								name={'phoneNumber'}
								onChange={onChangeInput}
								value={state.phoneNumber}
							/>
						</div>

						<Wrapper.MapWrap>
							<YMaps style={{ height: '100%', borderRadius: '30px' }}>
								<Map
									defaultState={defaultState}
									width="100%"
									height="100%"
									onClick={(e) =>
										handleMarker(e?._sourceEvent?.originalEvent?.coords)
									}
								>
									<Placemark
										geometry={[
											state?.longitude || 41.328057161976375,
											state?.latitude || 69.31471602252371,
										]}
									/>
								</Map>
							</YMaps>
						</Wrapper.MapWrap>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default CoursePage;
