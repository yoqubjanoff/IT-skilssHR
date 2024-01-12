import React from 'react';
import { Wrapper } from './style';
import {
	GreenUserIcon,
	TojIcon,
	GreenBagIcon,
} from '../../generics/genericIcons';

import sharp1 from '../../../assets/icons/shapeWhy1.svg';
import sharp2 from '../../../assets/icons/shapeWhy2.svg';
import sharp3 from '../../../assets/icons/shapeWhy3.svg';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<Wrapper.BoxCard>
				<p className="my-[40px] text-[#18181B] text-[28px] font-[600] max-[450px]:text-[20px]">
					{t('w7')}
				</p>

				<Wrapper.Center>
					<Wrapper.CardWhy url={sharp1}>
						<TojIcon
							position="absolute"
							top={'32px'}
							right={'32px'}
							color="#000"
						/>
						<Wrapper.Column>
							<p className="text-[#18181B] text-[20px] font-[600] ">
								{t('w8')}
							</p>

							<p className="Desc">{t('w10')}</p>
						</Wrapper.Column>
					</Wrapper.CardWhy>

					<Wrapper.CardWhy url={sharp2}>
						<GreenBagIcon
							position="absolute"
							top={'32px'}
							right={'32px'}
							color="#000"
						/>
						<Wrapper.Column>
							<p className="text-[#18181B] text-[20px] font-[600] ">
								{t('w218')}
							</p>
							<p className="Desc">{t('w11')}</p>
						</Wrapper.Column>
					</Wrapper.CardWhy>

					<Wrapper.CardWhy url={sharp3}>
						<GreenUserIcon
							position="absolute"
							top={'32px'}
							right={'32px'}
							color="#000"
						/>
						<Wrapper.Column>
							<p className="text-[#18181B] text-[20px] font-[600] ">
								{t('w9')}
							</p>
							<p className="Desc">{t('w12')}</p>
						</Wrapper.Column>
					</Wrapper.CardWhy>
				</Wrapper.Center>
			</Wrapper.BoxCard>
		</Wrapper>
	);
};

export default HeroSection;
