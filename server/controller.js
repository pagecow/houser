module.exports = {
    create: (req, res) => {
        console.log(req)
        const {property_name, address, city, state, zip, monthly_mortgage, desired_rent, image} = req.body;
        const db = req.app.get('db');
        
        let createdHouse = db.create_house(property_name, address, city, state, zip, monthly_mortgage, desired_rent, image)

        res.status(200).send(createdHouse)
    }
}