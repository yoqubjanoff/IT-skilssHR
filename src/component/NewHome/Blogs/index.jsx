import React, { useEffect, useState } from 'react';
import { Wrapper, AntdButton } from './style';
import Blog from './blog';
import Cource from './course';
import WorkGirl from '../../../assets/img/christian.png';
import request from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import Line from '../../../assets/img/Banner lines.png';
import Star from '../../../assets/img/Banner Start.png';
import { useTranslation } from 'react-i18next';



const Blogs = () => {
	const [course, setCourse] = useState([]);
	const [blog, setBlog] = useState([]);
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const getCourse = async () => {
		try {
			const res = await request.get('base/courses');
			setCourse(res?.data?.data?.filter((v) => v.isActive));
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const getBlog = async () => {
		try {
			const res = await request.get('base/blogs');
			setBlog(res?.data?.data?.filter((v) => v.isActive));
		} catch (error) {
			console.error('Error:', error);
		}
	};
	useEffect(() => {
		getBlog();
		getCourse();
	}, []);
	return (
		<Wrapper id="blogs">
			<p> {t('w51')}</p>
			<Wrapper.Wrap>
				{blog?.map((v, i) => (
					<Blog data={v} key={i} />
				))}
			</Wrapper.Wrap>
			<Wrapper.Box
				style={{ flexDirection: 'column', margin: '150px 0 0 0' }}
				gap="16px"
				ai="center"
			>
				<p id="course">{t('w18')}</p>

				<p className="Desc">{t('w19')}</p>
			</Wrapper.Box>

			<Wrapper.Wrap style={{ margin: '0 0 120px 0', flexWrap: 'wrap' }}>
				{course?.map((v, i) => (
					<Cource data={v} key={i} />
				))}
			</Wrapper.Wrap>

			<Wrapper.WrapBlue style={{ margin: '0 0 80px 0' }}>
				<Wrapper.WrapBlueBox>
					<Wrapper.Box
						width={'495px'}
						style={{ flexDirection: 'column', position: 'relative' }}
					>
						<img
							src={Line}
							alt="Line"
							height={80}
							width={200}
							className="absolute right-[-152px] bottom-[20px] max-[1375px]:hidden"
						/>
						<img
							src={Star}
							alt="Star"
							height={30}
							width={30}
							className="absolute right-[-452px] top-[120px] max-[1375px]:hidden"
						/>
						<img
							src={Star}
							alt="Star"
							height={30}
							width={30}
							className="absolute right-[-15px] bottom-[-20px] max-[1375px]:hidden"
						/>
						<img
							src={Star}
							alt="Star"
							height={40}
							width={40}
							className="absolute right-[-400px] top-[15px] max-[1375px]:hidden"
						/>
						<p className="TitleBlue">{t('w20')}</p>
						<p className="DescBlue">
							Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
							praesent pharetra quisque consectetur tellus elit. Suspendisse
							ultrices vitae at platea. Euismod pretium sit est etiam.
						</p>
						<AntdButton
							style={{ width: '133px' }}
							onClick={() => navigate('/register')}
						>
							<p className="btn">{t('w22')}</p>
						</AntdButton>
					</Wrapper.Box>
					<Wrapper.WrapBlueImg src={WorkGirl} />
				</Wrapper.WrapBlueBox>
			</Wrapper.WrapBlue>
		</Wrapper>
	);
};

export default Blogs;
