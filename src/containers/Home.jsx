import React from 'react'
import {Formik,Form,Field} from 'formik';
import { NavLink } from 'react-router-dom';



const Home = () => {


  return (
    <div className='homePage'>

<h1>Defining School</h1>

<p> School is the place where we start our learning. Apart from learning to read, 
  write, and excel in academics, the school also teaches us valuable life lessons that
  we can incorporate in our daily lives.It is the place where the foundation of our 
  knowledge and morals are laid. So let’s look at some of the things that are worth
  remembering about our schools.All great men have been taught to read and write at their schools. 
  It is our school that endows us with the right values at an early age. We teach a 
  set of strong moral values that serve us later in our lives. School life is the 
  period that makes up most of your childhood memories. We learn to laugh, cry, share,
  and support by co-habiting with our classmates. Schools are the framework that builds
   our moral characters and serves as a pathway that we must follow to achieve our dreams.
</p>

<h2>Type of school</h2>
 <p>In Canada, it’s the law that children go to school. Depending on the province or 
  territory, they can start primary school as young as 4 years old and finish secondary
   school when they’re 18 years old.

</p>

<h1>Fill your information</h1>

<Formik>
      <Form className='formSection'>
          <Field type="text" placeholder="Name" />
          <Field type="number" placeholder="phone No" />
          <Field type="text" placeholder="Email Id" />
      </Form>

</Formik>
<h2>Education System</h2>
<p>
Up until 1976, education policies and implementation were determined legally by each of 
India's constitutional states. The 42nd amendment to the constitution in 1976 made
 education a 'concurrent subject'. From this point on the central and state governments 
 shared formal responsibility for funding and administration of education. In a country
  as large as India, now with 28 states and eight union territories, this means that the 
  potential for variations between states in the policies, plans, programs and initiatives
   for elementary education is vast. Periodically, national policy frameworks are created 
   to guide states in their creation of state-level programs and policies. State governments 
   and local government bodies manage the majority of primary and upper primary schools 
   and the number of government-managed elementary schools is growing. Simultaneously 
   the number and proportion managed by private bodies is growing. In 2005-6 83.13% of
    schools offering elementary education (Grades 1–8) were managed by government and 
    16.86% of schools were under private management (excluding children in unrecognised 
    schools, schools established under the Education Guarantee Scheme and in alternative 
    learning centers). Of those schools managed privately, one third are 'aided' and two 
    thirds are 'unaided'. Enrolment in Grades 1–8 is shared between government and privately
     managed schools in the ratio 73:27. However in rural areas this ratio is higher 
     (80:20) and in urban areas much lower (36:66).[8]


</p>
<h3>More Information</h3>

      <NavLink to="/About">
            <span className="btn-get-started scrollto">Let started</span>
      </NavLink>
    
    

    </div>
  )
}

export default Home;
