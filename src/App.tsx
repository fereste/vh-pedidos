import { Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import axios from 'axios';

const products = [
  { id: 1, name: 'Café' },
  { id: 2, name: 'Té' },
  { id: 3, name: 'Café con medialunas' },
];

function App() {
  const [product, setProduct] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const productId = Number(form.get('product'))
    setProduct(products.find(product => product.id === productId)?.name.toLowerCase() || '')

    axios.post(
      'http://localhost:3000/orders',
      { id: productId },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          Cafetería UNLaM
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="product-label" variant='outlined'>¿Qué querés pedir?</InputLabel>
              <Select
                name='product'
                labelId="product-label"
                id="product"
                label="¿Qué querés pedir?"
              >
                {products.map(product => (
                  <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type='submit' variant="contained" color="primary" fullWidth>
              Hacer pedido
            </Button>
            <Typography variant="body2">
              {product ? `Se pidió un ${product}` : '¡Hacé tu pedido!'}
            </Typography>
          </Stack>
        </form>
      </Container>
    </>
  )
}

export default App
