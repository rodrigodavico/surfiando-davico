import { getFirestore } from './Firebase/Firebase'

const itemLoader = (id) => {
    const db = getFirestore()
    const itemCollection = db.collection("items")
    const item = itemCollection.doc(id)
    return item.get().then((doc) => {
        if(doc.exists) {
            return {id: doc.id, ...doc.data()}
        } else {
            console.log('Item does not exist!')
            return {}
        }
    }).catch((error) => {
        console.log("Error searching item!", error)
        return {}
    })
}


export default itemLoader