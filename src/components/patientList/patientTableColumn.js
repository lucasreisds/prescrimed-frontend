import React from 'react';
import DeletePatient from '../../services/ServicePatients/deletePatient';
import formattedDate from '../../utils/formattedDate';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import { Link } from 'react-router-dom';


const PatientTableColumn = ({ patient }) => {

    const deletePatient = async (id) => {
        await DeletePatient(id);
    }

    return (
        <tr>
            <td> <label htmlFor="nome">{patient.Nome} </label></td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{formattedDate(patient.Nascimento)}</td>
            <td className="bank-actions"> <Link to={`/editarPaciente/${patient.IdPaciente}`}><img src={updateIcon} /></Link>  <button onClick={() => deletePatient(patient.IdPaciente)}><img src={deleteIcon} /></button> </td>
        </tr>
    );
}
export default PatientTableColumn;