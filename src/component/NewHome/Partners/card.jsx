import React from 'react';
import Arrow from '../../../assets/icons/arrow-right.svg';
// import Star from '../../../assets/icons/Star.svg';
import { Wrapper } from './style';
import { useNavigate } from 'react-router-dom';
const CardCategory = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Wrapper.CardBox
			onClick={() =>
				navigate(
					`/explore/?baseCaption=${data?.caption}&subDirectionId=${data?.id}`,
				)
			}
		>
			<Wrapper.CardIconBox>
				<img src={Arrow} alt="briefcase" width={20} height={20} />
			</Wrapper.CardIconBox>
			<p className="Title">{data?.caption}</p>
			<Wrapper.Box gap={'50px'}>
				<p className="Desc">{data?.count ? data?.count : 459} Talents</p>
			</Wrapper.Box>
		</Wrapper.CardBox>
	);
};

export default CardCategory;
