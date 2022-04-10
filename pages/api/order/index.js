import connectDB from "../../../utils/connectDB"
import Orders from "../../../models/orderModel"
import auth from "../../../middleware/auth"
import Products from "../../../models/productModel"

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createOrder(req, res)
            break;
        case "GET":
            await getOrders(req, res)
            break;
    }
}

const getOrders = async(req, res) => {
    try{
        const result = await auth(req, res)

        let orders;
        if(result.role !== "admin"){
            orders = await Orders.find({user: result.id}).populate("user", "-password")
        }else{
            orders = await Orders.find().populate("user", "-password")
        }

        res.json({orders})

    }catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createOrder = async (req, res) => {
     try{
         const result = await auth(req, res)
         const { name, email, address, mobile, cart, total } = req.body

         const newOrder = new Orders({
             user: result.id, name, email, address, mobile, cart, total
         })

         cart.filter(item => {
             return sold(item._id, item.quantity, item.inStock, item.sold)
         })

         await newOrder.save()

         res.json({
             msg: "Pedido exitoso! Proceda a comunicarse con nosotros.",
             newOrder
            })

     }catch (err) {
         return res.status(500).json({err: err.message})
     }
}

const sold = async (id, quantity, oldInStock, oldSold) => {
    await Products.findByIdAndUpdate({_id: id}, {
        inStock: oldInStock - quantity,
        sold: quantity + oldSold
    })
}