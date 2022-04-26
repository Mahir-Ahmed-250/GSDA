import React from 'react';
import { Card } from 'react-bootstrap';

const ELearningCourse = ({ eLearningCourses }) => {
    const { course_title, course_image, regular_price } = eLearningCourses;
    return (
        <div>
            <Card className="course-card">
                <Card.Img src={`https://www.globalskills.com.bd/storage/courses/${course_image}`} />
                <Card.Body>
                    <p>{course_title}</p>
                    <p >Price: {regular_price}৳</p>
                    {/* <Link to={`/products/${_id}`}><Button className='btn btn-dark'>Buy Now!</Button></Link> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ELearningCourse;