export const getUser = () => {
  const dataEmail = localStorage.getItem('email');
  const dataToken = localStorage.getItem('token');
  const dataId = localStorage.getItem('id');

  const email = dataEmail ? JSON.parse(dataEmail) : '';
  const token = dataToken ? JSON.parse(dataToken) : '';
  const id = dataId ? JSON.parse(dataId) : '';
  
  return {
    email,
    token,
    id,
  };

}