const myURL ='https://crudcrud.com/api/91d2d3f9978148e29030e5df602affbc';

export default class APIfile {
    static myGet = () => {          
        return fetch( myURL )
        .then (
            (res) => res.json()
        );
    }

    static myPost = (item) => {
        return fetch( myURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( item )
        }).then( (res) => res.json() );
    };

    static myDelete = (id) => {
        return fetch( `${myURL}/$(id)`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    static myPut = (id, newItem) => {
        return fetch( `${myURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newItem )
        });
    };
}