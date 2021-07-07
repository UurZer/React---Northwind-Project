import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";
import { useToasts } from "react-toast-notifications";
import ProductService from "../services/productService";
import { useSelector } from "react-redux";

export default function ProductAdd() {
  const { addToast } = useToasts();

  const { categories } = useSelector((state) => state.getCategories);

  const initialValues = {
    productName: "",
    unitPrice: 10,
    category: "",
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur "),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
    category: Yup.string().required("Lütfen category Seçiniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let productService = new ProductService();
          values.category = JSON.parse(values.category);

          productService.saveProduct(values).then((result) => {
            addToast(result.data.message, {
              appearance: result.data.success ? "success" : "error",
              autoDismiss: true,
            });
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, isSubmitting  }) => (
          <Form className="ui form" onSubmit={handleSubmit}>
            <div>
              <HrmsTextInput
                type="text"
                as="input"
                name="productName"
                placeholder="Ürün Adı"
              />
            </div>
            <div>
              <HrmsTextInput
                as="input"
                type="text"
                name="unitPrice"
                placeholder="Ürün Fiyatı"
              />
            </div>

            <div>
              <HrmsTextInput as="select" name="category">
                <option value="" disabled hidden>
                  Kategori Seçiniz
                </option>
                {categories.map((category) => (
                  <option
                    key={category.categoryId}
                    value={JSON.stringify(category)}
                  >
                    {category.categoryName}
                  </option>
                ))}
              </HrmsTextInput>
            </div>
            <Button
              type="submit"
              className="btn btn-main mt-3 btn-block text-light"
              disabled={!dirty || isSubmitting}
            >
              Kaydet
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
