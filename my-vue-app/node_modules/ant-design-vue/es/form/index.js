import Form from './Form';
export { formProps } from './Form';
export { formItemProps } from './FormItem';
/* istanbul ignore next */

Form.install = function (app) {
  app.component(Form.name, Form);
  app.component(Form.Item.name, Form.Item);
  return app;
};

export default Form;