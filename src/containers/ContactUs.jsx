import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from "yup";
import { useState } from 'react';


const ContactUs = () => {

 const Teamprofile = [
    
{id:1, image:require("../images/profile-1.jpg"), name:"ram", desgination:"artist"},
 {id:2, image:require("../images/profile-2.jpg"), name:"sita", desgination:"painter"},
 {id:3, image:require("../images/profile-1.jpg"), name:"ram", desgination:"artist"},
 {id:4, image:require("../images/profile-2.jpg"), name:"sita", desgination:"painter"}

  ];
 const [user, setuser] = useState(Teamprofile);

  const registration = {
    name: "",
    email: "",
    password: "",
    mobileno :"",
  };

 const schema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    email: Yup.string().required("Please Enter Email"),
    password: Yup.string().required("Please Enter Password"),
    mobileno: Yup.string().required("Please Enter Mobile No."),
  });

  const handleSubmit = (values) => {  
    console.log("form values", values);
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      mobileno: values.mobileno,
    };
    alert(payload.email + payload.password);

  };


  return (
 <div>

<section id="appointment" className="appointment section-bg">
      <div className="container">

            <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
  
  <Formik initialValues={registration}
          validationSchema={schema}
          onSubmit={handleSubmit}>

         <Form >
          <div className="row">
          <div className="col-md-4 form-group mt-3">
            <Field  type="text" className="form-control" placeholder="username"  name="name"/>
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="name"
                  ></ErrorMessage>
 
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field type="text" class="form-control" placeholder="emailId" name="email" />
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="email"
                  ></ErrorMessage>
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="phone" type="text" class="form-control" placeholder="phone" />
            
            </div>
            </div>
       <div className="row">

       <div className="col-md-4 form-group mt-3">
            <Field name="Appointment" type="text" class="form-control" placeholder="Appointment" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Date" type="text" class="form-control" placeholder="Date" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Doctor" type="text" class="form-control" placeholder="Doctor" />
           </div>
    
           <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
        </div>

</div>

 </Form>


    </Formik>

    <h2>Our Faculties</h2>


    <div className='row'>
    {user.map ( (item, index) =>( 

        <div className='col-md-3' key={index}>
          <div class="card" >
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.desgination}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
         </div>
      </div>
    ))}
    
      {/* <div className='col-md-3'>
  <div className='card'>
    <img src='profile-2.jpg' className='card-img-top' alt=''/>
      <div>
        <h5 className='card-title'>sita</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      <a href='#' className='btn btn-primary'>More Details</a>
      </div>
 </div>
 </div>

 <div className='col-md-3'>
          <div class="card" >
      <img src="./profile-1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">ram</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
         </div>
      </div>
    
      <div className='col-md-3'>
  <div className='card'>
    <img src='profile-2.jpg' className='card-img-top' alt=''/>
      <div>
        <h5 className='card-title'>sita</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      <a href='#' className='btn btn-primary'>More Details</a>
      </div>
 </div>
 </div> */}


     </div>
    
    
    </div>
    </section>

    



        
 </div>
  )
}

export default ContactUs