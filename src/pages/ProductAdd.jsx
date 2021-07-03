import { Formik,Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";
export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 10,
  };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <HrmsTextInput name="productName" placeholder="Ürün Adı" />
        <HrmsTextInput name="unitPrice" placeholder="Ürün Fiyatı" />

        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
