import React, { useEffect, useState } from 'react';
import Coin from '../../../assets/icons/coin-blue.svg';
import Location from '../../../assets/icons/location-blue.svg';
import Close from '../../../assets/icons/close-circle.svg';
import { Wrapper } from './style';
import User from '../../../assets/icons/user.svg';
import { useNavigate } from 'react-router-dom';
import Save from '../../../assets/icons/save-black.svg';
import SaveWhite from '../../../assets/icons/save-white.svg';
import request from '../../../services/api/hr-request';

const CardEmployee = ({ data, disable }) => {
	const navigate = useNavigate();
	const [save, setSave] = useState(data?.saved);

	const SavedFunc = async () => {
		try {
			const res = await request.get(
				`hr/save/talent/${data?.id}?selected=${!save}`,
			);
			setSave(!save);
		} catch (error) {
			console.error('Error');
		}
	};

	useEffect(() => setSave(data?.saved), [data?.saved]);
	return (
		<Wrapper.CardBox
			onClick={() => !disable && navigate(`/show-profile/${data?.id}`)}
		>
			{save ? (
				<img
					src={Save}
					className="absolute top-[20px] right-[32px]"
					onClick={(e) => {
						e?.stopPropagation();
						SavedFunc();
					}}
				/>
			) : (
				<img
					src={SaveWhite}
					className="absolute top-[20px] right-[32px]"
					onClick={(e) => {
						e?.stopPropagation();
						SavedFunc();
					}}
				/>
			)}

			<Wrapper.Box>
				<Wrapper.CardImage src={data?.photoUrl || User} alt="image" />
				<Wrapper.Box
					style={{ flexDirection: 'column', overFlow: 'hidden' }}
					gap={'5px'}
					jc="center"
					margin="0 0 20px 0"
				>
					<div className="w-[150px] overflow-hidden max-[400px]:w-[100px]">
						<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[22px] font-[700]">
							{data?.firstName}
						</p>
					</div>
					<p className="Job">{data?.subDirection}</p>
				</Wrapper.Box>
				<Wrapper.Box
					style={{ flexDirection: 'column' }}
					gap={'25px'}
					jc="center"
				>
					<Wrapper.Box gap={'8px'} ai={'center'}>
						<img
							src={Close}
							width={25}
							height={25}
							style={{ margin: '0 0 0 10px' }}
						/>
						<div className="w-[180px] overflow-hidden max-[400px]:w-[150px]">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[18px] font-[400]">
								Not verified
							</p>
						</div>
					</Wrapper.Box>
					<Wrapper.Box gap={'8px'} ai={'center'}>
						<img
							src={Location}
							width={25}
							height={25}
							style={{ margin: '0 0 0 10px' }}
						/>

						<div className="w-[180px] overflow-hidden max-[400px]:w-[150px]">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[18px] font-[400]">
								{data?.regionName || 'Toshkent'}
							</p>
						</div>
					</Wrapper.Box>
					<Wrapper.Box gap={'8px'} ai={'center'}>
						<img
							src={Coin}
							width={25}
							height={25}
							style={{ margin: '0 0 0 10px' }}
						/>

						<div className="w-[180px] overflow-hidden max-[400px]:w-[150px]">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[18px] font-[400]">
								{data?.expectedSalary
									? `${data?.expectedSalary} $`
									: 'Not found'}
							</p>
						</div>
					</Wrapper.Box>
				</Wrapper.Box>
			</Wrapper.Box>
		</Wrapper.CardBox>
	);
};

export default CardEmployee;
