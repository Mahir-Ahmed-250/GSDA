import React from 'react';
import { Card } from 'react-bootstrap';
import './PracticeExam.css'
const PracticeExams = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div className='practice-exam-heading-text container'>
                Practice Exam
                <hr style={{ width: "50%", margin: "auto" }} />
                <br />
                <div class="row">
                    <div className='col-lg-6'>
                        <Card >
                            <Card.Body>
                                <img className='w-100' src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                                <p>Prince 2</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <Card >
                            <Card.Body>
                                <img className='w-100' src="https://www.globalskills.com.bd/storage/courses/1647242736_1643872118_PRINCE2__logo_.png_700,430.png" alt="" />
                                <p>Prince 2</p>
                            </Card.Body>
                        </Card>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default PracticeExams;