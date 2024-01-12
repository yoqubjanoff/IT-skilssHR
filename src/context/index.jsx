import React from 'react';
import { UserContexPovider } from './UserContext';
import { HrContextPovider } from './HrContext';
import { TestContexPovider } from './TestContext';
import { BlogContexPovider } from './BlogContext';
import { FaqContextPovider } from './FaqContext';
import { ZoomContexPovider } from './ZoomContext';
import { CoursesContextProvider } from './CoursesContext';
import { GeneralContexPovider } from './GeneralContext';
const MainContexProvider = ({ children }) => {
	return (
		<UserContexPovider>
			<GeneralContexPovider>
				<HrContextPovider>
					<TestContexPovider>
						<FaqContextPovider>
							<ZoomContexPovider>
								<CoursesContextProvider>
									<BlogContexPovider>{children}</BlogContexPovider>
								</CoursesContextProvider>
							</ZoomContexPovider>
						</FaqContextPovider>
					</TestContexPovider>
				</HrContextPovider>
			</GeneralContexPovider>
		</UserContexPovider>
	);
};

export default MainContexProvider;
