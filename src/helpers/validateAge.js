const validateAge = (dob) => {
  const today = new Date();
  const dateOfBirth = new Date(dob);
  const age = (today.getTime() - dateOfBirth.getTime()) / 31536000000;
  return age;
};

export default validateAge;
