import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	pdf,
	Font,
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import moment from 'moment';
import { Toast } from '../../component/generics';
import Src from '../../assets/fonts/Mulish-Regular.ttf';
import Bold from '../../assets/fonts/Mulish-Bold.ttf';

Font.register({
	family: 'Roboto',
	src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});
Font.register({
	family: 'CustomFont',
	src: Src,
});
Font.register({
	family: 'CustomBold',
	src: Bold,
});
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderTop: '5px solid #2563EB',
		paddingTop: 15,
		paddingLeft: 15,
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},

	customTextName: {
		fontSize: 24,
		color: '#18181B',
		fontWeight: 700,
		fontFamily: 'CustomBold',
	},
	customTextDirection: {
		fontSize: 18,
		color: '#18181B',
		fontWeight: 400,
		marginBottom: 30,
		fontFamily: 'CustomFont',
	},
	customText: {
		fontSize: 11,
		color: '#18181B',
		fontWeight: 400,
		marginBottom: 10,
		fontFamily: 'CustomFont',
	},
	customHeaderRu: {
		fontSize: 11,
		color: 'rgba(24, 24, 27, 0.5)',
		fontWeight: 600,
		marginBottom: 10,
		letterSpacing: 2,
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
	},
	customHeaderRu2: {
		fontSize: 11,
		color: 'rgba(24, 24, 27, 0.5)',
		fontWeight: 600,
		marginBottom: 10,
		letterSpacing: 2,
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
	},
	customHeaderRu1: {
		fontSize: 11,
		color: 'rgba(24, 24, 27, 0.5)',
		fontWeight: 600,
		marginBottom: 10,
		letterSpacing: 2,
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
	},
	customHeader: {
		fontSize: 11,
		color: 'rgba(24, 24, 27, 0.5)',
		fontWeight: 600,
		marginBottom: 10,
		letterSpacing: 2,
		textTransform: 'uppercase',
		fontFamily: 'CustomBold',
	},
	customTitle: {
		fontSize: 12,
		color: '#18181B',
		fontWeight: 700,
		marginBottom: 10,
		marginRight: 20,
		fontFamily: 'CustomBold',
	},
	customLanguageBold: {
		fontSize: 12,
		color: 'rgba(18, 20, 53, 0.70)',
		fontWeight: 700,
		marginBottom: 10,
		fontFamily: 'CustomBold',
	},
	customLanguage: {
		fontSize: 12,
		color: 'rgba(18, 20, 53, 0.70)',
		fontWeight: 400,
		marginBottom: 10,
		fontFamily: 'CustomFont',
	},
	container: {
		flexDirection: 'row',
	},
});

export const DownloadResume = async (language, data, cancel) => {
	const pdfBlob = await pdf(
		<Document>
			<Page size="A4" style={styles.page}>
				<View
					style={{
						width: '70%',
						padding: 10,
					}}
				>
					<Text style={styles.customTextName}>{data?.firstName}</Text>
					<Text style={{ ...styles.customText, margin: '10px 0 20px 0' }}>
						{data?.aboutMe}
					</Text>
					{language === 'ru' ? (
						<Text style={styles.customHeaderRu}>образование</Text>
					) : (
						<Text style={styles.customHeader}>
							{language === 'uz' ? 'ta`lim' : 'education'}
						</Text>
					)}

					{data?.educationUserTalents?.map((v) => (
						<View style={{ marginBottom: 20 }}>
							<View style={styles.container}>
								<Text style={styles.customTitle}>{v?.direction}</Text>
								<Text style={styles.customText}>{v?.educationCenterName}</Text>
							</View>
							<View style={styles.container}>
								<Text style={styles.customText}>
									{`${moment(v?.startedDate).format('yyyy MMM')} -`}
								</Text>
								<Text style={styles.customText}>
									{`${moment(v?.endedDate).format('yyyy MMM')}`}
								</Text>
							</View>
							<Text style={styles.customText}>{v?.definition}</Text>
						</View>
					))}

					{language === 'ru' ? (
						<Text style={styles.customHeaderRu2}>Опыт</Text>
					) : (
						<Text style={styles.customHeader}>
							{language === 'uz' ? 'Tajriba' : 'Experience'}
						</Text>
					)}

					{data?.workExperiences?.map((v) => (
						<View style={{ marginBottom: 20 }}>
							<View style={styles.container}>
								<Text style={styles.customTitle}>{v?.companyName}</Text>
								<Text style={styles.customText}>{v?.position}</Text>
							</View>
							<View style={styles.container}>
								<Text style={styles.customText}>
									{`${moment(v?.startedDate).format('yyyy MMM')} -`}
								</Text>
								<Text style={styles.customText}>
									{`${moment(v?.endedDate).format('yyyy MMM')}`}
								</Text>
								<Text style={{ ...styles.customText, marginLeft: 10 }}>
									{v?.companyLocation}
								</Text>
							</View>
							<Text style={styles.customText}>{v?.description}</Text>
						</View>
					))}
				</View>
				<View
					style={{
						...styles.section,
						width: '30%',
					}}
				>
					<Text style={styles.customText}>{data?.email}</Text>
					<Text style={styles.customText}>{data?.phoneNumber}</Text>
					<Text style={{ ...styles.customText, marginBottom: '20px' }}>
						{data?.regionName}
					</Text>
					{language === 'ru' ? (
						<Text style={styles.customHeaderRu1}>Языки</Text>
					) : (
						<Text style={styles.customHeader}>
							{language === 'uz' ? 'Tillar' : 'Languages'}
						</Text>
					)}
					{data?.userLangLevels?.map((v) => (
						<Text style={styles.customLanguage}>{v?.langLevelCaption}</Text>
					))}
				</View>
			</Page>
		</Document>,
	).toBlob();

	const blobUrl = URL.createObjectURL(pdfBlob);
	saveAs(blobUrl, 'resume.pdf');
	Toast({
		type: 'success',
		message: 'Resume yuklandi !',
	});
	cancel();
};
