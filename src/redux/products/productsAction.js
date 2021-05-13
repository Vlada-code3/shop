
export const addProduct = (chair) => {
    console.log(chair);
    return {
    type: 'addProduct', payload: chair,
}};

export const deleteProduct = (id) => ({
    type: 'deleteProduct', payload: id,
});


