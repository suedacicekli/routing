import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';
import './styles.css';
function Contact() {

    const { handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: async (values, bag) => {
            await new Promise((res) => { setTimeout(res, 1000) })
            //console.log(values);
            //console.log(bag)

            if (values.email === "test@test.com") {
                return bag.setErrors({ email: "Bu mail adresi zaten kullanılıyor" })
            }

            bag.resetForm();
        },
        // validationSchema: validationSchema,
        validationSchema,

    })



    return (
        <div>
            <section>

                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            placeholder="Jane"
                            value={values.firstName}
                            disabled={isSubmitting}
                            onChange={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                        />
                        {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={values.lastName}
                            disabled={isSubmitting}
                            onChange={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                        />
                        {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                            value={values.email}
                            disabled={isSubmitting}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && touched.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message.."
                            type="text"
                            value={values.message}
                            disabled={isSubmitting}
                            onChange={handleChange('message')}
                            onBlur={handleBlur('message')}
                        />
                        {errors.message && touched.message && <div className="error">{errors.message}</div>}
                    </div>
                    <button className="button-38" type="submit" disabled={isSubmitting}>Submit</button>

                </form>

            </section>
        </div>

    )
}

export default Contact
