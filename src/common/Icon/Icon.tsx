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
const RubleSign = () => <FontAwesomeIcon icon={iconDefinition('ruble-sign')}/>
const ShoppingCart = () => <FontAwesomeIcon icon={iconDefinition('shopping-cart')}/>
const ExclamationCircle = () => <FontAwesomeIcon icon={iconDefinition('exclamation-circle')}/>

// добавляете в этот объект
const Icons = {
    RubleSign,
    ShoppingCart,
    ExclamationCircle
}

export default Icons
// в таком виде вставляете в разметку: { Icons.coffee() }