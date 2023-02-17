import { wrap } from 'module'
import { styled } from '..'

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 640,

  h1: {
    fontSize: '1.5rem',
    color: '$gray100'
  },

  p: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1.25rem',
    color: '$gray300',
    textAlign: 'center',
    gap: '0.55rem',
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
  marginBottom: '4rem',
  width: 580,
  height: 420,
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
