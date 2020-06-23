import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactFormTypeA({
  action,
  title,
  colWidth,
  btnRadius,
  btnSize,
  btnTitle,
  formFields,
  id,
}) {
  return (
    <div className={colWidth} key={id}>
      <h3>{title}</h3>
      <Form action={action}>
        <Form.Row>
          {formFields.map((field) => {
            if (field.required) {
              return (
                <Form.Group key={field.id} className="col-12" controlId={field.name}>
                  <Form.Control
                    as={field.as}
                    rows="4"
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                  />
                </Form.Group>
              );
            }
            return (
              <Form.Group key={field.id} className="col-12" controlId={field.name}>
                <Form.Control
                  as={field.as}
                  rows="4"
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                />
              </Form.Group>
            );
          })}

          <Button type="submit" className={`${btnRadius} ${btnSize}`}>
            {btnTitle}
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default ContactFormTypeA;
