module.exports = {
    create: (req, res) => {
        const {property_name, address, city, state, zip, monthly_mortgage, desired_rent, image} = req.body;
        const db = req.app.get('db');
        
        let createdHouse = db.create_house(property_name, address, city, state, zip, monthly_mortgage, desired_rent, image)

        res.status(200).send(createdHouse)
    },
    read: (req, res) => {
        const db = req.app.get('db')
        const {property_name, address, city, state, zip, monthly_mortgage, desired_rent, image} = req.body
        
        let house = db.read_house([property_name, address, city, state, zip, monthly_mortgage, desired_rent, image]);
        
        house.then(function(result) {
            console.log(result)
        })
        
        res.status(200).send(house)
    }
}