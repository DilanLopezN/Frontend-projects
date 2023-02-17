import { styled } from '..'

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 540,

  h1: {
    fontSize: '1.5rem',
    color: '$gray100'
  },

  p: {
    fontSize: '1.25rem',
    color: '$gray300',
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 538,
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
