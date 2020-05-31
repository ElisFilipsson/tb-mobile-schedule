import React, { useEffect, useState } from 'react';
import PatientService from "../shared/mockPatientService";
import { useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";

const usePatient = () => {
    const service = new PatientService();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [patient, setPatient] = useState(null);

    const loadPatient = async (hash) => {
        setIsLoading(true);
        try {
            const fetchedPatient = await service.getPatient(hash);
            setPatient(fetchedPatient);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            history.push(routes.catchAll);
        }
    };

    const getPatient = () => {
        return patient;
    };

    const updateContactsForPatient = async (hash, firstName, cellphone) => {
        setIsUpdating(true);
        const updatedPatient = await service.updatePatient({hash, firstName, cellphone});
        setPatient(updatedPatient);
        setIsUpdating(false);
    };

    return {
        isLoading,
        isUpdating,
        getPatient,
        loadPatient,
        updateContactsForPatient
    };
};

export default usePatient;