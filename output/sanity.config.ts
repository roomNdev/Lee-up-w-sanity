import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { MdPhoto, MdStar } from 'react-icons/md'
// import SidebarList from './components/SidebarList'

export default defineConfig({
  name: 'default',
  title: 'techHub-blog',

  projectId: 'jg74t18n',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        console.log(context);
        return S.list()
            .title('TechHub-Blog')
            .items([
              S.listItem()
                .title('Destacados(escritura creativa)')
                .id('featuredItems')
                .icon(MdStar)
                .child(S.editor().schemaType('featured').documentId('featuredItems')),
              S.listItem()
                .title('Foto principal')
                .id('626d339a-5852-4625-9837-fc7ee801a76b')
                .icon(MdPhoto)
                .child(S.editor().schemaType('principalPhoto').documentId('626d339a-5852-4625-9837-fc7ee801a76b')),
              // ...S.documentTypeListItems().filter(
              //   (item) => item.getId() !== 'principalPhoto'
                // ),
                ...S.documentTypeListItems().filter(
                (item) => item.getId() !== 'featured' && item.getId() !== 'principalPhoto'
                ),
            ],);
        },
        
    }),
   visionTool()],

  schema: {
    types: schemaTypes,
  },
  
})
