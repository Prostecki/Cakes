function Products ({ cakes }) {
    return (
    <div className="wrapper">
        <div className="content">
            {cakes.map((product) => (
                <div className="cakeCard" key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.describe}</p>
                </div>
            ))}
        </div>
    </div>
    );
};
export default Products;