import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleCourse = () => {
    const [singleCourse, setSingleCourse] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://globalskills.com.bd/api/overview/courses/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleCourse(data));
    }, [id])
    return (
        <div>
            <Card className='card'>
                <Card.Img src={`https://www.globalskills.com.bd/storage/Classroom%20courses/${singleCourse.classroom_course_image}`} />
                <Card.Body>
                    <h5 className='product-name'> {singleCourse.classroom_course_title}</h5>
                    <h6 className='product-price'>Price: </h6>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;