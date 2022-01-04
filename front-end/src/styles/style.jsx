import tw from 'tailwind-styled-components';

export const Form = tw.form`
  bg-gray-100
  p-2 flex
  flex-col
  justify-center
  rounded-lg
`;

export const Base = tw.div`
  flex
  flex-col
  bg-yellow-800
  h-screen
  justify-center
  items-center
`;

export const Input = tw.input`
  rounded-lg
  p-2
  mt-1
`;

export const LoginBtn = tw.button`
  rounded-lg
  p-2
  mb-1
  ${({ disabled }) => (disabled ? 'bg-green-300' : 'bg-green-600')}
`;

export const RegisterBtn = tw.button`
  bg-gray-100
  border
  border-green-600
  rounded-lg
  p-2
  mt-1
`;

export const Alert = tw.div`
  bg-red-500
  p-2
  rounded-lg
`;
