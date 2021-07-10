import { getFirestore } from './Firebase/Firebase'

const itemsLoader = (category) => {
    const db = getFirestore()
    
    let itemCollection = db.collection("items").limit(20)
    if(category) {
        itemCollection = itemCollection.where('category', '==', parseInt(category))
    }

    return itemCollection.get().then((qSnapshot) => {
        return qSnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        })
    }).catch((error) => {
        console.log("Error searching items!", error)
        return []
    })
}


export default itemsLoader




