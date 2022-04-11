import React from 'react';
import AccreditationAuthority from '../AccreditationAuthority/AccreditationAuthority';
import ClassRoomCourses from '../ClassroomCourses/ClassroomCoursesAll/ClassRoomCourses';
import ELearningCourses from '../E-learningCourses/E-learningCoursesAll/ELearningCourses';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBannerCard from '../HomeBannerCard/HomeBannerCard';
import PracticeExams from '../PracticeExams/PracticeExamsAll/PracticeExams';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeBannerCard></HomeBannerCard>
            <ELearningCourses></ELearningCourses>
            <ClassRoomCourses></ClassRoomCourses>
            <PracticeExams></PracticeExams>
            <AccreditationAuthority></AccreditationAuthority>
        </div>
    );
};

export default Home;