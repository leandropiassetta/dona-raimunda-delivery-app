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

export const Nav = tw.nav`
  bg-stone-700
  flex
  py-3
  px-32
  justify-between
`;

export const NavBtn = tw.button`
  bg-gray-200
  rounded-lg
  p-2
  m-1
`;

export const Section = tw.section`
  flex
  bg-gray-300
  rounded-lg
`;

export const Products = tw.div`
  pl-1
  py-2
  flex
  my-2
  mx-32
  bg-white
  flex-wrap
  rounded-lg
`;

export const ProductCard = tw.div`
  bg-gray-100
  rounded-lg
  m-1
  max-w-xs
  max-h-96
  p-2
`;

export const ProductImg = tw.div`
  flex
  h-4/5
  bg-white
  w-full
  justify-center
`;
