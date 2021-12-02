import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

export default function CustomTextField({ name, label }){
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
        <Controller
            name={name}
            control={control}
            render = {({ field }) => (
                <TextField
                    fullWidth
                    label={label}
                    required
                />
            )}
            error={isError}
        />
        </Grid>
    )
}