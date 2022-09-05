import { useFormik } from 'formik'
import React from 'react'


const BigForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            born:'',
            gituser:'',
            date: '',
            phone: '',
            symptoms: '',
        },
        onSubmit: ( data ) => {
            console.log(data)
        }
    })
  return (
    <div>
        <form  onSubmit={formik.handleSubmit} >
        <h1 className='text-2xl text-center my-5'>Schedule an appointment</h1>
        <label className="label">
            <span className="label-text">What is your name?</span>
        </label>
        <input type="text" name='name' onChange={formik.handleChange} placeholder="Name" className="input input-bordered input-accent w-full max-w-xs"  />

        <label className="label">
            <span className="label-text">What is your email?</span>
        </label>
        <input type="email" name='email' onChange={formik.handleChange} placeholder="Email" className="input input-bordered input-accent w-full max-w-xs"  />
        <label className="label">
            <span className="label-text">Birth-day Date?</span>
        </label>
        <input type="date" name='born' onChange={formik.handleChange} placeholder="Date" className="input input-bordered input-accent w-full max-w-xs"  />
        <label className="label">
            <span className="label-text">Github user</span>
        </label>
        <input type="email" name='gituser' onChange={formik.handleChange} placeholder="@namegithub" className="input input-bordered input-accent w-full max-w-xs"  />

        <label className="label">
            <span className="label-text">Date?</span>
        </label>
        <input type="date" name='date' onChange={formik.handleChange} placeholder="Date" className="input input-bordered input-accent w-full max-w-xs"  />

        <label className="label">
            <span className="label-text">What is your phone?</span>
        </label>
        <input type="tel" name='phone' onChange={formik.handleChange} placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" />

        <label className="label">
            <span className="label-text">What is your Symptoms?</span>
        </label>
        <textarea className="textarea textarea-accent" onChange={formik.handleChange} name='symptoms' placeholder="Symptoms"></textarea>
        <div className="divider"></div>
        <button  type='submit' className="btn btn-primary btn-success">Add</button>
        <div className="divider"></div>
        <button  type='submit' className="btn btn-primary btn-warning ">Save</button>
    </form>
    </div>
  )
}


export default BigForm