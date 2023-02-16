import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1100,
  margin: '0 auto'
})
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 540,
  border: '1px solid red',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '2rem',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',

    display: 'block',
    fontSize: '1.5rem',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '1.25rem',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: '0',
    borderRadius: 8,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5rem',

    '&:hover': {
      backgroundColor: '$green300'
    }
  }
})
