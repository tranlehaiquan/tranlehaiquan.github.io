import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Testing() {
  const [name, setName] = useState('');
  function encode(data: { [key: string]: string }) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://quantran.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: 'quan',
      }),
    })
      .then(() => alert('thank u'))
      .catch((error) => alert(error));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Layout title="testing">
      <form data-netlify="true" method="post" onSubmit={handleSubmit}>
        <label>
          What order did the pizza give to the pineapple?
          <input value={name} type="text" onChange={handleInputChange} />
        </label>
        <input type="submit" />
      </form>
    </Layout>
  );
}
