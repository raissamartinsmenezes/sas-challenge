const getCategories = () => 
    fetch('https://opentdb.com/api_category.php')
    .then((data) => data);

export default getCategories;