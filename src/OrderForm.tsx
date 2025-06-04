import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import axios from 'axios';

interface Product {
    id: number;
    name: string;
}

const products: Product[] = [
    { id: 1, name: 'Café' },
    { id: 2, name: 'Té' },
    { id: 3, name: 'Café con medialunas' },
];

export const OrderForm = () => {
    const [product, setProduct] = useState<Product>(products[0]);
    const [orderPlaced, setOrderPlaced] = useState('¡Hacé tu pedido!');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        axios.post('https://vh-serverless.azurewebsites.net/api/PlaceOrder', {
            id: product.id,
            productName: product.name,
        })
            .then(response => {
                console.log(response);
                setOrderPlaced('Se pidió un ' + product.name);
            })
            .catch(error => console.error(error));
    }

    const handleProductChange = (event: SelectChangeEvent<number>) => {
        const id = event.target.value;
        const product = products.find(product => product.id === id);
        if (product) {
            setProduct(product);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <FormControl fullWidth>
                    <InputLabel id="product-label" variant='outlined'>¿Qué querés pedir?</InputLabel>
                    <Select<number>
                        required
                        name='product'
                        labelId="product-label"
                        id="product"
                        label="¿Qué querés pedir?"
                        value={product.id}
                        onChange={handleProductChange}
                    >
                        {products.map(product => (
                            <MenuItem
                                key={product.id}
                                value={product.id}
                            >
                                {product.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type='submit' variant="contained" color="primary" fullWidth>
                    Hacer pedido
                </Button>
                <Typography variant="body1">
                    {orderPlaced}
                </Typography>
            </Stack>
        </form>
    );
}