


function CategoryCard(props){
    let category = props.category
    let logo = props.logo
    return(
        <>
            <div className="CatCard">
                <div className="CatLogo">
                    <img src={logo} className="logo"/>
                </div>
                <h3>{category}</h3>
            </div>
        </>
    );



}
export default CategoryCard




