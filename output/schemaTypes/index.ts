import blockContent from './blockContent'
import customImage from './objects/customImage';
import normalText from './objects/normalText';
import richText from './objects/richText';

import areas from './documents/areas';
import principalPhoto from './documents/principalPhoto'
import category from './documents/category'
import blog from './documents/blog'
import author from './documents/author'
import featured from './documents/featured'
import poetry from './documents/poetry';
import ciclo from './documents/ciclo';
import genre from './documents/genre';

export const schemaTypes = [
    //contenidos
    blog,
    principalPhoto,
    poetry,
    author, 
    category, 
    featured, 
    areas,
    ciclo,
    genre,

    //Objetos
    blockContent, 
    customImage, 
    normalText,
    richText
]
