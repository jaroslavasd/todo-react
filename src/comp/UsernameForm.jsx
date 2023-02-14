import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export function UsernameForm() {
  const UsernameForm = () => {
    const [username, setUsername] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const isLowerCase = username === username.toLowerCase();
    const error = isLowerCase ? null : 'Username must be lower case';

    const handleSubmit = (event) => {
      event.preventDefault();
      setDisplayName(username);
    };

    const handleChange = (event) => {
      setDisplayName('');
      setUsername(event.target.value);
    };

    return (
      <div className="username-form">
        <Form onSubmit={handleSubmit}>
          <Stack direction="horizontal" gap={3}>
            <Button
              className="ms-auto"
              variant="primary"
              disabled={Boolean(error)}
              type="submit"
            >
              Submit
            </Button>
            <Form.Control
              placeholder="Your name"
              type="text"
              onChange={handleChange}
            />
          </Stack>

          {!Boolean(error) || (
            <Alert className="mt-3" variant="danger">
              {error}
            </Alert>
          )}
          {!Boolean(displayName) || (
            <Alert className="mt-3" variant="primary">
              Hello {displayName}
            </Alert>
          )}
        </Form>
      </div>
    );
  };

  return <UsernameForm />;
}
