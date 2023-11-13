import data from '../data.json'
export async function GET(){

  const productsFeatured = data.products.filter(product => product.featured)
  return Response.json(productsFeatured)
}