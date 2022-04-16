const CheckItem = (item) => {
    const Profiles = require("../data.json")
    const Items = Profiles.find(item => item.UUID === "wasd333").achivements.split(' ').map(parseFloat)
    return Items.indexOf(item) != -1
}
const AddInProfile = (num) => {
    const Profiles = require("../data.json")
    const Profile = Profiles.find(item => item.UUID === "wasd333")
    Profile.achivements = Profile.achivements + " " + num
}
const GiveRevard = (revardId) => {
    const Profiles = require("../data.json");
    const Profile = Profiles.find((item) => item.UUID === "wasd333");
    CheckItem(revardId) ? console.log("достижение уже есть") : AddInProfile(revardId)
}
export default GiveRevard