import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AccreditationAuthority from '../AccreditationAuthority/AccreditationAuthority';
import Blogs from '../Blogs/Blogs';
import ClassRoomCourses from '../ClassroomCourses/ClassroomCoursesAll/ClassRoomCourses';
import ContactUs from '../ContactUs/ContactUs';
import ELearningCourses from '../E-learningCourses/E-learningCoursesAll/ELearningCourses';
import Events from '../Events/Events';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBannerCard from '../HomeBannerCard/HomeBannerCard';
import PracticeExams from '../PracticeExams/PracticeExamsAll/PracticeExams';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeBannerCard></HomeBannerCard>
            <ELearningCourses></ELearningCourses>
            <ClassRoomCourses></ClassRoomCourses>
            <PracticeExams></PracticeExams>
            <AccreditationAuthority></AccreditationAuthority>
            <Events></Events>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;