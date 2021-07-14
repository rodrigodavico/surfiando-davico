import { getFirestore } from './Firebase/Firebase'

const saveOrder = (order) => {
    const db = getFirestore()
    const orders = db.collection("orders")

    return orders.add(order).then(({id}) => {
        return id
    }).catch((error) => {
        console.log("Error saving order item!", error)
        return false
    })
}


export default saveOrder