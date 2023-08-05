// const Content = () => { //variable = export like variable, not function

//     const images = [
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_8.jpg',
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_6.jpg',
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_4.jpg',
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_7.jpg',
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_5.jpg',
//         'https://cake-time.ru/wp-content/uploads/2021/11/pre1_21.jpg'
//     ];

const Products = ({ item }) => {
    return (
        // <div >
        //     <h1 className="titleContent">Cakes gallery</h1>
        //     <div className="content">
        //         {images.map((imageUrl, index) => (
        //             <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        //         ))}
        //     </div>
        // </div>
        <div className="content">
            {item.map((product) => (
                <div key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.describe}</p>
                </div>
            ))}
        </div>
    );
};
export default Products;