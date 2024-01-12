import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { SidebarData } from '../../utils/admin';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<Wrapper>
			{SidebarData?.map(
				({ title, icon, path, hidden, disable }, i) =>
					!hidden && (
						<Wrapper.Flex
							className="FlexBox"
							onClick={() => !disable && navigate(path)}
							active={pathname === path}
							key={i}
							disable={disable ? 1 : 0}
						>
							<Wrapper.Title>{title}</Wrapper.Title>
						</Wrapper.Flex>
					),
			)}
		</Wrapper>
	);
};

export default Sidebar;
