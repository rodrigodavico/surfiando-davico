import { getFirestore } from './Firebase/Firebase'

const orderLoader = (id) => {
    const db = getFirestore()
    const orderCollection = db.collection("orders")
    const order = orderCollection.doc(id)
    return order.get().then((doc) => {
        if(doc.exists) {
            return {id: doc.id, ...doc.data()}
        } else {
            console.log('Order does not exist!')
            return {}
        }
    }).catch((error) => {
        console.log("Error searching order!", error)
        return {}
    })
}


export default orderLoader