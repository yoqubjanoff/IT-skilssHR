import React from 'react';
import { Wrapper } from './style';
import BlogTest from '../../../assets/img/pdp.png';
const Cource = ({ data }) => {
	return (
		<Wrapper.CardCource href={`https://${data?.redirectUrl}`} target="_blank">
			<Wrapper.CourseBadge>{data?.courseOwner}</Wrapper.CourseBadge>
			<Wrapper.CourceImage src={data?.attachment?.fileURL || BlogTest} />

			<Wrapper.TrunCateBox>
				<p className="TitleHead">{data?.courseName}</p>
				<p className="TitleBody" style={{ height: '80px' }}>
					{data?.description}
				</p>
			</Wrapper.TrunCateBox>
		</Wrapper.CardCource>
	);
};

export default Cource;
