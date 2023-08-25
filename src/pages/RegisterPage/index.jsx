import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
const RegisterPage = () => {


    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })
    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    }

    const onSubmit = (values) => {
        // console.log()
        axios.post(' https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', values)
            .then((response) => {
                console.log(response.data)
                setRequestResponse({
                    textMessage: response.data.message,
                    alertClass: 'alert alert-success'
                })
            }, (error) => {
                console.log(error)

                setRequestResponse({
                    textMessage: error.response.data.message,
                    alertClass: 'alert alert-danger'
                })
            })
            .catch(error => console.log(error))
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("first Name is required"),
        email: Yup.string().required("email is required").email("email should be a valid email"),
        mobile: Yup.string().required("mobile is required"),
        password: Yup.string().required("password is required").min(6, "password must be 6 characters long")
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })


    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                        <div className={requestResponse.alertClass}>
                            {requestResponse.textMessage}
                        </div>
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName"
                                    values={formik.values.firstName}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} id="firstName"
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : "form-control"}
                                />
                                {formik.errors.firstName && formik.touched.firstName ? (<small className='text-danger'>
                                    {formik.errors.firstName}</small>) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : "form-control"}
                                    name="email"
                                    values={formik.values.email}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" />
                                {formik.errors.email && formik.touched.email ? (<small className='text-danger'>
                                    {formik.errors.email}</small>) : null}

                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text"
                                    className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : "form-control"}
                                    name="mobile"
                                    values={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="mobile" />
                                {formik.errors.mobile && formik.touched.mobile ? (<small className='text-danger'>
                                    {formik.errors.mobile}</small>) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text"
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : "form-control"}
                                    name="password"
                                    values={formik.values.password}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" />
                                {formik.errors.password && formik.touched.password ? (<small className='text-danger'>
                                    {formik.errors.password}</small>) : null}
                            </div>

                            <input type="submit" value="Register" className="btn btn-primary btn-block" disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p>Already Registered?  <Link to="/login">Click Here</Link></p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default RegisterPage