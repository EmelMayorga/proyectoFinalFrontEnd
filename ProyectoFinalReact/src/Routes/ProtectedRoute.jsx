import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import GetAutenticacion from '../Services/GetAutenticacion';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
useEffect(() => {
const fetchKey = async () => {
    const data = await GetAutenticacion();
    if (data[0].key ==='true') {    
    }else{
        return navigate ("/Main")
    }
};
fetchKey();

},[])
    return children;
};

export default ProtectedRoute;