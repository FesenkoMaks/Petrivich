import React from 'react'
import {findIconDefinition, IconDefinition, IconLookup} from '@fortawesome/fontawesome-svg-core'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fas)

const iconDefinition = (iconName: any, pref?: any): IconDefinition => {
    const prefix = pref ? pref : 'fas'
    const Lookup: IconLookup = {prefix: prefix, iconName: iconName}
    return findIconDefinition(Lookup)
}

// создаете новую иконку с именем из каталога https://fontawesome.com/icons (только free)
const SignInAlt = () => <FontAwesomeIcon icon={iconDefinition('sign-in-alt')}/>
const SignOutAlt = () => <FontAwesomeIcon icon={iconDefinition('sign-out-alt')}/>
const Key = () => <FontAwesomeIcon icon={iconDefinition('key')}/>
const Lock = () => <FontAwesomeIcon icon={iconDefinition('lock')}/>
const Error = () => <FontAwesomeIcon icon={iconDefinition('exclamation-circle')}/>
const Eye = () => <FontAwesomeIcon icon={iconDefinition('eye')}/>
const EyeSlash = () => <FontAwesomeIcon icon={iconDefinition('eye-slash')}/>
const Search = () => <FontAwesomeIcon icon={iconDefinition('search')}/>
const Home = () => <FontAwesomeIcon icon={iconDefinition('home')}/>
const UserFriend = () => <FontAwesomeIcon icon={iconDefinition('user-friends')}/>
const Camera = () => <FontAwesomeIcon icon={iconDefinition('camera')}/>
const Bell = () => <FontAwesomeIcon icon={iconDefinition('bell')}/>
const Music = () => <FontAwesomeIcon icon={iconDefinition('music')}/>
const User = () => <FontAwesomeIcon icon={iconDefinition('user')}/>
const News = () => <FontAwesomeIcon icon={iconDefinition('newspaper')}/>
const Message = () => <FontAwesomeIcon icon={iconDefinition('comments')}/>
const Comment = () => <FontAwesomeIcon icon={iconDefinition('comment-alt')}/>
const Film = () => <FontAwesomeIcon icon={iconDefinition('film')}/>

// добавляете в этот объект
const Icons = {
    SignInAlt,
    SignOutAlt,
    Key,
    Lock,
    Error,
    Eye,
    EyeSlash,
    Search,
    Home,
    UserFriend,
    Camera,
    Bell,
    Music,
    User,
    News,
    Message,
    Comment,
    Film,
}

export default Icons
// в таком виде вставляете в разметку: { Icons.coffee() }