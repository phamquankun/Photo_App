import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  // npm i --save react-select
  const initialValues = {
    title: '',
    categoryId:null,
  }
  return (
    <Formik initialValues={initialValues}>
      {formikProps => {
        const { values, error, touched } = formikProps;
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
              name="categoryID"
              component={SelectField}


              label="Category"
              placeholder="What's your photo category??"
              options={PHOTO_CATEGORY_OPTIONS}
            />


            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div><Button type="button" outline color="primary">Random a photo</Button></div>
              <div>
                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default PhotoForm;