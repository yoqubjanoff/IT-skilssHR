import React from 'react';
import { Wrapper } from './style';
import HeroSection from './HeroSection';
import Partners from './Partners';
import SearchEmploye from './SearchEmploye';
import Blogs from './Blogs';
import Footer from '../Footer';
const Home = () => {
	return (
		<Wrapper>
			<HeroSection />
			<Partners />
			<SearchEmploye />
			<Blogs />
			<Footer />
		</Wrapper>
	);
};

export default Home;
