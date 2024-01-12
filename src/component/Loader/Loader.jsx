import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
export const Loader = () => {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Spin
				indicator={
					<LoadingOutlined
						style={{
							fontSize: 62,
							color: '#9ec8fc',
						}}
						spin
					/>
				}
			/>
		</div>
	);
};
