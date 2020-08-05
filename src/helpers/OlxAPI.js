const OlxAPI = {

    getProducts:(limit = 10) => {
        return new Promise ((resolve, reject) => {

            setTimeout(function() {
              const array = [
                  {title:'Produto 1', id: 123},
                  {title:'Produto 2', id: 456},
                  {title:'Produto 3', id: 789}
                ];  

                resolve (array);
            },2000);

        });
    }
};

export default OlxAPI;