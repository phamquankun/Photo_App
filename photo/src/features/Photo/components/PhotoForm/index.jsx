import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import InputField from '../../../../custom-fields/InputField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import SelectField from '../../../../custom-fields/SelectField';
import * as Yup from 'yup'
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  // npm i --save react-select
  const {initialValues, isAddMode} = props; 
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number().required('This field is required').nullable(),
    photo: Yup.string().required('This field is required')

  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {formikProps => {
        const { values, error, touched, isSubmitting } = formikProps;
        console.log({ values, error, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}

              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}


              label="Category"
              placeholder="What's your photo category??"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? 'Add to album' : 'Update photo'}
              </Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default PhotoForm;