import React from 'react';
import Form from '../../molecules/Form';
import Button from '../../atoms/button';
import FormInput from '../../atoms/formInput';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: any;
}

const FormWrapper: React.FC<Props> = (props) => {
  const { handleChange, handleSubmit, value } = props;
  return (
    <React.Fragment>
      <Form handleSubmit={handleSubmit}>
        <FormInput value={value} handleChagen={handleChange} />
        <Button type="submit">追加</Button>
      </Form>
    </React.Fragment>
  );
};

export default FormWrapper;
