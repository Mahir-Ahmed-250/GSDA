import React from 'react';
import ClassRoomCourses from '../ClassroomCourses/ClassroomCoursesAll/ClassRoomCourses';
import ELearningCourses from '../E-learningCourses/E-learningCoursesAll/ELearningCourses';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBannerCard from '../HomeBannerCard/HomeBannerCard';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeBannerCard></HomeBannerCard>
            <ELearningCourses></ELearningCourses>
            <ClassRoomCourses></ClassRoomCourses>
        </div>
    );
};

export default Home;