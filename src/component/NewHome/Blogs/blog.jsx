import React from 'react';
import { Wrapper } from './style';
import BlogTest from '../../../assets/img/blogTest.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const BlogComponent = ({ data }) => {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	return (
		<Wrapper.CardBlog onClick={() => navigate(`/blog/${data?.id}`)}>
			<Wrapper.CardBlogImage src={data?.blogPhotoUrl || BlogTest} />
			<Wrapper.Box gap={'16px'}>
				<Wrapper.Badge>
					<Wrapper.BadgeCircle />
					IT
				</Wrapper.Badge>
				<Wrapper.Badge>
					<Wrapper.BadgeCircle />
					{t('w51')}
				</Wrapper.Badge>
			</Wrapper.Box>
			<Wrapper.TrunCateBox style={{ height: '125px' }}>
				{/* <p className="TitleHead">Suspendisse sed</p> */}

				<p className="TitleBody">{data?.title}</p>
			</Wrapper.TrunCateBox>

			<Wrapper.Box jc={'end'} width="100%" style={{ height: '10px' }}>
				<p className="TitleBody">2 mins read</p>
			</Wrapper.Box>
		</Wrapper.CardBlog>
	);
};

export default BlogComponent;
