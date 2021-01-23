//will get the categorgy name, image, and styling info and create 4 category cards

const CategoriesList = () => {
    ///profit??
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      
      console.log(groupBy(['one', 'two', 'three'], 'length'));
}

export default CategoriesList;