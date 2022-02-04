import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {addInfoPage} from "../Reducer/DoctorRegister/index";
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';


const Page4 = () => {


    const [consultationFee, setConsultationFee] = useState("");
    const [departmentDoctorRegister, setDepartmentDoctorRegister] = useState(5);
    const [cityDoctorRegister, setCityDoctorRegister] = useState(1);
    const [ScientificCertificateDoctorRegister, setScientificCertificateDoctorRegister] = useState("");
    const [message, setMessage] = useState("");

    // ========================================
    const state = useSelector((state)=>{
return state.doctorRegReducer
    })
    const dispatch = useDispatch()
    const history=useNavigate()
    // ==================


    const nextButton = async ()=>{

        try{

           const res =  await dispatch(addInfoPage({consultationFee,departmentDoctorRegister,cityDoctorRegister,roleId:2,ScientificCertificateDoctorRegister}))
            
             console.log(state,res);

             const result = await axios.post("http://localhost:5000/doctors/",{

    fullName:state.doctorInfo.fullName,
    email:state.doctorInfo.email,
    password:state.doctorInfo.password,
    profileImage:state.doctorInfo.image,
    gender:state.doctorInfo.gender,
    Nationality:state.doctorInfo.Nationality,
    specialization:state.doctorInfo.specialization,
    phone:state.doctorInfo.phone,
    workingDays:state.doctorInfo.workingDays,
    address:state.doctorInfo.address,
    careersLicense:state.doctorInfo.careersLicense,
    waitingTime:state.doctorInfo.waitingTime,
    consultationFee:res.payload.consultationFee,
    departmentId:res.payload.departmentDoctorRegister,
    cityId:res.payload.cityDoctorRegister,
    roleId:2,
    ScientificCertificate:res.payload.ScientificCertificateDoctorRegister

             })
        }

        catch(err){

            console.log(err);
            setMessage("ther is something wrong ")

        }

    }


  return <div>

<input placeholder='CONSULTATION' type="text" className='consultationFeeDoctorRegister'onChange={(e)=>{
    setConsultationFee(e.target.value)
}} />

<select className='departmentDoctorRegister' defaultValue={5} onChange={(e)=>{

setDepartmentDoctorRegister(e.target.value)
}} >

<option value={1}>RADIOLOGY</option>
<option value={2}>LABORATORY</option>
<option value={3}>PHARMACY</option>
<option value={4}>SURGICAL</option>
<option value={5}>MEDICAL</option>
<option value={6}>PEDIATRIC</option>
<option value={7}>ORTHOPIDIC</option>
<option value={8}>OPHTHALMOLOGY</option>
<option value={9}>DEMATOLOGY</option>
<option value={10}>OB&GYN</option>
<option value={11}>DENTAL</option>
<option value={12}>PHYSIOTHERAPY</option>
<option value={13}>CARDIOLOGY</option>
<option value={14}>PHYCHIATRIC</option>
<option value={15}>NEUROLOGY</option>
<option value={16}>GENERAL DOCTOR</option>

</select>


<select className='cityDoctorRegister' onChange={(e)=>{
    setCityDoctorRegister(e.target.value)
}}>
<option value={1}>Amman</option>
<option value={2}>IRBID</option>
<option value={3}>ZARQA</option>
<option value={4}>MAFRAQ</option>
<option value={5}>AJLOUN</option>
<option value={6}>JERASH</option>
<option value={7}>MADABA</option>
<option value={8}>BALQA</option>
<option value={9}>KARAK</option>
<option value={10}>TAFILEH</option>
<option value={11}>MAAN</option>
<option value={12}>AQABA</option>


</select>
<input placeholder='CIENTIFIC CERTIFICATE' type="text" className='ScientificCertificateDoctorRegister' onChange={(e)=>{

setScientificCertificateDoctorRegister(e.target.value)
}} /> <br />

<button className='backButton' onClick={()=>{

history("/doctorsignup3")

}}>BACK</button>

<button onClick={nextButton}>SUBMIT</button>

{
    message?<p>{message}</p>:""
}


  </div>;
};

export default Page4;