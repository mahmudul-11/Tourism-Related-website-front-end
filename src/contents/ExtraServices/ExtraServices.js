import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ExtraService from '../ExtraService/ExtraService';

const ExtraServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/extraServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])
    if (loading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="danger" />
        </div>
    }
    return (
        <div className='mx-3'>
            <h1 className='fw-bolder text-success text-center pb-4'>Our Extra Services</h1>
            <Row>
                {
                    services.map(item => <ExtraService key={item._id} item={item}></ExtraService>)
                }
            </Row>
        </div>
    );
};

export default ExtraServices;