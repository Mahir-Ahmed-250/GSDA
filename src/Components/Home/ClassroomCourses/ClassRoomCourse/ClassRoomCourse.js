import React from 'react';
import { Card } from 'react-bootstrap';

const ClassRoomCourse = ({ classroomCourses }) => {
    const { classroom_course_title, classroom_course_image, training_fee } = classroomCourses;
    return (
        <div>

            <Card>
                <Card.Body>
                    <Card.Img src={`https://www.globalskills.com.bd/storage/Classroom%20courses/${classroom_course_image}`} />

                    <h5 className=''> {classroom_course_title}</h5>

                    <p className="product-price">Price: {training_fee}৳</p>
                    {/* <Link to={`/products/${_id}`}><Button className='btn btn-dark'>Buy Now!</Button></Link> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClassRoomCourse;