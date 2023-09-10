function HeaderMenu({ logo }) {
    return (
            <div className="menu">
                <div>
                    {logo.map((image, index) => 
                <img className="logoView" src={image.img} key={index} />
                )}
                </div>
                <div className="menuName">Anastasia Taratynova Bakery</div>
                <div className="menu">
                    <div><a className="menuLinks" href="">Cakes</a></div>
                    <div><a className="menuLinks" href="">Others</a></div>
                    <div><a className="menuLinks" href="">Payment</a></div>
                    <div><a className="menuLinks" href="">Contacts</a></div>
                </div>
            </div>
    )
}

export default HeaderMenu;