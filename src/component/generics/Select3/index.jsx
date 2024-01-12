import React, { useState, useRef, useEffect } from 'react';
import { Container, Icon, Selection, Wrapper } from './style';
const Select2 = ({
	onClick,
	width,
	margin,
	icon,
	disabled,
	options,
	header,
	value,
	onChange,
	suffix,
	error,
	br,
	height,
	radius,
}) => {
	const selectRef = useRef('');
	const [open, setOpen] = useState(false);
	const onClick2 = () => {
		onClick && onClick();
		setOpen(!open);
	};

	const onBlur = () => {
		setOpen(false);
	};
	const onClickSelection = (e) => {
		e.stopPropagation();
	};
	const [val, setVal] = useState('');
	const [select, setSelect] = useState('');
	const onClickItem = (value) => {
		setVal(value?.caption);
		setOpen(false);
		setSelect(value?.id);
		onChange && onChange(value);
	};
	useEffect(() => {
		setVal(value);
	}, [value]);

	return (
		<Wrapper width={width} error={error} margin={margin}>
			{header && (
				<Container.Header
					active={value ? 1 : open ? 1 : val ? 1 : 0}
					onClick={() => !disabled && onClick2()}
				>
					{header}
				</Container.Header>
			)}
			<Container
				onClick={(e) => !disabled && onClick2(e)}
				margin={margin}
				disabled={disabled}
				tabIndex={0}
				onBlur={onBlur}
				error={error}
				br={br}
				height={height}
				radius={radius}
				active={value ? 1 : open ? 1 : val ? 1 : 0}
			>
				{suffix && (
					<Icon height={height} margin={margin}>
						{suffix}
					</Icon>
				)}
				{value ? (
					<Container.Value>{value}</Container.Value>
				) : val ? (
					<Container.Placeholder>{val}</Container.Placeholder>
				) : null}
				<Selection
					open={open ? 1 : 0}
					onClick={(e) => onClickSelection(e)}
					ref={selectRef}
					height={height}
				>
					{options?.length > 0 ? (
						options.map((opt, i) => {
							return (
								<Selection.Item
									open={open ? 1 : 0}
									key={i}
									onClick={() => onClickItem(opt)}
									active={select === opt?.id ? 1 : 0}
								>
									{opt?.caption}
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
						<Icon.Down open={open ? 1 : 0} />
					) : (
						<Icon.Down open={open ? 1 : 0} />
					)}
				</Container.Icon>
			</Container>
			{error && <Wrapper.Error>{error}</Wrapper.Error>}
		</Wrapper>
	);
};

export default Select2;
