import React, { useState, useRef, useEffect } from 'react';
import { Container, Icon, Selection, Wrapper } from './style';
import Uz from '../../../assets/icons/uzFlag.svg';
import En from '../../../assets/icons/enFlag.svg';
import Ru from '../../../assets/icons/ruFlag.svg';
const Select2 = ({
	onClick,
	width,
	margin,
	icon,
	disabled,
	options,
	title,
	header,
	value,
	onChange,
	suffix,
	error,
	br,
	height,
	radius,
	language,
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
	const [valImg, setValImg] = useState('');
	const [select, setSelect] = useState('');
	const onClickItem = (value) => {
		setVal(value?.caption);
		value?.img && setValImg(value?.img);
		setOpen(false);
		setSelect(value?.id);
		onChange && onChange(value);
	};

	useEffect(() => {
		if (language) {
			if (value === 'uz') {
				setValImg(Uz);
				setVal('O`zb');
			} else if (value === 'ru') {
				setValImg(Ru);
				setVal('Rus');
			} else if (value === 'en') {
				setValImg(En);
				setVal('Eng');
			}
		}
	}, []);
	return (
		<Wrapper width={width} error={error} language={language}>
			{header && <Container.Header>{header}</Container.Header>}

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
				language={language}
			>
				{suffix && (
					<Icon height={height} margin={margin}>
						{suffix}
					</Icon>
				)}
				{value ? (
					<Container.Placeholder>
						{value ? (val ? val : value) : value}{' '}
						{valImg && (
							<img
								src={valImg}
								width={35}
								height={25}
								style={{ minWidth: '35px' }}
							/>
						)}
					</Container.Placeholder>
				) : val ? (
					<Container.Placeholder>
						{val}{' '}
						{valImg && (
							<img
								src={valImg}
								width={35}
								height={25}
								style={{ minWidth: '35px' }}
							/>
						)}
					</Container.Placeholder>
				) : (
					<Container.Placeholder>{title}</Container.Placeholder>
				)}
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
									{opt?.img && <img src={opt?.img} width={35} height={25} />}
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
					{!language &&
						(icon ? (
							icon
						) : open ? (
							<Icon.Down open={open ? 1 : 0} />
						) : (
							<Icon.Down open={open ? 1 : 0} />
						))}
				</Container.Icon>
			</Container>
			{error && <Wrapper.Error>{error}</Wrapper.Error>}
		</Wrapper>
	);
};

export default Select2;
