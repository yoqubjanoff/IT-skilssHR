import React from 'react';
import CardStyle from './CardStyle';
import BookmarkSvg from '../../../assets/img/bookmark.svg';
import NotVerified from '../../../assets/img/NotVerified.svg';
import Check from '../../../assets/icons/check2.svg';
import LoactionSvg from '../../../assets/img/location.svg';
import MoneySvg from '../../../assets/img/money.svg';
import { UserIcon } from '../../generics/genericIcons';
import { Wrapper } from './CardStyle';
const HrCard = ({
	name,
	logoImg,
	proffesion,
	hasTicket,
	location,
	salary,
	detailedTestScore,
}) => {
	return (
		<CardStyle>
			<div className="headImg">
				<div className="imgItem">
					{logoImg ? (
						<img src={logoImg} alt="img" className="img-talent" />
					) : (
						<Wrapper.BoxImg>
							<UserIcon />
						</Wrapper.BoxImg>
					)}

					<div style={{ paddingLeft: '1em', maxWidth: '235px' }}>
						<Wrapper.TitleTruncate>{name}</Wrapper.TitleTruncate>
						<h6>{proffesion}</h6>
					</div>
				</div>
				<img src={BookmarkSvg} alt="bookmark" />
			</div>
			<div className="headCard">
				<div className="cardItem">
					{hasTicket ? (
						<img src={Check} alt="not verified" />
					) : (
						<img src={NotVerified} alt="not verified" />
					)}

					<h6>
						{hasTicket
							? `${detailedTestScore}%  test score: Verified candidate`
							: 'Not verified'}
					</h6>
				</div>
				<div className="cardItem">
					<img src={LoactionSvg} alt="location" />
					<h6>{location}</h6>
				</div>
				<div className="cardItem">
					<img src={MoneySvg} alt="money" />
					<h6>{salary ? `${salary} $` : 'Not reported'}</h6>
				</div>
			</div>
		</CardStyle>
	);
};

export default HrCard;
