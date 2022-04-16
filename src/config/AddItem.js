const CheckItem = (item) => {
    const Profiles = require("../data.json")
    const Items = Profiles.find(item => item.UUID === "wasd333").unlocked_items.split(' ').map(parseFloat)
    return Items.indexOf(item) != -1
}

const AddInProfile = (num) => {
    const Profiles = require("../data.json")
    const Profile = Profiles.find(item => item.UUID === "wasd333")
    Profile.unlocked_items = Profile.unlocked_items + " " + num
}

const AddItem = (PostID) => {
    let a
    CheckItem(PostID) ? a = 0 : AddInProfile(PostID)
}

export default AddItem;