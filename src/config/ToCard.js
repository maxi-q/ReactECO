import AddItem from '../config/AddItem.js'
import { httpFact } from '../config/Requests'
const ToCard = async(navigate, a) => {
    let PostID = a.GetPostID()
    navigate('/MainWindow/Card')
    AddItem(PostID)
    httpFact()
};

export default ToCard;