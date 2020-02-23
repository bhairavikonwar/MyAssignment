export default {
  title: 'Assignment',
};

export const Users = () => '<h1>Manage Users</h1>';

export const Button = () => {
  const btn = document.createElement('input');
  btn.type = 'input';
  btn.innerText = 'Add Users';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
