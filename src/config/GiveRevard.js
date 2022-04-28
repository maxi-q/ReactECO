import Cookies from 'universal-cookie'

const CheckItem = (item) => {
    const Profiles = require("../data.json")

    const cookies = new Cookies();
    const Items = cookies.get('profile', [true]).achivements.split(' ').map(parseFloat)
    return Items.indexOf(item) != -1
}
const AddInProfile = (num) => {
    const cookies = new Cookies();
    const Profile = cookies.get('profile', [true])
    Profile.achievements += " " + num
    cookies.set('profile', Profile, [{ path: '/' }])
    
}
const GiveRevard = (revardId) => {
    CheckItem(revardId) ? console.log("достижение уже есть") : AddInProfile(revardId)
}
export default GiveRevard