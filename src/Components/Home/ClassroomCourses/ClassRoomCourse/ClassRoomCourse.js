import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ClassRoomCourse.css';

const ClassRoomCourse = ({ classroomCourses }) => {
    const { classroom_course_title, classroom_course_image, training_fee, id } = classroomCourses;

    return (
        <div>
            <Card className="course-card">
                <Card.Img src={`https://www.globalskills.com.bd/storage/Classroom%20courses/${classroom_course_image}`} />
                <Card.Body>
                    <p>{classroom_course_title}</p>
                    <p >Price: {training_fee}৳</p>
                    <Link to={`/classroom_courses/${id}`}><Button className='btn btn-dark'>Buy Now!</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClassRoomCourse;