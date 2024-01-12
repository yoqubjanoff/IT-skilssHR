import React, { useState, useRef } from 'react';
import { Container, Icon, Selection } from './style';
const Dropdown = ({
	onClick,
	width,
	margin,
	icon,
	disabled,
	options,
	title,
	value,
}) => {
	const selectRef = useRef('');
	const [open, setOpen] = useState(false);

	const onBlur = () => {
		setOpen(false);
	};
	const onClickSelection = (e) => {
		e.stopPropagation();
	};
	const [val, setVal] = useState('');
	const [select, setSelect] = useState('');
	const onClickItem = (value, id) => {
		setVal(value);
		setOpen(false);
		setSelect(id);
		onClick && onClick(value);
	};
	const onClick2 = (e) => {
		setOpen(!open);
		e?.stopPropagation();
	};
	return (
		<Container
			onClick={(e) => !disabled && onClick2(e)}
			width={width}
			margin={margin}
			disabled={disabled}
			tabIndex={0}
			onBlur={onBlur}
		>
			{val ? val : title ? title : value ? value : 'Select'}
			<Selection
				open={open ? 'true' : undefined}
				onClick={(e) => onClickSelection(e)}
				ref={selectRef}
			>
				{options?.length > 0 ? (
					options.map(({ name, id }) => {
						return (
							<Selection.Item
								open={open ? 'true' : undefined}
								key={id}
								onClick={() => onClickItem(name, id)}
								active={select === id ? 'true' : undefined}
							>
								{name}
							</Selection.Item>
						);
					})
				) : (
					<Selection.Item1 onClick={() => setOpen(false)}>
						No data
					</Selection.Item1>
				)}
			</Selection>
			<Container.Icon className="IconCon" icon={icon}>
				{icon ? (
					icon
				) : open ? (
					<Icon.Down open={open ? 'true' : undefined} />
				) : (
					<Icon.Down open={open ? 'true' : undefined} />
				)}
			</Container.Icon>
		</Container>
	);
};

export default Dropdown;

// import { PlusIcon } from '@styledIcons';
// import { EditIcon, DeleteIcon } from '@styledIcons';
