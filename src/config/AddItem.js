import Cookies from 'universal-cookie'

const CheckItem = (item, Profile) => {


    const Items = Profile.facts.split(' ').map(parseFloat)
    return Items.indexOf(item) != -1
}

const AddInProfile = (num, cookies) => {
    const Profile = cookies.get('profile', [true])
    Profile.facts = Profile.facts + " " + num
    cookies.set('profile', Profile, { path: '/' })
}

const AddItem = (PostID) => {
    const cookies = new Cookies();
    const Profile = cookies.get('profile', [true])
    let a
    CheckItem(PostID, Profile) ? a = 0 : AddInProfile(PostID, cookies)
}

export default AddItem;