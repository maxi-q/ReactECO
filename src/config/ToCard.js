import AddItem from '../config/AddItem.js'

const ToCard = async(navigate, a) => {
    let PostID = a.GetPostID()
    navigate('/MainWindow/Card')
    AddItem(PostID)
};

export default ToCard;