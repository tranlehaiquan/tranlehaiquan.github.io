import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { encode } from '../../utils/encode';
import classes from './index.module.scss';

const PageTemplate: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().trim().max(40).required('Cho mình biết tên :3'),
      email: Yup.string().email().trim().max(40).required('Cho mình xin địa chỉ :3'),
      message: Yup.string().trim().max(100),
    }),
    onSubmit: () => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formik.values }),
      })
        .then(() => alert('Thank you!'))
        .catch((error) => alert(error));
    },
  });
  const { touched, errors } = formik;

  return (
    <form onSubmit={formik.handleSubmit} name="contact" data-netlify="true">
      <div className={classes.row}>
        <label>Tên bạn:</label>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
        <span className={classes.error}>{touched.name && errors.name && errors.name}</span>
      </div>
      <div className={classes.row}>
        <label>Email:</label>
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <span className={classes.error}>{touched.email && errors.email && errors.email}</span>
      </div>
      <div className={classes.row}>
        <label>Lời nhắn:</label>
        <textarea name="message" value={formik.values.message} onChange={formik.handleChange} maxLength={100} />
      </div>
      <div className={classes.row}>
        <button className={classes.button} type="submit">Gửi</button>
      </div>
    </form>
  );
};

export default PageTemplate;
