export const loginUser = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 1000);
  });
};